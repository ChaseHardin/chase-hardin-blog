---
title: "A Functional Approach to The Builder Pattern"
date: "2020-07-13"
author: Chase Hardin
cover: https://www.incimages.com/uploaded_files/image/1940x900/getty_639742462_355285.jpg
---

The builder pattern is one of my go to’s when programming. It makes data setup extremely easy - instantiate a class, chain some methods together, and finish by executing a build or execute method. However, every time I write a builder class, I can’t help but wonder if there’s a more functional approach that completely removes state. This of course is on the forefront of my mind since my contract relates to writing React and utilizing pure components.

## What are we building? 🛠 
Imagine you’re a woodworker and build tables as a side business. When a client enquires about a dining room table, we need to collect their information, keep track of the table dimensions, and calculate how much we’d charge to build the table. This can be a time consuming process without software. To quickly generate an estimate, let’s create a simple builder that’ll handle most of the work for us. 

<i>This example will be fairly trivial, but the concepts are still applicable on larger scaled apps.</i>

## Ready to see some code? 🤓 

Before we deep dive into the details, let’s look at how we’d utilize the functions to build up our state object. First, we need to create functions that handle adding a client, dimensions, and expenses. For the sake of simplicity, I’ve created an `addExpense` function that handles how expenses are generated that way we focus more on concepts vs implementation details.

```javascript
import {
    setupData,
    addClient,
    addDimensions,
    addExpenses,
    calculatePrice
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

These functions take an object parameter and set the details. We can then use these functions together by chaining them with the `setupData` helper. The important thing to note from this snippet is that our `setupData` function will pass the returned result from one function to the next. 

```javascript
const {state} = setupData([
    client,
    dimensions,
    expenses,
    calculatePrice()
]);
```

## Let’s take a closer look 🔎 
In a typical class builder scenario, we'd build up our state by calling multiple methods on our instantiated class. To achieve this functionally, we want to build up our data object, but also want to avoid creating classes. An easy way to go about this is to utilize the `flow` function from `lodash`. While we could go to the trouble of writing our own, I like the idea of using open source frameworks. With that in mind, the `flow` function takes an array of functions and allows us to specify the initial state. Flow will take the returned value from each function and pass it along to the next function in the chain. More details can be found [here](https://lodash.com/docs/4.17.15#flow).

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

Now that we have the `setupData` function completed, we are ready to start adding the data builder functions. They're all fairly similar so let's start by focusing on the `addClient` function. Take a minute to review what this snippet is doing.

```javascript
export const addClient = client => state => ({...state, client});
```

While this function is only one line of code, there's a lot going on. This function is leveraging a functional programing concept known as currying. It allows us to return a new function for each argument in the line while also using closure to keep the arguments alive. To provide a more concrete example, let's talk through the `addClient` function. This function passes the `client` argument and returns a new function. The second argument in the line is `state`. We have access to this because when used in conjunction with `flow`, it passes the returned value from the function previously executed. In our case, the state from the previous function or initial state if used first. Here are a few more examples of the data helpers.

```javascript
export const addDimensions = dimensions => state => ({...state, dimensions});
export const addExpenses = expenses => state => ({...state, expenses});

export const calculatePrice = () => state => {
    const hourlyRate = 30;
    const {estimatedHours, materialCosts} = state.expenses;

    state.calculatedPrice = estimatedHours * hourlyRate + materialCosts;

    return state;
};
```
If this topic is still a bit fuzzy, don't worry. Check out [this](https://mostly-adequate.gitbooks.io/mostly-adequate-guide/ch04.html) is a great resource.

## Conclusion 
The builder pattern is extremely helpful. If you're comfortable with the class style builder and like that pattern best, great! However, if you're running into issues with side effects, mutation, or class level state, I hope you'll give the functional builders a try. 

Feel free to comment or send me a message if you have any questions/feedback!