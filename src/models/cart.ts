import mongoose, { ObjectId } from "mongoose";

const CartSchema = new mongoose.Schema({
    product_Id : {type: Array<ObjectId>}
});

