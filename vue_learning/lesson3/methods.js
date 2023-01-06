const app = new Vue({
    el: "#app",
    data: {
        message: "hello",
        num1: 2,
        num2: 3,
        num3: 6,
        text: "Leo is loh"
    },
    methods:{
        show: function(){
            alert(this.num1 + this.num2);
        },
        say: function(){
            alert(this.text);
        },
        getNumSum: function (){
            const sum = this.num1 + this.num2 + this.num3;
            alert("The sum of numbers " + this.num1 + ", " + this.num2 + " and " + this.num3 + " is " + sum);
        }
    }
});