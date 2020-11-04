---
title: "A Functional Approach to The Builder Pattern"
date: "2020-08-10"
author: Chase Hardin
cover: https://cdn.pixabay.com/photo/2015/04/05/16/12/lego-708088_960_720.jpg
published: true,
categories: ['JavaScript']
---

As a coder, the builder pattern is my go-to. It makes data setup extremely easy - instantiate a class, chain some methods together, and finish by executing a build method. However, every time I write a builder class, I can’t help but wonder if there’s a more functional approach that completely removes state. This of course is on the forefront of my mind since my contract relates to writing React and utilizing pure components.

I don't like creating classes because of the issues that come with  side effects, mutation, and sharing state. I can’t tell you how many afternoons I've wasted debugging a section of code only to learn that the state wasn’t correct or it was getting set when I didn’t expect it to be. I’ve found that functional builders and leveraging pure functions can help reduce these headaches.

If we take a closer look at the benefts, we'll see there are some quick wins that come to mind when using functional builders.

1. Unlike traditional class builders, we are not required to create a new instance or reset the state every time we want to use the builder. I've seen test code become extremely hard to read because the <i>forEach</i> is riddled with building and resetting the state. Even worse, I've seen tests covered with reset logic that must run after each test. These are implementation details that we shouldn't have to manage. The functional builder eliminates these problems.

2. Builders encourage us to abstract away data setup and reduce code duplication. Take a minute to think about how you'd build up the test data without a builder. Over the years, I've worked with teams that will start by creating a simple function. With each new business requirement, that function is copied, renamed, and slightly modified to fit a specific scenario. Unfortunately, these functions become hard to reuse and are not easily extendible, which adds to the complexity. Builders allow us create generic/reusable functions that simplify data setup.

## What are we building? 🛠 
Imagine you’re a woodworker who builds tables as a side business. When a client inquires about a dining room table, we need to collect their information, keep track of the table dimensions, and calculate how much we’d charge to build the table. This can be a time consuming process without software. To quickly generate an estimate, let’s create a simple builder that’ll handle most of the work for us. 

<i>This example will be fairly trivial, but the concepts are still applicable on larger scaled apps.</i>

## Ready to see some code? 🤓 

Before we deep dive into the details, let’s look at how we’d utilize the functions to build up our state object. First, we need to create functions that handle adding a client, dimensions, and expenses. For the sake of simplicity, I’ve created an <i>addExpense</i> function that handles how expenses are generated that way we focus more on concepts vs implementation details.

```javascript
import {
    setupData,
    addClient,
    addDimensions,
    addExpenses,
    calculatePrice,
    act
} from './data-helpers';

const client = addClient({
    firstName: 'John',
    lastName: 'Smith',
    email: 'johnsmith@email.com',
    phone: '555-555-5555'
});

const dimensions = addDimensions({
    width: '3ft',
    length: '6ft',
    height: '30in'
});

const expenses = addExpenses({
    estimatedHours: 10,
    materialCosts: 200
});
```

These functions take an object parameter and set the details. We can then use these functions together by chaining them with the <i>setupData</i> helper. The important thing to note from this snippet is that our <i>setupData</i> function will pass the returned result from one function to the next. The <i>act</i> function is given the state and takes any number of functions that perform actions on the state object. In this scenario, we are calculating the price given the state details.

```javascript
const {state} = setupData([
    client,
    dimensions,
    expenses
]);

const results = act(state, calculatePrice());
```

## Let’s take a closer look 🔎 
In a typical class builder scenario, we'd build up our state by calling multiple methods on our instantiated class. To achieve this functionally, we want to build up our data object, but also want to avoid creating classes. An easy way to go about this is to utilize the <i>flow</i> function from <i>lodash</i>. While we could go to the trouble of writing our own, I like the idea of using open source frameworks. With that in mind, the <i>flow</i> function takes an array of functions and allows us to specify the initial state. Flow will take the returned value from each function and pass it along to the next function in the chain. More details can be found [here](https://lodash.com/docs/4.17.15#flow).

```javascript
import flow from 'lodash/flow'

export const setupData = (dataBuilders = []) => {
    const initialState = {};

    const state = flow(dataBuilders)(initialState);

    return {
        state
    }
};
```

Now that we have the <i>setupData</i> function completed, we are ready to start adding the data builder functions. They're all fairly similar so let's start by focusing on the <i>addClient</i> function. Take a minute to review what this snippet is doing.

```javascript
export const addClient = client => state => ({...state, client});
```

While this function is only one line of code, there's a lot going on. This function is leveraging a functional programing concept known as <i>currying</i>. It allows us to return a new function for each argument in the line while also using closure to keep the arguments alive. To provide a more concrete example, let's talk through the <i>addClient</i> function. This function passes the <i>client</i> argument and returns a new function. The second argument in the line is <i>state</i>. We have access to this because when used in conjunction with <i>flow</i>, it passes the returned value from the function previously executed. In our case, the state from the previous function or initial state if used first. Here are a few more examples of the data helpers. The <i>act</i> function works very similar to <i>setupData</i> and allows us to group our code by arrange, act, and assert. Definitely not required, but I like that pattern when test driving my code.

```javascript
export const addDimensions = dimensions => state => ({...state, dimensions});
export const addExpenses = expenses => state => ({...state, expenses});

export const calculatePrice = () => state => {
    const hourlyRate = 30;
    const {estimatedHours, materialCosts} = state.expenses;

    state.calculatedPrice = estimatedHours * hourlyRate + materialCosts;

    return state;
};

export const act = (state, ...builders) => flow(builders)(state);
```
If this topic is still a bit fuzzy, don't worry. Check out [this](https://mostly-adequate.gitbooks.io/mostly-adequate-guide/ch04.html) great resource.

## Conclusion 
The builder pattern is extremely helpful. If you're comfortable with the class style builder and like that pattern best, great! However, if you're running into issues with side effects, mutation, or class level state, I hope you'll give the functional builders a try. 

Feel free to comment or send me a message if you have any questions/feedback!