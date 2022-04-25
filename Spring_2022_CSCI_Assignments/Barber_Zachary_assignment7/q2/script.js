const app = {
    data() {
        return {
            result: "Enter a distance to convert...",
            number: null,
            unit1: "",
            unit2: "",
        };
    },
    methods: {
        onInput() {
            let converted = 0;

            if (this.number == "") {
                this.result = "Enter a distance to convert...";
            }
            else if (isNaN(this.number) || this.number < 0) {
                this.result = "Error! Invalid input...";
            }
            else if (this.unit1 == "centimeters") {
                converted = this.number * 0.01;
            }
            else if (this.unit1 == "meters") {
                converted = this.number;
            }
            else if (this.unit1 == "kilometers") {
                converted = this.number * 1000;
            }
            else if (this.unit1 == "inches") {
                converted = this.number * 0.0254;
            }
            else if (this.unit1 == "feet") {
                converted = this.number * 0.305;
            }
            else if (this.unit1 == "miles") {
                converted = this.number * 1609.344;
            }

            if (this.unit2 == "centimeters") {
                this.result = converted * 100;
                this.result = this.result.toFixed(3);
                this.result += " ";
                this.result += this.unit2;
            }
            else if (this.unit2 == "meters") {
                this.result = converted;
                this.result = this.result.toFixed(3);
                this.result += " ";
                this.result += this.unit2;
            }
            else if (this.unit2 == "kilometers") {
                this.result = converted * 0.001;
                this.result = this.result.toFixed(3);
                this.result += " ";
                this.result += this.unit2;
            }
            else if (this.unit2 == "inches") {
                this.result = converted * 39.37;
                this.result = this.result.toFixed(3);
                this.result += " ";
                this.result += this.unit2;
            }
            else if (this.unit2 == "feet") {
                this.result = converted * 3.281;
                this.result = this.result.toFixed(3);
                this.result += " ";
                this.result += this.unit2;
            }
            else if (this.unit2 == "miles") {
                this.result = converted * 0.000621;
                this.result = this.result.toFixed(3);
                this.result += " ";
                this.result += this.unit2;
            }
        }
    }
};

Vue.createApp(app).mount("#myapp");