import os
from tkinter import Image
from dotenv import load_dotenv
import google.generativeai as genai
from PIL import Image
from typing import Union
from pydantic import BaseModel
import base64
from io import BytesIO
from fastapi.middleware.cors import CORSMiddleware

from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
import json

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
load_dotenv()
secret_key = os.environ.get("GEMINI_API_KEY")
genai.configure(api_key=secret_key)

encadrement_nutrition = """
Please analyze the nutritional content of the meal in the provided image.
Identify the food items present and estimate the amounts of the following nutrients for each item and the total meal:
- Calories
- Protein (g)
- Total Fat (g)
- Carbohydrates (g)
- Fiber (g)
- Sugar (g)
- Sodium (mg)

Provide the results in JSON format. The JSON should have a top-level key "meal_analysis" containing an array of objects, where each object represents a food item and has the following keys:
- "name": The name of the food item.
- "estimated_weight_grams": Your best estimate of the weight of the food item in grams.
- "nutrients": An object containing the estimated amounts for each of the requested nutrients.

Also include a top-level key "total_nutrients" with the sum of each nutrient for the entire meal.

If you cannot identify the food items or estimate their nutritional content, please respond with a JSON object containing an "error" key with a descriptive message.
"""

model = genai.GenerativeModel('gemini-pro-vision')  # Use 'gemini-pro-vision' for image analysis

# Load the image
image_path = "./images/image.png"  # Adjust path if needed
try:
    image = Image.open(image_path)
except FileNotFoundError:
    print(f"Error: Image not found at {image_path}")
    image = None


class ImageRequest(BaseModel):
    image: str

@app.post("/process-image/")
async def process_image(request: ImageRequest):
    if image is None:
        return JSONResponse(
            status_code=400,
            content={"error": "Could not load the image."}
        )
    try:
        # Decode Base64 and convert to bytes for Gemini
        image_data = base64.b64decode(request.image)

        # Process with Gemini Vision
        response = model.generate_content(
            [
                encadrement_nutrition.strip(),
                {"mime_type": "image/png", "data": image_data} # Adjust mime_type if needed
            ]
        )
        res = response.text.replace("```json", "").replace("```", "")
        return JSONResponse(
            status_code=200,
            content=json.loads(res)
        )
    except json.JSONDecodeError:
        return JSONResponse(
            status_code=500,
            content={"error": f"Could not decode JSON response: {response.text}"}
        )
    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=f"Error processing image: {str(e)}"
        )

# You can optionally keep the old endpoint for damage analysis if needed
# @app.post("/process-damage/")
# async def process_damage(request: ImageRequest):
#     try:
#         # Decode Base64 and convert to PIL Image
#         image_data = base64.b64decode(request.image)
#         pil_image = Image.open(BytesIO(image_data))

#         # Process with Gemini
#         response = model.generate_content(
#             [
#                 encadrement.strip(),
#                 pil_image
#             ]
#           )
#         res = response.text.replace("```json", "").replace("```", "")
#         return JSONResponse(
#             status_code=200,
#             content= json.loads(res)
#         )
#     except Exception as e:
#         raise HTTPException(
#             status_code=400,
#             detail=f"Error processing image: {str(e)}"
#         )