// const h1 = document.createElement("h1");
// h1.textContent = "Hello world";
// h1.className = "header";
// console.log(h1);
// <h1 class="header">Hello world</h1>

// const element = <h1 className="header">This is JSX</h1>;
// console.log(element);
/* React created a JS object:
{
    type: "h1",
    key: null, 
    ref: null, 
    props: {
        className: "header", 
        children: "This is JSX"
    }, 
    _owner: null, 
    _store: {}
}
*/

// JSX

// ReactDOM.render(
//     <h1 className="header">This is JSX</h1>, 
//     document.getElementById("root")
// ) 

// You can only render one parent element -- ex. wrap in a div
// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// );

// console.log(page);

// ReactDOM.render(
//     page,
//     document.getElementById("root")
// );

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const navbar = (
    <nav>
        <h1>Saber Merch</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);

ReactDOM.render(
    navbar,
    document.getElementById("root")
);