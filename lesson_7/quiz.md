Custom Components
Quiz!

1. What is a React component?
A component is a reusable piece of code

Answer: A function that returns React elements

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
This function name should use PascalCase

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```

The render method should use <Header />