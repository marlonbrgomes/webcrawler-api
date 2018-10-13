import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: String,
  url: String,
  image: String,
  price: String,
  siteId: String,
  siteName: String,
  siteUrl: String
})

export default mongoose.model('Products', ProductSchema);