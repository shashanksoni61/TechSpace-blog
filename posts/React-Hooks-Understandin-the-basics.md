---
title: 'React Hooks - Understanding the basics'
date: 'September 4, 2021'
excerpt: 'For modern React Development Hooks are very important,here we are going to take a look at it'
cover_image: '/images/posts/img3.jpg'
category: 'React'
author: 'Shashank Soni'
author_image: '/images/users/shashank.jpg'
---

Hooks are basically functions that let us include react state and lifecycle features without using Classes, and organise the logic inside a component into reusable, isolated units.

## Motivation for using Hooks:

1. Easier to read and test
2. Less code
3. Performance boost for functional component

## 1st Hook - useState hook

Let’s see how to use this hook:

```js
const [count, setCount] = useState(10);
```

Here useState declares a state variable which is named count (name can be anything), useState accepts none or one argument which is the initial state value

useState returns an array which includes the current state and a function that updates it. In the above syntax setCount is the function returned that allows us to update the value of the state count. Example: setCount(20), value of count is updated from 10 to 20.
