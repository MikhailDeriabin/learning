const { v4: uuid } = require("uuid");
const {categories} = require("../db");

module.exports.Mutation = {
    addCategory: (parent, args, context) => {
        const { name } = args.input;

        const category = {
            id: uuid(),
            name: name,
            products: []
        }
        context.categories.push(category);

        return category;
    },

    addProduct: (parent, args, context) => {
        const product = args.input;
        product.id = uuid();
        product.reviews = [];
        product.category = null;
        if(args.input.onSale === null)
            product.onSale = false;
        if(args.input.description === null)
            product.description = "";

        context.products.push(product);
        return product;
    },

    addReview: (parent, args, context) => {
        const review = args.input;
        review.id = uuid();

        context.push(review);
        return review;
    },

    deleteCategory: (parent, args, context) => {
        const category = context.categories.find( category => category.id === args.id );
        if(category == null)
            return false;

        context.products.forEach( product => {
            if(product.categoryId === category.id)
                product.categoryId = null;
        });

        for(let i=0; i<context.categories.length; i++){
            if(context.categories[i].id === args.id){
                context.categories.splice(i, 1);
                return true;
            }
        }

        return false;
    },

    updateCategory: (parent, args, context) => {
        const category = context.categories.find( category => {
            if(category.id === args.id) {
                category.name = args.input.name;
                return category;
            }
        });

        return category;
    }
}