exports.Product = {
    category: (parent, args, context) => {
        const categories = context.categories;
        return categories.find( category => category.id === parent.categoryId );
    },

    reviews: (parent, args, context) => {
        return context.reviews.filter( review => review.productId === parent.id );
    }
}