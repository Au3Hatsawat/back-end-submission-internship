import express from 'express';
import { deleteCart, getAll, newCart} from '../controllers/cart_controllers';

export default (router: express.Router) => {
    router.get('/carts/' , getAll);
    router.post('/carts/add' , newCart);
    router.delete('/carts/delete/:_id' , deleteCart);
};