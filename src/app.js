class App extends React.Component {
    constructor() {
        super();
        this.handleOptionsRemoval = this.handleOptionsRemoval.bind(this)
        this.handleRemoveOption = this.handleRemoveOption.bind(this)
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

        this.setState((prevState) => ({suggestedToDo: prevState.options[index]}))
    }

    handleRemoveOption(option) {

        this.setState((prevState) => {
            let newOptions = prevState.options
            const index = prevState.options.indexOf(option)
             newOptions.splice(index, 1)

            return {options: newOptions}
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
        this.setState(() => ({options: []}))
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
                    handleRemoveOption={this.handleRemoveOption}
                />
                <AddOption
                    options={this.state.options}
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

const Header = ({title, subtitle}) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    )
}

Header.defaultProps = {title: 'Alternative Title'}

const Action = ({hasOptions, handleTodoSuggestion, suggestedToDo}) => {
    return (
        <div>
            <button
                disabled={!hasOptions}
                onClick={handleTodoSuggestion}
            >
                What should I do?
            </button>
            {suggestedToDo && <p>{suggestedToDo}</p>}
        </div>
    )
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
            return this.setState(() => ({error}))
        }

        form.elements.option.value = ''
        this.setState(() => ({error: undefined}))
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

const DeleteOption = ({value, handleRemoveOption}) => {
    return (
        <button onClick={() => handleRemoveOption(value)}>Delete</button>
    )
}

const Option = ({value, handleRemoveOption}) => {
    return (
        <li>
            {value}
            <DeleteOption
                value={value}
                handleRemoveOption={handleRemoveOption}
            />
        </li>)
}

const Options = ({options, removeOptions, handleRemoveOption}) => {

    const items = options.map((option) => {
        return <Option
            key={option}
            value={option}
            handleRemoveOption={handleRemoveOption}
        />
    })

    return (
        <div>
            <h2>Options</h2>
            <p>{options.length > 0 || 'No options'}</p>
            <ol>{items}</ol>
            <button onClick={removeOptions}>Remove all</button>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
