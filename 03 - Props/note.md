# Date: 8 / 9 / 2021

# Day: 2

# Props

Props stand for **properties**

## Properties aka. Props

A useful component is a reusable one. we can make reusable components using props. we use props all the time.

### Props Syntax

Props is like a html attribute we pass data in a attribute using props

```js
// app.js

<Props title="Hello world" />
```

```js
// components/props.jsx
<h1>hey there {this.props.title}</h1>

//another method
const props = this.props
<h1> hey {props.title} </h1>
```

### Props Requirements

- Properties are configuring in your component as attribute
- Props are immutable

### Other type of Props

we can pass different type of props

- Props can be string
- Props can be number
- For other type, embed js expression using the curly braces

```js
<User name="jane" salary={100000}
hobbies={["reading", "coding", "playing", "singing"]}
>
```

## Looping in JSX

how to loops to take a array and split out a bunch of child.
**so most common way of doing this to use map**
_is's common to use **array.map(fn)** to output loops in JSX_

```js
const msgs = [
  {
    text: "Just watching Netflix",
  },
  {
    text: "goodby",
  },
];
return (
  <div>
    <h1>Looping</h1>
    <ul>
      {msgs.map((m) => (
        <li>{m.text}</li>
      ))}
    </ul>
  </div>
);
```

## Default Props

some prop that wasn't passed in and we want to have a default value for any missing props.
there is a pretty easy solution just define an object
**All we do is define an object called default Props aka _defaultProps_ done!**

```js
export default class Hello extends Component {
  static defaultProps = {
    title: "default",
  };
  render() {
    return (
      <div>
        <h1>hello</h1>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}
```

## Style React component

we can style react component using many method

### method 1 - css file import

we can import css file and use in out component

```js
import "./style.css";
```

### method 2 - define inline css

we can also use inline css in our component's tag

```js
<p style={{backgroundColor: black}}>
```

- we use 2 curly braces
- 1st curly braces for jsx, because we define JavaScript.
- second for Object, all the style we use in a object

- also we use DOM css element like : camelCase style
