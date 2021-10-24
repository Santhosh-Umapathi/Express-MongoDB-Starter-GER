const MongoClient = require("mongodb").MongoClient;

const url = `mmongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASSWORD}@playground-cluster.liar9.mongodb.net/starter_proj?retryWrites=true&w=majority`;

const createProduct = async (req, res, next) => {};

const getProducts = async (req, res, next) => {};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
