import express from 'express';
import { createCart, deleteCartById, getCart, getCartById, updateCartById } from '../models/cart';
import { getProductById } from '../models/product';

export const newCart = async (req: express.Request , res: express.Response): Promise<any> => {
    try {
        // const products: Array<any> = req.body.products;
        // var total_price: Awaited<number> = 0;

        // // const cart = await createCart({
        // //     products,
        // //     total_price
        // // });

        
        // var updated_cart;
        // const length = products.length;
        // console.log(length);
        // products.forEach( async (values: any,index: number) => {
        //     const product = await getProductById(values.product_Id);
        //     total_price += product.product_price * values.amount;
        //     console.log(total_price);
        //     if(index == length-1){
        //         // total_price = total_price - (total_price * ((length-1)*10) / 100);
        //         console.log(total_price);
        //         console.log(index);
        //         // updated_cart = await updateCartById(cart._id.toString() , {products,total_price});
        //     }
        // });
        // // const get_cart = await getCartById(cart._id.toString());
        
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const deleteCart = async (req: express.Request , res: express.Response): Promise<any> => {
    try {
        const { _id } = req.params;
        const cart = await deleteCartById(_id);

        return res.status(200).json(cart).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const getAll = async (req: express.Request , res: express.Response): Promise<any> => {
    try {
        const cart = await getCart();
        return res.status(200).json(cart).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}