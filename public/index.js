// const template = <p>JSX value</p>
const template = React.createElement(
    "h1",
    {id: "someid"},
    "something new"
)

const root = document.getElementById('root')

ReactDOM.render(template, root)
