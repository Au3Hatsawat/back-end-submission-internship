import express from 'express';
import { newProduct, getAll, updateProduct, deleteProduct, getById, getByName, getProductPerPage, getProductCategoryPerPage, getProductInCategory } from '../controllers/product_controllers';

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
    *                     type: string
    *                     example: "6794a8a6e3331cc566d8c0ab"
    *                   product_name:
    *                     type: string
    *                     example: "แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์ เล่ม 1"
    *                   product_price:
    *                     type: number
    *                     example: 100
    *                   category:
    *                     type: string
    *                     example: "Science Fiction & Fantasy"
    *               example:
    *                 - _id: "6794a8a6e3331cc566d8c0ab"
    *                   product_name: "แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์ เล่ม 1"
    *                   product_price: 100
    *                   category: "Science Fiction & Fantasy"
    *                 - _id: "6794b2d1f9cf1913a6f4bb229"
    *                   product_name: "The Hobbit"
    *                   product_price: 200
    *                   category: "Fantasy"
    *                 - _id: "6794c7d8f2ab1913a6f4bb22c"
    *                   product_name: "The Catcher in the Rye"
    *                   product_price: 150
    *                   category: "Classic Literature"
    */
    router.get('/products/', getAll);
    /**
     * @swagger
     * /products/{id}:
     *   get:
     *     summary: Retrieve a product by id
     *     tags: [Products]
     *     parameters:
     *       - in: path
     *         name: product_Id
     *         schema:
     *           type: ObjectId
     *         required: true
     *         description: The ID of the product that you will get
     *     responses:
     *       200:
     *         description: A product by id
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
    router.get('/products/:_id', getById);
    /**
     * @swagger
     * /products/name/{name}:
     *   get:
     *     summary: Retrieve a product by name
     *     tags: [Products]
     *     parameters:
     *       - in: path
     *         name: product_Name
     *         schema:
     *           type: string
     *         required: true
     *         description: The name of the product that you will get
     *     responses:
     *       200:
     *         description: A product by name
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
    router.get('/products/name/:product_name', getByName);
    /**
     * @swagger
     * /products/page/{page}:
     *   get:
     *     summary: Retrieve a list of products by page
     *     tags: [Products]
     *     parameters:
     *       - in: path
     *         name: page
     *         schema:
     *           type: number
     *         required: true
     *         description: The page number of the products to retrieve
     *         example: 1
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
     *                     type: string
     *                     example: "6794a8a6e3331cc566d8c0ab"
     *                   product_name:
     *                     type: string
     *                     example: "แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์ เล่ม 1"
     *                   product_price:
     *                     type: number
     *                     example: 100
     *                   category:
     *                     type: string
     *                     example: "Science Fiction & Fantasy"
     *               example:
     *                 - _id: "6794a8a6e3331cc566d8c0ab"
     *                   product_name: "แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์ เล่ม 1"
     *                   product_price: 100
     *                   category: "Science Fiction & Fantasy"
     *                 - _id: "6794b2d1f9cf1913a6f4bb229"
     *                   product_name: "The Hobbit"
     *                   product_price: 200
     *                   category: "Fantasy"
     *                 - _id: "6794c7d8f2ab1913a6f4bb22c"
     *                   product_name: "The Catcher in the Rye"
     *                   product_price: 150
     *                   category: "Classic Literature"
     */
    router.get('/products/pages/:_page', getProductPerPage);
    /**
     * @swagger
     * /products/categories/{category}/{page}:
     *   get:
     *     summary: Retrieve a list of products by page
     *     tags: [Products]
     *     parameters:
     *       - in: path
     *         name: category
     *         schema:
     *           type: string
     *         required: true
     *         description: The category of product that you will get
     *         example: Science Fiction & Fantasy
     *       - in: path
     *         name: page
     *         schema:
     *         type: number
     *         required: true
     *         description: The page number of the products to retrieve
     *         example: 1 
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
     *                     type: string
     *                     example: "6794a8a6e3331cc566d8c0ab"
     *                   product_name:
     *                     type: string
     *                     example: "แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์ เล่ม 1"
     *                   product_price:
     *                     type: number
     *                     example: 100
     *                   category:
     *                     type: string
     *                     example: "Science Fiction & Fantasy"
     *               example:
     *                 - _id: "6794a8a6e3331cc566d8c0ab"
     *                   product_name: "แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์ เล่ม 1"
     *                   product_price: 100
     *                   category: "Science Fiction & Fantasy"
     *                 - _id: "6794a8c5e3331cc566d8c0ad"
     *                   product_name: "แฮร์รี่ พอตเตอร์ กับห้องแห่งความลับ เล่ม 2"
     *                   product_price: 100
     *                   category: "Science Fiction & Fantasy"
     *                 - _id: "6794a8e1e3331cc566d8c0af"
     *                   product_name: "แฮร์รี่ พอตเตอร์ กับนักโทษแห่งอัซคาบัน เล่ม 3"
     *                   product_price: 100
     *                   category: "Science Fiction & Fantasy"
     */
    router.get('/products/categories/:category/:_page', getProductCategoryPerPage);
    /**
     * @swagger
     * /products/categories/{category}:
     *   get:
     *     summary: Retrieve a list of products by page
     *     tags: [Products]
     *     parameters:
     *       - in: path
     *         name: category
     *         schema:
     *           type: string
     *         required: true
     *         description: The category of product that you will get
     *         example: Science Fiction & Fantasy
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
     *                     type: string
     *                     example: "6794a8a6e3331cc566d8c0ab"
     *                   product_name:
     *                     type: string
     *                     example: "แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์ เล่ม 1"
     *                   product_price:
     *                     type: number
     *                     example: 100
     *                   category:
     *                     type: string
     *                     example: "Science Fiction & Fantasy"
     *               example:
     *                 - _id: "6794a8a6e3331cc566d8c0ab"
     *                   product_name: "แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์ เล่ม 1"
     *                   product_price: 100
     *                   category: "Science Fiction & Fantasy"
     *                 - _id: "6794a8c5e3331cc566d8c0ad"
     *                   product_name: "แฮร์รี่ พอตเตอร์ กับห้องแห่งความลับ เล่ม 2"
     *                   product_price: 100
     *                   category: "Science Fiction & Fantasy"
     *                 - _id: "6794a8e1e3331cc566d8c0af"
     *                   product_name: "แฮร์รี่ พอตเตอร์ กับนักโทษแห่งอัซคาบัน เล่ม 3"
     *                   product_price: 100
     *                   category: "Science Fiction & Fantasy"
     */
    router.get('/products/categories/:category', getProductInCategory);
    /**
     * @swagger
     * /products/add:
     *   post:
     *     summary: Add a new product
     *     tags: [Products]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               product_name:
     *                 type: string
     *                 example: "แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์ เล่ม 1"
     *               product_price:
     *                 type: number
     *                 example: 100
     *               category:
     *                 type: string
     *                 example: "Science Fiction & Fantasy"
     *     responses:
     *       200:
     *         description: product that you added
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
    router.post('/products/add', newProduct);
    /**
     * @swagger
     * /products/update/{id}:
     *   put:
     *     summary: Update a product
     *     tags: [Products]
     *     parameters:
     *       - in: path
     *         name: product_Id
     *         schema:
     *           type: ObjectId
     *         required: true
     *         description: The ID of the product that you will update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               product_name:
     *                 type: string
     *                 example: "แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์ เล่ม 1"
     *               product_price:
     *                 type: number
     *                 example: 100
     *               category:
     *                 type: string
     *                 example: "Science Fiction & Fantasy"
     *     responses:
     *       200:
     *         description: Update your product
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
    router.put('/products/update/:_id', updateProduct);
    /**
    * @swagger
    * /products/delete/{id}:
    *   delete:
    *     summary: Delete your product
    *     tags: [Products]
    *     parameters:
    *       - in: path
    *         name: product_Id
    *         schema:
    *           type: ObjectId
    *         required: true
    *         description: The ID of the product that you will delete
    *     responses:
    *       200:
    *         description: Delete your product that you added
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
    router.delete('/products/delete/:_id', deleteProduct);
};

