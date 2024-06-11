import { Schema, model, models } from 'mongoose';

const blogSchema = new Schema({
    title: String,
    slug: String,
    published: Boolean,
    author: String,
    content: String,
    tags: [String],
    createdAt: Date,
    updatedAt: Date,
    comments: [{
        user: String,
        content: String,
        votes: Number
    }]
});

const Blog = models.Blog || model('Blog', blogSchema);
export default Blog;