const app = new Vue({
    el: "#app",
    data: {
        arr: [1, 2, 3, 4, 5],
        users: ['user1', 'user2', 'user3'],
        employees: {
            employee1: '100$',
            employee2: '200$',
            employee3: '300$',
        },
        hrefs: [
            {href: '1.html', text: 'link 1'},
            {href: '2.html', text: 'link 2'},
            {href: '3.html', text: 'link 3'},
        ],
        products: [
            {name: 'Apple', price: 100, quantity: 5},
            {name: 'Orange', price: 200, quantity: 4},
            {name: 'Cucumber', price: 300, quantity: 3},
        ],
        elems: [
            {name: "Mike", property: "cool"},
            {name: "Leo", property: "jerk"}
        ]
    }
});