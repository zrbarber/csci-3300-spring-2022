const app = {
    data() {
        return {
            booktitle: "",
            title: "Title",

            bookauthor: "",
            author: "Author",

            booksubject: "",
            subject: "Subject",
        };
    },
    methods: {
        letsGo() {
            if (this.booktitle == "" || this.bookauthor == "" || this.booksubject == "") {
                alert("Error! Please enter information into all fields!");
            }
            else {
                this.title = this.booktitle;
                this.author = this.bookauthor;
                this.subject = this.booksubject;
            }
        }
    }
};

Vue.createApp(app).mount("#myapp");