import mongoose, { ObjectId, Schema } from "mongoose";

const CartSchema = new mongoose.Schema({
    total_price : {type: Number, require: true},
    products : [
        {
            product_Id : {type: mongoose.Schema.ObjectId , require: true , ref: 'products'},
            amount : {type: Number , require: true},
        }
    ]
});

export const CartModel = mongoose.model('carts' , CartSchema);


//Get carts...
export const getCart = () => CartModel.find();
export const getCartById = (_id: string) => CartModel.findById(_id);

//Create cart...
export const createCart = (values: Record<any , any>) => new CartModel(values).save().then((cart) => cart.toObject());

//Update cart...
export const updateCartById = (_id: string , values: Record<any , any>) => CartModel.findByIdAndUpdate(_id , values);

export const updateProductInCart = (_id: string , product_Id: string , amount: number) => CartModel.updateOne({
    "_id" : _id 
},{
    $set : {
        "products.$[x].amount" : amount
    }
},{
    arrayFilters : [
        {"x.product_Id" : product_Id}
    ]
});

//Delete cart...
export const deleteCartById = (id: string) => CartModel.findOneAndDelete({_id : id});

//Find products in cart...
export const findProductById = (cart_id: string , find_product_id: string) => CartModel.find({
    _id : cart_id , "products.product_Id" : find_product_id
},{
    _id : 0,
    "products.$" : 1
});
