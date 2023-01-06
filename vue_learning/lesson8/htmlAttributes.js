const app = new Vue({
    el: "#app",
    data: {
        pId: "redP",

        isButtonDisabled: false,
        pText: "",

        multiClass: "class1 class2",

        pColor: "",

        someClasses:{
            class2: true,
            red: true,
            white: false
        }
    },
    methods:{
        showClick: function () {
            this.pText += "click ";
        }
    }
});