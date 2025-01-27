## Installation & Run

```bash
git clone https://github.com/Au3Hatsawat/back-end-submission-internship.git
cd back-end-submission-internship
npm install
npm start
```

## Api Documentation

```
http://<host>:<port>/api-docs/
```

## Structure

```bash
├── src
   ├── index.ts
   ├── controllers         
   │   ├── cart_controllers.ts   
   │   └── product_controller.ts  
   │   
   ├── models
   │   ├── product.ts   
   │   └── cart.ts     // Models for our application
   ├── router   
   │   ├── product_route.ts
   │   ├── index.ts    
   │   └── cart_route.ts
   ├── helpers    
   │   └── pagination.ts
   ├── configs    
       └── config.ts
```

# Todo

- [x] CRUD for products & carts model
- [x] Pagination for products
- [X] Add products to cart
- [X] Calculate total price with promotion sale
- [x] Swagger api documentation
- [ ] Unit test
