import express from 'express';
import product_route from './product_route';
import cart_route from './cart_route';

const router = express.Router();


export default (): express.Router => {
    product_route(router);
    cart_route(router);
    return router;
};