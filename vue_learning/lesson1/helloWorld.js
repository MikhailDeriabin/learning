const app = new Vue({
   el: "#app",
   data: {
       greeting: "Hello",
       goodbye: "Goodbye",
       firstname: "Leo",
       surname: "Loh"
   }
});

const math = new Vue({
    el: "#math",
    data: {
        num: 5,
        num1: 1,
        num2: 2,
        num3: 3
    }
});

const array = new Vue({
    el: "#array",
    data: {
        nums: [4,5,6]
    }
});

const obj = new Vue({
    el: "#obj",
    data: {
        nums: {
            a: 7,
            b: 8,
            c: 9
        }
    }
});