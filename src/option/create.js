import React from "react"

export class CreateOption extends React.Component {

    state = {error: undefined}

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

    render = () => (
        <div>
            <form className='add-option' onSubmit={this.addOption.bind(this)}>
                <input className='add-option__input' type="text" name="option"/>
                <button className='button'> Add</button>
            </form>
            {
                this.state.error
                && <p className='add-option-error'>{this.state.error}</p>
            }
        </div>
    )
}
