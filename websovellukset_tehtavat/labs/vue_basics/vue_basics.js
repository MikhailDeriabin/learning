const app = new Vue({
    el: "#app",
    data: {
        userInput: "Type something",

        seen: true,

        speed: 0,

        newTodo: "",
        todoList: [],

        newUser: "",
        users: []
    },

    methods: {
        Vaihda: function () {
            this.seen = !this.seen;
        },

        reduceSpeed: function (){
            if(this.speed > 0)
                this.speed--;
        },
        stop: function (){
            this.speed = 0;
        },
        increaseSpeed: function (){
            this.speed++;
        },

        addTodo: function (){
            if(this.newTodo !== "")
                this.todoList.push(this.newTodo);
        },

        addUser: function (){
            if(this.newUser !== "")
                this.users.push(this.newUser);
        },
        removeFirstUser: function (){
            this.users.shift();
        },
        deleteUserByIndex: function (index) {
            this.users.splice(index, 1);
        }
    }

});