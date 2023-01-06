const app = new Vue({
    el: "#app",
    data:{
        message: "Hello there",
        newMessage: "Hi",
        todoList: ["Buy a milk", "Clean the room", "Have a walk", "Kill somebody"]
    },
    methods: {
        changeMessage: function(){
            this.message = this.newMessage;
        },
        addTodo: function (){
            this.todoList.push("new todo");
        },
        removeFirstTodo: function (){
            this.todoList.shift();
        },
        removeLastTodo: function (){
            this.todoList.pop();
        },
    }
});