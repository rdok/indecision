import React from "react"

export class CreateOption extends React.Component {
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
