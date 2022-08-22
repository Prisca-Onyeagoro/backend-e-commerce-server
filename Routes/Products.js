import express from 'express';
import {
  getProducts,
  createProducts,
  getSingleProducts,
  UpdateProducts,
  deleteProducts,
} from '../Controllers/ProductController.js';
const router = express.Router();

router.route('/product').get(getProducts);
router.route('/product/:id').get(getSingleProducts);
router.route('/admin/product/:id').put(UpdateProducts).delete(deleteProducts);
router.route('/admin/product/create').post(createProducts);
// router.route('/admin/product/:id').delete(deleteProducts);

export default router;
