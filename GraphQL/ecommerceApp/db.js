const products = [
    {
        id: "1",
        name: "Car",
        description: "Very nice and fast car",
        price: 1234.67,
        onSale: false,
        categoryId: "2"
    },
    {
        id: "2",
        name: "Table",
        description: "The best table in the world",
        price: 50.12,
        onSale: true,
        categoryId: "1"
    }
];

const categories = [
    {
        id: "1",
        name: "Furniture"
    },
    {
        id: "2",
        name: "Vehicles"
    }
];

const reviews = [
    {
        id: "1",
        title: "Very nice",
        content: "The best item I ever had",
        rate: 5,
        productId: "1"
    },
    {
        id: "2",
        title: "Very bad",
        content: "I hate that",
        rate: 2,
        productId: "1"
    },
    {
        id: "3",
        title: "OMG",
        content: "Did not expect that, but it is very good",
        rate: 5,
        productId: "2"
    },
    {
        id: "4",
        title: "Nope",
        content: "The item has scratches. Can not recommend",
        rate: 1,
        productId: "2"
    }
];

module.exports = { products, categories, reviews }
