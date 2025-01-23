import express from 'express';
import product_route from './product_route';

const router = express.Router();


export default (): express.Router => {
    product_route(router);
    return router;
};