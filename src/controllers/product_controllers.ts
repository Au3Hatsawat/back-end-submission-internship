import express from 'express';
import { createProduct , getProduct , updateProductById , deleteProductById, getProductById, getProductByName, getProductByCategory} from '../models/product';
import { Pagiantion } from '../helpers/pagination';

export const newProduct = async (req: express.Request, res: express.Response): Promise<any> => {
    try {
        const {product_name , product_price , category} = req.body;
        const product = await createProduct({
            product_name,
            product_price,
            category
        });
        
        return res.status(200).json(product).end();
    } catch ( error ) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const getProductInCategory = async (req: express.Request , res: express.Response): Promise<any> => {
    try {
        const { category } = req.params;
        const product = await getProductByCategory(category);

        return res.status(200).json(product).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const getProductCategoryPerPage = async (req: express.Request , res: express.Response): Promise<any> => {
    try {
        const { category , _page } = req.params;
        const product = await getProductByCategory(category);

        const result = Pagiantion(product , parseInt(_page));
        if(result === 400){
            return res.sendStatus(400);
        }

        return res.status(200).json(result).end();
    } catch (error) {  
        console.log(error);
        return res.sendStatus(400);
    }
}

export const getProductPerPage = async (req: express.Request , res: express.Response): Promise<any> => {
    try {
        const product = await getProduct();
        const numberPerPage = 12;
        const totalPage = product.length / numberPerPage;
        const page = parseInt(req.params._page);
        const start = (page - 1) * numberPerPage;


        if(page > totalPage){

            if(!!(totalPage % 1) && page <= totalPage + 1 ){
                // Indivisible condition...
                const total = (totalPage%1)*numberPerPage;
                const indivisibleResult = product.slice(start , start + total);
                return res.status(200).json(indivisibleResult).end();
    
            }else {
                return res.sendStatus(400);
            }

        }else if(totalPage == 0){
            // Didnt have products enough...
            return res.status(200).json(product).end();

        }else if(page == 0){
            return res.sendStatus(400);
        }

        const end = start + numberPerPage;
        const result = product.slice(start , end);

        return res.status(200).json(result).end();
    } catch (error) {
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