const app = new Vue({
    el: "#app",
    data:{
        pBgColor: "red",

        pFontSize: 15,

        style1: {
            fontSize: "20px",
            color: "red",
            backgroundColor: "black",
            borderRadius: "20px",
            width: "300px"
        },
        style2: {
            fontSize: "40px",
            color: "blue",
            backgroundColor: "grey",
            borderRadius: "10px",
            width: "500px"
        }
    },
    methods: {
        changePBgColor: function () {
            this.pBgColor = "black";
        },

        increasePFontSize: function () {
            this.pFontSize += 2;
        }
    }
});