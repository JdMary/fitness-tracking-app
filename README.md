# 🚀 FiTrack-PI-ARCTIC 🏋️‍♂️

Maintaining an active and healthy lifestyle can be challenging, especially when motivation, structured guidance, and social support are lacking. **FiTrack** is an all-in-one fitness web application designed to empower users in achieving their health and wellness goals. It offers a comprehensive set of tools for:

- 🏃 **Workout tracking**
- 🥗 **Personalized diet planning**
- 🏢 **Sports facility promotions**
- 🤝 **Fitness community engagement**

## 🎯 Why FiTrack?

Targeted at fitness enthusiasts, beginners seeking guidance, and individuals aiming to improve their overall well-being, **FiTrack** addresses the common struggles of staying committed to a fitness routine. The platform integrates **social features**, such as finding a sports buddy or a personal trainer nearby, fostering a community-driven environment that enhances accountability and motivation.

Beyond fitness, **FiTrack** aligns with key **Sustainable Development Goals (SDGs)**:

- 🌍 **SDG 3 (Good Health and Well-being):** Promoting an active lifestyle and preventive healthcare.
- 🤝 **SDG 17 (Partnerships for the Goals):** Encouraging collaboration between sports facilities, trainers, and users to create a more connected and health-conscious society.

Users can enjoy **gamified features** 🎮 such as XP points, leaderboards, and rewards 🏆, ensuring a fun and engaging fitness journey while making meaningful progress toward their health goals.

---

## 🛠️ Technologies Used

- 🎨 **Frontend:** Angular 15, TypeScript, Bootstrap
- 🏗️ **Backend:** Spring Boot, Java, MySQL
- 🚢 **Tools & Deployment:** Docker, REST API, JWT Authentication

---

# 🎨 Frontend - Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version **15.1.3**.

## ▶️ Development Server

Run the following command to start the development server:

```sh
cd frontend
npm install
ng serve
```
Navigate to `http://localhost:4200/`. The application will automatically reload if you modify any source files.

## 🏗️ Code Scaffolding

Generate a new component using:

```sh
ng generate component component-name
```

You can also generate other elements like directives, pipes, services, classes, guards, interfaces, enums, or modules:

```sh
ng generate directive|pipe|service|class|guard|interface|enum|module
```

## 🏗️ Building the Project

Run:

```sh
ng build
```

The build artifacts will be stored in the `dist/` directory.

## 🧪 Running Unit Tests

```sh
ng test
```

Executes unit tests via Karma.

## 🔍 Running End-to-End Tests

```sh
ng e2e
```

Executes end-to-end tests via a platform of your choice. Install a package that implements end-to-end testing capabilities before using this command.

## ❓ Further Help

For more Angular CLI commands, run:

```sh
ng help
```

Or check out the [Angular CLI Documentation](https://angular.io/cli).

---

# 🏗️ Backend - Spring Boot

The backend is built with Spring Boot, providing RESTful APIs for user authentication, workout tracking, and fitness data management.

## 🛠️ Setup & Running the Backend

### 🔗 Clone the repository

```sh
git clone https://github.com/your-repo/FiTrack-PI-ARCTIC.git
cd backend
```

### 🛢️ Configure the database

Update `application.properties` or `application.yml` with your MySQL credentials:

```ini
server.port = 8095

### DATABASE ###
spring.datasource.url=jdbc:mysql://localhost:3306/fitrack?createDatabaseIfNotExist=true&useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=
```

### ▶️ Run the application

Using Maven:

```sh
mvn spring-boot:run
```

Or using Java directly:

```sh
java -jar target/fitrack-1.0.0.jar
```

## 🔗 API Endpoints

#### Under Construction 🚧

## 🧪 Running Tests

Run unit and integration tests with:

```sh
mvn test
```

## 📦 Building the Project

Package the application as a JAR file:

```sh
mvn clean package
```

This will generate `target/fitrack-1.0.0.jar`, which you can run with:

```sh
java -jar target/fitrack-1.0.0.jar
```

## ❓ Further Help

For more Java CLI commands, run:

```sh
java --help
```

Or check out the [Java CLI Documentation](https://docs.oracle.com/en/java/javase/19/docs/specs/man/java.html).

---

# 🐳 Docker Support

If using Docker, you can build and run the application using:

```sh
docker-compose up --build
```

---

# 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue if you encounter any problems.

---

# 📜 License

This project is licensed under the GPL-3.0 license.
