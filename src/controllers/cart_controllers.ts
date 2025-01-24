import express from 'express';
import { CartModel, createCart, deleteCartById, getCart, getCartById, updateCartById } from '../models/cart';
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

                    // Add the product to the cart
                    cart.products.push({ product_Id, amount });

                    // Update total price
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
        const {_id } = req.params;
        const products:Array<any> = req.body;
        const cart = await getCartById(_id);

        await Promise.all(
            products.map(async (values: any) => {
                const { product_Id, amount } = values;

                try {
                    const product = await getProductById(product_Id);

                    // Add the product to the cart
                    cart.products.push({ product_Id, amount });

                    // Update total price
                    cart.total_price += product.product_price * amount;
                    
                } catch (error) {
                    console.error(`Error fetching product with ID ${product_Id}:`, error);
                }
            })
        );

        await cart.save();

        return res.status(200).json(cart).end();
        
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
} 