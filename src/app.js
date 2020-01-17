const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

function handleFormSubmission(e) {
    e.preventDefault()
    const form = e.target
    const option = form.elements.option.value

    if (!option) return

    app.options.push(option)
    form.elements.option.value = ''
    render()
}

function handleResetOptions() {
    app.options = []
    render()
}

function handleDecisionMade() {
    const index = Math.floor(Math.random() * app.options.length)
    const option = app.options[index]
}

let showSmallInfo = true

function handleShowDetailsBtn() {
    showSmallInfo = !showSmallInfo
    render()
}

const render = () => {
    const template = (
        <div>
            <button onClick={handleShowDetailsBtn}>Toggle details</button>
            {showSmallInfo && <p>Details Lorem Ipsum</p>}

            <hr/>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <button disabled={app.options.length === 0} onClick={handleDecisionMade}>What should I do?</button>
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <ol>
                {app.options.map((option) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={handleFormSubmission}>
                <input type="text" name="option"/>
                <button> Add button</button>
                <button onClick={handleResetOptions}>Reset</button>
            </form>
        </div>
    )

    ReactDOM.render(template, document.getElementById('root'))
}

render()
