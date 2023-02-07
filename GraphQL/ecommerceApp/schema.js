const {gql} = require("apollo-server");

exports.typeDefs = gql`
    type Query{
        products(filter: ProductsFilter): [Product!],
        product(id: ID!): Product,
        categories: [Category!],
        category(id: ID!): Category
    },
    
    type Mutation{
        addCategory(input: AddCategoryInput): Category!,
        addProduct(input: AddProductInput): Product!,
        addReview(input: AddReviewInput): Review!,
        
        deleteCategory(id: ID!): Boolean!,
        
        updateCategory(id: ID!, input: AddCategoryInput!): Category
    }

    type Product {
        id: ID!,
        name: String!,
        description: String,
        price: Float!,
        onSale: Boolean!,
        category: Category,
        reviews: [Review!]
    },

    type Category{
        id: ID!,
        name: String!,
        products(filter: ProductsFilter): [Product!]
    },
    
    type Review{
        id: ID!,
        title: String!,
        content: String!,
        rate: Int!,
        productId: ID!
    },
    
    input ProductsFilter{
        onSale: Boolean,
        averageRating: Int
    }
    
    input AddCategoryInput{
        name: String
    }
    
    input AddProductInput{
        name: String!,
        description: String,
        price: Float!,
        onSale: Boolean
    }
    
    input AddReviewInput{
        title: String!,
        content: String!,
        rate: Int!,
        productId: ID!
    }
    
    input UpdateCategoryInput{
        name: String!
    }
`;