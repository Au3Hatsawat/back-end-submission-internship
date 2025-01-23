import express from 'express';
import { newProduct , getAll , updateProduct , deleteProduct, getById, getByName} from '../controllers/product_controllers';

export default (router: express.Router) => {
    router.post('/products/add' , newProduct);
    router.get('/products/' , getAll);
    router.get('/products/:_id' , getById);
    router.get('/products/name/:product_name' , getByName);
    router.put('/products/update/:_id' , updateProduct);
    router.delete('/products/delete/:_id' , deleteProduct);
};

