import express from 'express';
import { createProduct , getProduct , updateProductById , deleteProductById, getProductById, getProductByName} from '../models/product';
import { promises } from 'dns';

export const newProduct = async (req: express.Request, res: express.Response): Promise<any> => {
    try {
        const {product_name , product_price} = req.body;
        const product = await createProduct({
            product_name,
            product_price,
        });
        
        return res.status(200).json(product).end();
    } catch ( error ) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const getAll = async (req: express.Request , res: express.Response): Promise<any> => {
    try {
        const product = await getProduct();

        return res.status(200).json(product).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const getById = async (req: express.Request , res: express.Response): Promise<any> => {
    try {
        const {_id} = req.params;
        const product = await getProductById(_id);

        return res.status(200).json(product).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const getByName = async (req: express.Request , res: express.Response): Promise<any> => {
    try {
        const {product_name} = req.params;
        const product = await getProductByName(product_name);
        
        return res.status(200).json(product).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const updateProduct = async (req: express.Request , res: express.Response): Promise<any> => {
    try {
        const {_id} = req.params;
        const {product_name , product_price} = req.body;
        const product = await updateProductById(_id , {
            product_name,
            product_price,
        });
        
        return res.status(200).json(product).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const deleteProduct = async (req: express.Request , res: express.Response): Promise<any> => {
    try{
        const {_id} = req.params;
        const product = await deleteProductById(_id);

        return res.status(200).json(product).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}