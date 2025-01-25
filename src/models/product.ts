import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    product_name : {type: String , require: true},
    product_price : {type: Number , require: true},
    category : {type: String , require: true}
});

export const ProductModel = mongoose.model('products' , ProductSchema);

// get Product
export const getProduct = () => ProductModel.find();
export const getProductByName = (product_name: String) => ProductModel.findOne({ product_name });
export const getProductById = (id: String) => ProductModel.findById( id );
export const getProductByCategory = (category: String) => ProductModel.find({category});

// create Product
export const createProduct = (values: Record<string , any>) =>  new ProductModel(values).save().then((product) => product.toObject());

// delete Product
export const deleteProductById = (id: String) => ProductModel.findOneAndDelete({_id : id});

// update Product
export const updateProductById = (id: String , values: Record<string , any>) => ProductModel.findByIdAndUpdate(id, values);