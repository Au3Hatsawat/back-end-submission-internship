import express from 'express';
import { createCart } from 'models/cart';
import { getProductById } from 'models/product';

export const newCart = async (req: express.Request , res: express.Response): Promise<any> => {
    try {
        const { products } = req.body;
        var total_price = 0;
        products.array.forEach(async (values: any) => {
            const product = await getProductById(values.product_Id);
            total_price += product.product_price;
        });

        const cart = await createCart({
            products,
            total_price,
        });

        return res.status(200).json(cart).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}