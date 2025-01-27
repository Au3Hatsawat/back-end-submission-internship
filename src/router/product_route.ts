import express from 'express';
import { newProduct , getAll , updateProduct , deleteProduct, getById, getByName, getProductPerPage, getProductCategoryPerPage, getProductInCategory} from '../controllers/product_controllers';

export default (router: express.Router) => {
 /**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve a list of products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                      type: ObjectId
 *                      example: 6794a8a6e3331cc566d8c0ab
 *                   product_name:
 *                     type: string
 *                     example: แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์ เล่ม 1
 *                   product_price:
 *                     type: number
 *                     example: 100
 *                   category:
 *                      type: string
 *                      example: Science Fiction & Fantasy
 *                  
 */
    router.get('/products/' , getAll);
/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Retrieve a product by _id
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: A product by _id
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                      type: ObjectId
 *                      example: 6794a8a6e3331cc566d8c0ab
 *                   product_name:
 *                     type: string
 *                     example: แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์ เล่ม 1
 *                   product_price:
 *                     type: number
 *                     example: 100
 *                   category:
 *                      type: string
 *                      example: Science Fiction & Fantasy
 *                  
 */
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

