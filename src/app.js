class App extends React.Component {
    constructor() {
        super();
        this.handleOptionsRemoval = this.handleOptionsRemoval.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleWhatTodoSuggestion = this.handleWhatTodoSuggestion.bind(this)
        this.state = {
            title: 'Indecision App',
            subtitle: 'Put your life in the hands of a computer',
            options: ['Read', 'Train', 'Study', 'See a movie'],
            suggestedToDo: null
        }
    }

    handleWhatTodoSuggestion() {
        const index = Math.floor(Math.random() * this.state.options.length)

        this.setState((prevState) => {
            return {suggestedToDo: prevState.options[index]}
        })
    }

    handleAddOption(option) {
        if (!option) {
            throw 'The option cannot be empty.'
        } else if (this.state.options.indexOf(option) !== -1) {
            throw 'The selected option already exists.'
        }
        this.setState((previousState) => {
            return {options: previousState.options.concat(option)}
        })
    }

    handleOptionsRemoval() {
        this.setState(() => {
            return {options: []}
        })
    }

    render() {

        return (
            <div>
                <Header title={this.state.title} subtitle={this.subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    suggestedToDo={this.state.suggestedToDo}
                    handleTodoSuggestion={this.handleWhatTodoSuggestion}
                />
                <Options
                    options={this.state.options}
                    removeOptions={this.handleOptionsRemoval}
                />
                <AddOption
                    options={this.state.options}
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {

    render() {
        return (
            <div>
                <button
                    disabled={!this.props.hasOptions}
                    onClick={this.props.handleTodoSuggestion}
                >
                    What should I do?
                </button>

                {this.props.suggestedToDo && <p>{this.props.suggestedToDo}</p>}
            </div>
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);

        this.state = {error: undefined}
    }

    addOption(e) {
        e.preventDefault()
        const form = e.target
        let option = form.elements.option.value.trim()

        try {
            this.props.handleAddOption(option)
        } catch (error) {
            return this.setState(() => {
                return {error}
            })
        }

        form.elements.option.value = ''
        this.setState(() => {
            return {error: undefined}
        })
    }

    render() {
        return (
            <div>
                <h3>Add option</h3>
                <form onSubmit={this.addOption.bind(this)}>
                    <input type="text" name="option"/>
                    <button> Add</button>
                    {this.state.error && <p>{this.state.error}</p>}
                </form>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return <li>{this.props.value}</li>
    }
}

class Options extends React.Component {

    render() {
        const options = this.props.options.map((option) => {
            return <Option key={option} value={option}/>
        })

        const optionsHeader = options.length > 0 || 'No options'

        return (
            <div>
                <h2>Options</h2>
                <p>{optionsHeader}</p>
                <ol>{options}</ol>
                <button onClick={this.props.removeOptions}>Remove all</button>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
