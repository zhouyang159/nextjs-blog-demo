import mongoose from 'mongoose';

import Blog from '@/components/Blog.tsx';


export const GET = async () => {

  // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
  const uri =
      "mongodb+srv://dkyang211202:159357@cluster0.b9k81ve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&appName=Cluster0";

  await mongoose.connect(uri);
  console.log("You successfully connected to MongoDB!");


  // Create a new blog post object
  // const article = new Blog({
  //   title: "Awesome Post 222!",
  //   slug: "awesome-post",
  //   published: true,
  //   content: "This is the best post ever 222",
  //   tags: ["featured", "announcement"],
  // });
  //
  // // Insert the article in our MongoDB database
  // await article.save();

  // console.log("Article saved successfully!");

  // Find all blog posts

  const articles = await Blog.find();
  articles.map(async (a) => {

    // const blog = await Blog.deleteMany({ title: "Awesome Post 222!" })
    console.log(a)
  })

  // Blog.deleteOne({title: "Awesome Post 222!"}, function(err) {
  //     if (err) {
  //         console.log(err);
  //     } else {
  //         console.log("Deleted successfully!");
  //     }
  // })

  let data = JSON.stringify({ msg: "Hello, Next.js!" })

  return new Response(data)
}
