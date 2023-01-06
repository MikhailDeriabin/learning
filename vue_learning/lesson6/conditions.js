const app = new Vue({
    el: "#app",
    data:{
        show: true,
        isDisplayed: true,
        buttonText: "hide text",
        showText: "show text",
        hideText: "hide text",
        isDisplayed1: true,
        textArr: ["1. paragraph", "2. paragraph", "3. paragraph"],
        showTextPar: [true, true, true],
        isGreeting: false,
        personName: "Peter Parker",
        age: 20
    },
    methods: {
        toggleVisibility: function (){
            this.isDisplayed = !this.isDisplayed;
            if(this.isDisplayed)
                this.buttonText = this.hideText;
            else
                this.buttonText = this.showText;
        },

        toggleVisibility1: function (){
            this.isDisplayed1 = !this.isDisplayed1;
        },

        toggleParVis: function (index){
            const newStatus = !this.showTextPar[index];
            this.showTextPar.splice(index, 1, newStatus);
        }
    }

});