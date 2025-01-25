import express from 'express';
import { newProduct , getAll , updateProduct , deleteProduct, getById, getByName, getProductPerPage, getProductCategoryPerPage, getProductInCategory} from '../controllers/product_controllers';

export default (router: express.Router) => {
    // Get method to read products...
    router.get('/products/' , getAll);
    router.get('/products/:_id' , getById);
    router.get('/products/name/:product_name' , getByName);
    router.get('/products/pages/:_page' , getProductPerPage);
    router.get('/products/categories/:category/:_page' , getProductCategoryPerPage);
    router.get('/products/categories/:category' , getProductInCategory);
    // Post method to create new product...
    router.post('/products/add' , newProduct);
    // Put method to update product...
    router.put('/products/update/:_id' , updateProduct);
    // Delete method to delete product...
    router.delete('/products/delete/:_id' , deleteProduct);
};

