Vue.component("my-component", {
    template: "<div>This is my component</div>"
});
Vue.component("name", {
    props: ["person-name", "weather"],
    template: "<div>Hello {{ personName }}!" +
        "<p>Today is {{ weather }}</p>" +
        "</div>"
});

const app = new Vue({
    el: "#app",
    data:{
        nameValues:[
            {name: "Sauli Niinistö", weather: "sunny"},
            {name: "Peter Parker", weather: "rainy"},
            {name: "Superman", weather: "warm"},
        ]
    }
});