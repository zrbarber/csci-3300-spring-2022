const app = {
    data() {
        return {
            score: 0
        };
    },
    methods: {
        subtract(value) {
            this.score -= value;
        },
        add(value) {
            this.score += value;
        },
        reset() {
            this.score = 0;
        }
    },
    template: `<label for="name">Name: </label>
    <input type="text" name="name" id="name">
    <br>
    <button @click="subtract(100)">-100</button>
    <button @click="subtract(10)">-10</button>
    <button @click="subtract(1)">-</button>
    {{ score }}
    <button @click="add(1)">+</button>
    <button @click="add(10)">+10</button>
    <button @click="add(100)">+100</button>
    <br>
    <button @click="reset" id="reset">Reset</button>`
};

Vue.createApp(app).mount("#scoreA");
Vue.createApp(app).mount("#scoreB");
Vue.createApp(app).mount("#scoreC");
Vue.createApp(app).mount("#scoreD");
