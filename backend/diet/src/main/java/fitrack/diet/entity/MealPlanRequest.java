package fitrack.diet.entity;

import java.util.List;
import java.util.Map;

public class MealPlanRequest {
    private int size;
    private Plan plan;

    // Getters and Setters
    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public Plan getPlan() {
        return plan;
    }

    public void setPlan(Plan plan) {
        this.plan = plan;
    }

    public static class Plan {
        private Accept accept;
        private Fit fit;
        private Map<String, Object> sections;

        // Getters and Setters
        public Accept getAccept() {
            return accept;
        }

        public void setAccept(Accept accept) {
            this.accept = accept;
        }

        public Fit getFit() {
            return fit;
        }

        public void setFit(Fit fit) {
            this.fit = fit;
        }

        public Map<String, Object> getSections() {
            return sections;
        }

        public void setSections(Map<String, Object> sections) {
            this.sections = sections;
        }
    }

    public static class Accept {
        private List<Map<String, List<String>>> all;

        public List<Map<String, List<String>>> getAll() {
            return all;
        }

        public void setAll(List<Map<String, List<String>>> all) {
            this.all = all;
        }
    }

    public static class Fit {
        private Map<String, Range> ENERC_KCAL;
        private Map<String, Range> PROCNT;

        public Map<String, Range> getENERC_KCAL() {
            return ENERC_KCAL;
        }

        public void setENERC_KCAL(Map<String, Range> ENERC_KCAL) {
            this.ENERC_KCAL = ENERC_KCAL;
        }

        public Map<String, Range> getPROCNT() {
            return PROCNT;
        }

        public void setPROCNT(Map<String, Range> PROCNT) {
            this.PROCNT = PROCNT;
        }

        public static class Range {
            private int min;
            private int max;

            public int getMin() {
                return min;
            }

            public void setMin(int min) {
                this.min = min;
            }

            public int getMax() {
                return max;
            }

            public void setMax(int max) {
                this.max = max;
            }
        }
    }
}
