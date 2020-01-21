import React from 'react'
import validator from 'validator'

import {Header} from "./header"
import {Action} from "./action"
import {CreateOption, ListOptions} from "./option/index"

export class App extends React.Component {
    constructor() {
        super();
        this.handleOptionsRemoval = this.handleOptionsRemoval.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleWhatTodoSuggestion = this.handleWhatTodoSuggestion.bind(this)
        this.state = {
            title: 'Indecision App',
            subtitle: 'Put your life in the hands of a computer',
            options: ['Read', 'Train', 'Study', 'See a movie'],
            suggestedToDo: null
        }
    }

    componentWillUnmount(prevProps, prevState) {
        console.log('componentDidUnmount')
    }

    componentDidMount(prevProps, prevState) {
        try {
            console.log('test')
            let options = JSON.parse(localStorage.getItem('options'))
            options && this.setState(() => ({options}))
        } catch (e) {
            // loads default options
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const optionsChanged = JSON.stringify(prevState.options)
            !== JSON.stringify(this.state.options)

        if (!optionsChanged) return;

        localStorage.setItem('options', JSON.stringify(this.state.options))
    }

    handleWhatTodoSuggestion() {
        const index = Math.floor(Math.random() * this.state.options.length)

        this.setState((prevState) => ({suggestedToDo: prevState.options[index]}))
    }

    handleDeleteOption(option) {

        this.setState((prevState) => ({
            options: prevState.options.filter((item) => item !== option)
        }))
    }

    handleAddOption(option) {
        console.log('handleAddOption')

        if (validator.isEmpty(option)) {
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
                <ListOptions
                    options={this.state.options}
                    removeOptions={this.handleOptionsRemoval}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <CreateOption
                    options={this.state.options}
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}