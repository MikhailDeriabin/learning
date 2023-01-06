const app = new Vue({
    el: "#app",
    data: {
        message: "hello",

        userNum: null,
        squareNum: "",

        userInput1: "",
        userInput2: "",
        isInLeftInput: true,

        userInput: "",
        firstname: "",
        lastname: "",

        newTask: "",
        tasks: [],
        doneTasks: [],

        lang: [],

        answer: "",

        motherLang: "",

        townList: ["Helsinki", "Espoo", "Vantaa", "Lahti", "Turku"],
        town: ""
    },
    methods:{
        getSquare: function () {
            this.squareNum = Math.pow(this.userNum, 2);
        },

        moveInputMsg: function () {
            if (this.isInLeftInput){
                this.userInput2 = this.userInput1;
                this.userInput1 = "";
            } else {
                this.userInput1 = this.userInput2;
                this.userInput2 = "";
            }

            this.isInLeftInput = !this.isInLeftInput;
        },

        savePersonName: function () {
            const userInput = this.userInput;
            const firstLastNameArr = userInput.split(" ");
            this.firstname = firstLastNameArr[0];
            this.lastname = firstLastNameArr[1];
        },

        addTask: function () {
            if (this.newTask !== "")
                this.tasks.push(this.newTask);
            this.newTask = "";
        },
        removeTask: function (index) {
            const doneTask = this.tasks.splice(index, 1);
            this.doneTasks.push(doneTask[0]);
        }
    }
});