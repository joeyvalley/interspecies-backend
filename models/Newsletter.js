import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
  position: Number,
  title: String,
  subtitle: String,
  content: [String],
});

const NewsletterSchema = new mongoose.Schema({
  month: String,
  year: Number,
  articles: [ArticleSchema],
});

export default mongoose.model('Newsletter', NewsletterSchema);