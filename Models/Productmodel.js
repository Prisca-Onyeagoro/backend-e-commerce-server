import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please input a product name'],
    trim: true,
    maxLength: [100, 'Product name cannot be more than 100'],
  },
  price: {
    type: Number,
    required: [true, 'Please input a product price'],
    default: 0.0,

    maxLength: [5, 'Product name cannot be more than 100'],
  },
  description: {
    type: String,
    required: [true, 'Please input a product description'],
    trim: true,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      type: String,
      required: [true, 'please enter upload a file'],
    },
  ],
  category: {
    type: String,
    required: [true, 'please select a product'],
    enum: {
      values: [
        'Electronics',
        'furnitures',
        'Laptop',
        'Acceleration',
        'food',
        'Sports',
        'Academic',
      ],
      message: 'Please Select A  Correct category',
    },
  },
  seller: {
    type: String,
    required: [true, 'Please input your whatsapp contact link'],
  },
  stock: {
    type: Number,
    required: [true, 'please enter product stock: for example 1, 2, 3 or 4'],
    default: 0,
  },
  numofReviews: {
    type: Number,
    default: 0,
  },
  Reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      Comment: {
        type: String,
        required: true,
      },
    },
  ],
});
const Product = mongoose.model('Product', ProductSchema);

export default Product;
