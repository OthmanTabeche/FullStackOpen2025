const { test } = require('node:test')
const assert = require('node:assert')
const {dummy, totalLikes} = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = dummy(blogs)
  assert.strictEqual(result, 1)
})

test('total likes', () => {
    const blogs = [
        {
            title: "React patterns",
            author: "Michael Chan",
            likes: 7
        },
        {
            title: "Go To Statement Considered Harmful",
            author: "Edsger W. Dijkstra",
            likes: 5
        }
    ]

    const result = totalLikes(blogs)
    assert.strictEqual(result, 12)
})