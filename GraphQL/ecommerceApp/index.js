const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const {categories, products, reviews} = require("./db");

const resolvers = {
    Query: Query,
    Mutation: Mutation,
    Category: Category,
    Product: Product
};
const context = {
    categories,
    products,
    reviews
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context //after that u can access that object in all the resolvers
});

server.listen().then((info) => {
    console.log('Server is at ' + info.url);
});