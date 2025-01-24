import express from 'express';
import { CartModel, createCart, deleteCartById, findProductById, getCart, getCartById, updateCartById, updateProductInCart } from '../models/cart';
import { getProductById } from '../models/product';
import { resolve } from 'path';
import { rejects } from 'assert';
import mongoose, { Model } from 'mongoose';

export const newCart = async (req: express.Request, res: express.Response): Promise<any> => {
    try {
        const products: Array<any> = req.body.products;
        const lenght = products.length;

        const cart = new CartModel({
            products : [],
            total_price : 0
        })
        
        await Promise.all(
            products.map(async (values: any) => {
                const { product_Id, amount } = values;

                try {
                    const product = await getProductById(product_Id);

                    cart.products.push({ product_Id, amount });
                    cart.total_price += product.product_price * amount;
                    
                } catch (error) {
                    console.error(`Error fetching product with ID ${product_Id}:`, error);
                }
            })
        );

        const total_price = cart.total_price;
        cart.total_price = total_price - (total_price * ((lenght - 1) * 10)/100);
        await cart.save();


        return res.status(200).json(cart).end();

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const deleteCart = async (req: express.Request, res: express.Response): Promise<any> => {
    try {
        const { _id } = req.params;
        const cart = await deleteCartById(_id);

        return res.status(200).json(cart).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const getAll = async (req: express.Request, res: express.Response): Promise<any> => {
    try {
        const cart = await getCart();
        return res.status(200).json(cart).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const addProductsToCart = async (req: express.Request , res: express.Response): Promise<any> => {
    try {
        const { _id } = req.params;
        const products:Array<any> = req.body.products;
        const cart = await getCartById(_id);

        await Promise.all(
            products.map(async (values: any) => {
                const { product_Id, amount } = values;

                try {
                    const product = await getProductById(product_Id);
                    const inCart = await findProductById(_id , product_Id);

                    if(inCart.length === 0) {
                        cart.products.push({ product_Id, amount });
                        cart.total_price += product.product_price * amount;
                    } else {
                        const newAmount = inCart[0].products[0].amount + amount;
                        cart.total_price += product.product_price * amount;
                        await updateProductInCart(_id,product_Id,newAmount);
                    }
                    
                } catch (error) {
                    console.error(`Error fetching product with ID ${product_Id}:`, error);
                }
            })
        );

        const total_price = cart.total_price;
        const productAmount = cart.products.length;
        cart.total_price = total_price - (total_price * (productAmount - 1)*10/100);
        await cart.save();

        return res.status(200).json(cart).end();
        
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
} 