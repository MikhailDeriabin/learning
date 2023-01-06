const app = new Vue({
    el: "#app",
    data:{
        message: "hello",

        sentence: "This is a sentence",

        weekNum: 4,

        upperCaseWord: "HELLO"
    },
    filters:{
        capitalize: function (str) {
            return str[0].toUpperCase() +str.slice(1);
        },
        uppercase: function (str) {
            return str.toUpperCase();
        },
        lowercase: function(str) {
            return str.toLowerCase();
        },
        capitalizeWords: function (str) {
            const words = str.split(" ");
            for (let i=0; i<words.length; i++){
                words[i] = words[i][0].toUpperCase() + words[i].slice(1);
            }
            return words.join(" ");
        },
        getWeekDay: function (number) {
            const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            if(number>=1 && number<=7)
                return weekDays[number-1];
            return "wrong week day";
        },
        makeAbsolutePos: function (className){
            return className += "-absolute";
        }
    },
    methods: {

    }
});