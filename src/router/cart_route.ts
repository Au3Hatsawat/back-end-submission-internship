import express from 'express';
import { addProductsToCart, deleteCart, getAll, newCart } from '../controllers/cart_controllers';

export default (router: express.Router) => {
   /**
* @swagger
* /carts:
*   get:
*     summary: Retrieve a list of carts
*     tags: [Carts]
*     responses:
*       200:
*         description: A list of carts
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*                 properties:
*                   _id:
*                      type: ObjectId
*                      example: 6793a31f9cf1913a6f4bb228
*                   total_price:
*                     type: number
*                     example: 400
*                   products:
*                     type: array
*                     items:
*                      type: object
*                      properties:
*                          product_Id: 
*                              type: ObjectId
*                              example: 6791f9deef767dc9dd1a4344
*                          amount: 
*                              type: number
*                              example: 4
*                          _id:
*                              type: ObjectId
*                              example: 6793a31f9cf1913a6f4bb22a
*                   
*                  
*/
   router.get('/carts/', getAll);
   /**
   * @swagger
   * /carts/new:
   *   post:
   *     summary: Create a new cart
   *     tags: [Carts]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               products:
   *                 type: array
   *                 items:
   *                   type: object
   *                   properties:
   *                     product_Id:
   *                       type: string
   *                       example: "6791fa6eef767dc9dd1a4351"
   *                     amount:
   *                       type: number
   *                       example: 4
   *     responses:
   *       200:
   *         description: Cart successfully created
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 _id:
   *                   type: string
   *                   example: "6793a31f9cf1913a6f4bb228"
   *                 total_price:
   *                   type: number
   *                   example: 400
   *                 products:
   *                   type: array
   *                   items:
   *                     type: object
   *                     properties:
   *                       product_Id:
   *                         type: string
   *                         example: "6791fa6eef767dc9dd1a4351"
   *                       amount:
   *                         type: number
   *                         example: 4
   *                       _id:
   *                         type: string
   *                         example: "6793a31f9cf1913a6f4bb22a"
   */
   router.post('/carts/new', newCart);
   /**
 * @swagger
 * /carts/delete/{id}:
 *   delete:
 *     summary: Delete a cart by ID
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: cart_id
 *         schema:
 *           type: ObjectId
 *         required: true
 *         description: The ID of the cart to delete
 *     responses:
 *       200:
 *         description: Cart successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                      type: ObjectId
 *                      example: 6793a31f9cf1913a6f4bb228
 *                   total_price:
 *                     type: number
 *                     example: 400
 *                   products:
 *                     type: array
 *                     items:
 *                      type: object
 *                      properties:
 *                          product_Id: 
 *                              type: ObjectId
 *                              example: 6791f9deef767dc9dd1a4344
 *                          amount: 
 *                              type: number
 *                              example: 4
 *                          _id:
 *                              type: ObjectId
 *                              example: 6793a31f9cf1913a6f4bb22a
 *                   
 *                  
 */
   router.delete('/carts/delete/:_id', deleteCart);
   /**
 * @swagger
 * /carts/add/{id}:
 *   put:
 *     summary: Add a product to cart by product_Id
 *     tags: [Carts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     product_Id:
 *                       type: string
 *                       example: "6791f9deef767dc9dd1a4344"
 *                     amount:
 *                       type: number
 *                       example: 4
 *     parameters:
 *       - in: path
 *         name: product_Id
 *         schema:
 *           type: ObjectId
 *         required: true
 *         description: The ID of the product that you will add to cart
 *     responses:
 *       200:
 *         description: Product successfully added
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                      type: ObjectId
 *                      example: 6793a31f9cf1913a6f4bb228
 *                   total_price:
 *                     type: number
 *                     example: 400
 *                   products:
 *                     type: array
 *                     items:
 *                      type: object
 *                      properties:
 *                          product_Id: 
 *                              type: ObjectId
 *                              example: 6791f9deef767dc9dd1a4344
 *                          amount: 
 *                              type: number
 *                              example: 4
 *                          _id:
 *                              type: ObjectId
 *                              example: 6793a31f9cf1913a6f4bb22a
 *                   
 *                  
 */
   router.put('/carts/add/:_id', addProductsToCart);
};