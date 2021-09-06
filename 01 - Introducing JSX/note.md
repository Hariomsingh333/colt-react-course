# Date: 6 / 9 / 2021

# Day: 1

# Introducing JSX

## Basic Rules of JSX

### What is JSX

JSX Stand for JavaScript XML, JavaScript extension. it's super useful, JSX Tool that allows us to write HTML directly in JavaScript.JSX used in React to easily write HTML and JavScript together.

## JSX Rule

- Cover Everything in a root

1. in JSX Everything you write it will be cover in a div or a section or a nav or any thing, but it will be cover a parent tag, long story short, in your components you have one root and the other code will be child of the root

```jsx
<div>
  <h1>hello world</h1>
  <p>i am a p tag</p>
</div>
```

- All tag are closed

2. make sure you all html code has been a closed tag, it will be double closing tag or self closing tag, but must be close.

```jsx
<input type="text" />
```

- Write JavaScript is HTML

3. we can write JavaScript in HTML using curly braces in JSX. We use this { } all the time.

```jsx
<div>
  <h1> here your number {2 + 2} </h1>
</div>
```
