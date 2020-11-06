---
title: "Mocking Events with React Testing Library"
date: "2019-10-26"
author: Chase Hardin
cover: https://cdn.pixabay.com/photo/2017/07/28/23/18/coming-soon-2550190_1280.jpg
categories: ['JavaScript']
published: false
---

I came across an interesting test requirement this past week while migrating from Mocha to Jest. The component under test had an <i>onClick</i> handler that was calling `e.stopPropagation`.