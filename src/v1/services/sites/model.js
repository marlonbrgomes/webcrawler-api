import mongoose from 'mongoose';

const SiteSchema = new mongoose.Schema({
  name: String,
  url: String,
  image: String,
  categories: [String]
})

export default mongoose.model('Sites', SiteSchema);