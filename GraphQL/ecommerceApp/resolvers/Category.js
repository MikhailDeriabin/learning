exports.Category = {
    products: (parent, args, context) => {
        const categoryId = parent.id;
        const products = context.products;

        const foundedProducts = products.filter( product => product.categoryId === categoryId )

        if(args.filter != null){
            if(args.filter.onSale != null)
                return foundedProducts.filter( product => product.onSale === args.filter.onSale );
        }

        return foundedProducts;
    }
};