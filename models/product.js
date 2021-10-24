const mongoose = require("mongoose");

const DB_COLLECTION_NAME = "Product";

//Schemas
const ProductSchema = require("../schemas/product");

//Model
const Product = mongoose.model(DB_COLLECTION_NAME, ProductSchema);

module.exports = Product;
