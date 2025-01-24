import express from 'express';
import { addProductsToCart, deleteCart, getAll, newCart} from '../controllers/cart_controllers';

export default (router: express.Router) => {
    router.get('/carts/' , getAll);
    router.post('/carts/new' , newCart);
    router.delete('/carts/delete/:_id' , deleteCart);
    router.put('/carts/add/:_id' , addProductsToCart);
};