import React from "react";
import validator from "validator";

import { Header } from "./header";
import { Action } from "./action";
import { CreateOption, ListOptions } from "./option/index";
import { ModalOption } from "./option/modal";
import Pagination from "react-responsive-pagination";

export class App extends React.Component {
  state = {
    title: "Indecision",
    options: ["Read", "Train", "Study", "See a movie"],
    currentPage: 1,
    perPage: 3,
    suggestedToDo: null,
  };

  componentWillUnmount(prevProps, prevState) {}

  componentDidMount(prevProps, prevState) {
    try {
      let options = JSON.parse(localStorage.getItem("options"));
      options && this.setState(() => ({ options }));
    } catch (e) {
      // loads default options
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const optionsHaveChanged =
      JSON.stringify(prevState.options) !== JSON.stringify(this.state.options);

    if (!optionsHaveChanged) return;

    localStorage.setItem("options", JSON.stringify(this.state.options));
  }

  handleOptionConfirmation = () => {
    this.setState({ suggestedToDo: null });
  };

  handleWhatTodoSuggestion = () => {
    const index = Math.floor(Math.random() * this.state.options.length);

    this.setState((prevState) => ({ suggestedToDo: prevState.options[index] }));
  };

  handleDeleteOption = (option) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((item) => item !== option),
    }));
  };

  handleAddOption = (option) => {
    if (validator.isEmpty(option)) {
      throw "The option cannot be empty.";
    } else if (this.state.options.indexOf(option) !== -1) {
      throw "The selected option already exists.";
    }
    this.setState((previousState) => {
      return { options: [option].concat(previousState.options) };
    });
  };

  handleOptionsRemoval = () => {
    this.setState(() => ({ options: [] }));
  };

  pageChangeHandler = (newPage) => {
    this.setState(() => ({ currentPage: newPage }));
  };

  render(context) {
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle} />

        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            suggestedToDo={this.state.suggestedToDo}
            handleTodoSuggestion={this.handleWhatTodoSuggestion}
          />
          <div className="widget">
            <ListOptions
              options={this.state.options.slice(
                this.state.perPage * (this.state.currentPage - 1),
                this.state.perPage * (this.state.currentPage - 1) +
                  this.state.perPage
              )}
              removeOptions={this.handleOptionsRemoval}
              handleDeleteOption={this.handleDeleteOption}
            />

            <Pagination
              current={this.state.currentPage}
              total={Math.ceil(this.state.options.length / this.state.perPage)}
              onPageChange={this.pageChangeHandler}
            />

            <CreateOption
              options={this.state.options}
              handleAddOption={this.handleAddOption}
            />
          </div>
          <ModalOption
            option={this.state.suggestedToDo}
            appElement={this.props.appElement}
            handleOptionConfirmation={this.handleOptionConfirmation}
          />
        </div>
      </div>
    );
  }
}
