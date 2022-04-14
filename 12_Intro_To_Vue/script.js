Vue.createApp({
    data() {
        return {
            message: "Hello, Vue!",
            second_message: "This is my second message.",
        };
    },
}).mount("#myapp");
Vue.createApp({
    data() {
        return {
            count: 0,
        }
    },
    mounted() {
        setInterval(() => { this.count++; }, 1000);
    },
}).mount("#counter");

Vue.createApp({
    data() {
        return {
            message: "Hello Vue.js",
        }
    },
    methods: {
        reverseMessage() {
            this.message = this.message
                .split("")
                .reverse()
                .join("");
        }
    }
}).mount("#handler");