const app = new Vue({
    el: "#app",
    data:{
        message: "",
        items: ["item1", "item2","item3","item4","item5"],
        nums:[2,3,4,5,6]
    },
    methods: {
        showMessage: function(msg){
            this.message = msg;
        },
        removeItem: function(i){
            this.items.splice(i, 1);
        },
        showSquare: function(index){
            const square = Math.pow(this.nums[index], 2)
            this.nums.splice(index, 1, square);
        }
    }
});