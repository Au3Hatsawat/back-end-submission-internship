import mongoose, { ObjectId, Schema } from "mongoose";

const CartSchema = new mongoose.Schema({
    products : [
        {
            product_Id : {type: Schema.Types.ObjectId, require: true, ref: 'products'},
            amount : {type: Number, require: true}
        }
    ],
    total_price : {type: Number, require: true}
});

export const CartModel = mongoose.model('carts' , CartSchema);

//Get carts...
export const getCart = () => CartModel.find();
export const getCartById = (_id: string) => CartModel.findById(_id);

//Create cart...
export const createCart = (values: Record<any , any>) => new CartModel(values).save().then((cart) => cart.toObject());

//Update cart...
export const updateCartById = (_id: string , values: Record<any , any>) => CartModel.findByIdAndUpdate(_id , values);

//Delete cart...
export const deleteCartById = (id: string) => CartModel.findOneAndDelete({_id : id});

