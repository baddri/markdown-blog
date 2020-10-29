---
path: "/first-post"
date: "2020-10-27"
title: "First Post ever"
tags: ["this", "that"]
exerpt: "A preview of my second post"
---

laborum veniam cillum voluptate mollit irure fugiat dolore consectetur est adipisicing quis ullamco sint cillum eu laborum non elit sint qui est in qui irure non in cupidatat consequat sunt reprehenderit mollit laboris irure ea cupidatat veniam ipsum nostrud ea qui voluptate voluptate id irure Lorem esse deserunt fugiat laborum Lorem enim et adipisicing elit id sit sunt tempor do laborum aliqua fugiat dolor nulla aute deserunt aliqua adipisicing deserunt tempor

## System Requirements

* [git][git] v2.14.1 or greater
* [NodeJS][node] v8.9.4 or greater
* [npm][npm] v5.6.0 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Setup

You may be able to work through the entire workshop in the browser. Go to
[this codesandbox](https://codesandbox.io/s/github/kentcdodds/advanced-react-patterns-v2)
and you should be good to go.

If you'd rather be able to work through the workshop on your own computer, then
follow the following instructions.

After you've made sure to have the correct things (and versions) installed, you
should be able to just run a few commands to get set up:

```shell
git clone https://github.com/kentcdodds/advanced-react-patterns-v2.git
cd advanced-react-patterns-v2
npm run setup --silent
```

This may take a few minutes. **It will ask you for your email.** This is
optional and just automatically adds your email to the links in the project to
make filling out some forms easier If you get any errors, please read through
them and see if you can find out what the problem is. You may also want to look
at [Troubleshooting](#troubleshooting). If you can't work it out on your own
then please [file an issue][issue] and provide _all_ the output from the
commands you ran (even if it's a lot).

## Running the app

To get the app up and running (and really see if it worked), run:

```shell
npm start
```

```javascript
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve(`src/container/BlogPost/index.js`)
  const result = await graphql(
    `
      query {
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
          edges {
            node {
              frontmatter {
                path
                tags
              }
            }
          }
        }
      }
    `
  )
```
