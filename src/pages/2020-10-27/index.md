---
path: "/first-post"
date: "2020-10-27"
title: "First Post ever"
tags: ["this", "that"]
exerpt: "A preview of my First post"
---

karena blog ini bari dibuat, untuk mengisi kekosongan saya akan mencoba mengisi post pertama menggunakan markdown. beberapa hal yang akan sata coba dibawah adalah beberapa contoh markup untuk file markdown

## Unordered List

* pilihan pertama
* pilihan kedua
* pilihan ketiga

berikut adalah contoh `inline code`

## contoh markup untuk kode dibawah
menggunakan bahasa shell

```shell
git --version
node --version
npm --version
```

berikut adalah contoh untuk javascript

```javascript
function createTagPages(createPage, posts) {
  const AllTagsTemplate = path.resolve("src/container/AllTags/index.js")
  const SingleTagTemplate = path.resolve("src/container/SingleTag/index.js")

  const postByTags = {}

  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postByTags[tag]) {
          postByTags[tag] = []
        }
        postByTags[tag].push(node)
      })
    }
  })

  const tags = Object.keys(postByTags)

  createPage({
    path: "/tags",
    component: AllTagsTemplate,
    context: {
      tags: tags.sort(),
    },
  })

  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag}`,
      component: SingleTagTemplate,
      context: {
        posts,
        tag,
      },
    })
  })
}
```

oke boi sepertinya berjalan dengan baik
contoh selanjutnya

## Blockquotes

>I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.

## Checkmark

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

## penutup

semoga saya bisa nyaman menulis di blog ini dan bisa mengshare ilmu yang saya miliki.
