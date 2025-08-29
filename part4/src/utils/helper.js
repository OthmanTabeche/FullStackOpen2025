const Blog = require('../models/blog')

const initialBlogs = [
    {
        title: "Aprendiendo JavaScript",
        author: "Juan Pérez",
        url: "https://mi-blog.com/aprendiendo-javascript",
        likes: 15
    },
    {
        title: "Node.js para principiantes",
        author: "María López",
        url: "https://mi-blog.com/nodejs-principiantes",
        likes: 25
    }
];

const blogsInDB = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}

module.exports = {
    initialBlogs,
    blogsInDB
}