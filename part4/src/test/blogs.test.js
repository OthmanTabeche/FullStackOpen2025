const assert = require('node:assert')
const { test, beforeEach } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('../utils/helper')
const Blog = require('../models/blog')

const api = supertest(app)

//utils
const initialBlogsLength = helper.initialBlogs.length

beforeEach(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(helper.initialBlogs)
})

test('the correct amount of blog post', async () => {
    const response = await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')

    assert.strictEqual(response.body.length, initialBlogsLength)
})

test('the unique identifier property of the blog posts is named id', async () => {
    const response = await api.get('/api/blogs')
    const blogs = response.body

    blogs.forEach(blog => {
        assert.ok(blog.id)
        assert.strictEqual(blog._id, undefined)
    });
})