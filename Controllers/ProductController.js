import Product from '../Models/Productmodel.js';
import ErrorHandler from '../utils/ErrorHandlers.js';
import CatchAsyncErrors from '../middlewares/CatchAsyncErrors.js';
import Apifeatures from '../utils/Apifeatures.js';

// create new product localhost:3000/api/v1/admin/products/create
export const createProducts = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};
// get all the products
export const getProducts = CatchAsyncErrors(async (req, res, next) => {
  const apifeatures = new Apifeatures(Product.find(), req.query)
    .search()
    .filter();
  const products = await apifeatures.query;
  res.status(201).json({
    success: true,
    count: products.length,
    products,
  });
});

// get single product deatails => /api/v1/product:id
export const getSingleProducts = CatchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler('product not found', 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
});
// update Product details => /api/v1/admin/products/:findById
export const UpdateProducts = CatchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler('product not found', 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
});

// delete Product details => /api/v1/admin/products/:findById
export const deleteProducts = CatchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler('product not found', 404));
  }
  // product = await Product.findByIdAndDelete(req.params.id)
  await Product.remove();
  res.status(200).json({
    success: true,
    message: 'product is deleted',
  });
});
