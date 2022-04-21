const app = {
    data() {
        return {
            products: [
                { "name": "Umbrella", "price": 14.99 },
                { "name": "Rain Coat", "price": 119.99 },
                { "name": "Swim Suit", "price": 40.00 },
            ],
            tobuy: "",
            quantity: 0,
            cart: [],
            total: 0,
        };
    },
    methods: {
        purchase() {
            let name = this.tobuy;
            let quantity = this.quantity;
            let price = 0;

            for (let product of this.products) {
                if (name == product.name) {
                    price = product.price;
                }
            }

            let cartItem = {
                "name": name,
                "quantity": quantity,
                "price": price,
            }

            this.cart.push(cartItem);
            this.total += this.quantity * price;
        }
    }
};

Vue.createApp(app).mount("#mypos");