import express from 'express';
import { newCart } from 'controllers/cart_controllers';

export default (router: express.Router) => {
    router.post('/carts/add' , newCart);
};