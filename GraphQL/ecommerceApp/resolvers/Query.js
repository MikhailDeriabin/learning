exports.Query = {
    products: (parent, args, context) => {
        if(args.filter != null){
            if(args.filter.onSale != null)
                return context.products.filter( product => product.onSale === args.filter.onSale );
            if(args.filter.averageRating != null){
                return context.products.filter(
                    product => {
                        const reviews = context.reviews.filter( review => review.productId === product.id );
                        let ratingSum = 0;
                        reviews.forEach( review => ratingSum += review.rate);
                        return Math.round(ratingSum/reviews.length) === args.filter.averageRating ? product : null;
                    }
                );
            }
        }

        return context.products;
    },

    product: (parent, args, context) => {
        const products = context.products;
        const productFound = products.find( product => product.id === args.id );
        return productFound;
    },

    categories: (parent, args, context) => {
        return context.categories;
    },

    category: (parent, args, context) => {
        const categories = context.categories;
        return categories.find( category => category.id === args.id );
    }
};