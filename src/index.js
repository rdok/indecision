import './header'

console.log('test')

class App {

}
// class App extends React.Component {
//     constructor() {
//         super();
//         this.handleOptionsRemoval = this.handleOptionsRemoval.bind(this)
//         this.handleDeleteOption = this.handleDeleteOption.bind(this)
//         this.handleAddOption = this.handleAddOption.bind(this)
//         this.handleWhatTodoSuggestion = this.handleWhatTodoSuggestion.bind(this)
//         this.state = {
//             title: 'Indecision App',
//             subtitle: 'Put your life in the hands of a computer',
//             options: ['Read', 'Train', 'Study', 'See a movie'],
//             suggestedToDo: null
//         }
//     }
//
//     componentWillUnmount(prevProps, prevState) {
//         console.log('componentDidUnmount')
//     }
//
//     componentDidMount(prevProps, prevState) {
//         try {
//             let options = JSON.parse(localStorage.getItem('options'))
//             options && this.setState(() => ({options}))
//         } catch (e) {
//             // loads default options
//         }
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         const optionsChanged = JSON.stringify(prevState.options)
//             !== JSON.stringify(this.state.options)
//
//         if (!optionsChanged) return;
//
//         localStorage.setItem('options', JSON.stringify(this.state.options))
//     }
//
//     handleWhatTodoSuggestion() {
//         const index = Math.floor(Math.random() * this.state.options.length)
//
//         this.setState((prevState) => ({suggestedToDo: prevState.options[index]}))
//     }
//
//     handleDeleteOption(option) {
//
//         this.setState((prevState) => ({
//             options: prevState.options.filter((item) => item !== option)
//         }))
//     }
//
//     handleAddOption(option) {
//         if (!option) {
//             throw 'The option cannot be empty.'
//         } else if (this.state.options.indexOf(option) !== -1) {
//             throw 'The selected option already exists.'
//         }
//         this.setState((previousState) => {
//             return {options: previousState.options.concat(option)}
//         })
//     }
//
//     handleOptionsRemoval() {
//         this.setState(() => ({options: []}))
//     }
//
//     render() {
//
//         return (
//             <div>
//                 <Header title={this.state.title} subtitle={this.subtitle}/>
//                 <Action
//                     hasOptions={this.state.options.length > 0}
//                     suggestedToDo={this.state.suggestedToDo}
//                     handleTodoSuggestion={this.handleWhatTodoSuggestion}
//                 />
//                 <Options
//                     options={this.state.options}
//                     removeOptions={this.handleOptionsRemoval}
//                     handleDeleteOption={this.handleDeleteOption}
//                 />
//                 <AddOption
//                     options={this.state.options}
//                     handleAddOption={this.handleAddOption}
//                 />
//             </div>
//         )
//     }
// }
//
// const Header = ({title, subtitle}) => {
//     return (
//         <div>
//             <h1>{title}</h1>
//             <h2>{subtitle}</h2>
//         </div>
//     )
// }
//
// Header.defaultProps = {title: 'Alternative Title'}
//
// const Action = ({hasOptions, handleTodoSuggestion, suggestedToDo}) => {
//     return (
//         <div>
//             <button
//                 disabled={!hasOptions}
//                 onClick={handleTodoSuggestion}
//             >
//                 What should I do?
//             </button>
//             {suggestedToDo && <p>{suggestedToDo}</p>}
//         </div>
//     )
// }
//
// class AddOption extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {error: undefined}
//     }
//
//     addOption(e) {
//         e.preventDefault()
//         const form = e.target
//         let option = form.elements.option.value.trim()
//
//         try {
//             this.props.handleAddOption(option)
//         } catch (error) {
//             return this.setState(() => ({error}))
//         }
//
//         form.elements.option.value = ''
//         this.setState(() => ({error: undefined}))
//     }
//
//     render() {
//         return (
//             <div>
//                 <h3>Add option</h3>
//                 <form onSubmit={this.addOption.bind(this)}>
//                     <input type="text" name="option"/>
//                     <button> Add</button>
//                     {this.state.error && <p>{this.state.error}</p>}
//                 </form>
//             </div>
//         )
//     }
// }
//
// const DeleteOption = ({option, handleDeleteOption}) => {
//     const style = {
//         background: 'none',
//         border: 'none',
//         padding: '0!important',
//         textDecoration: 'underline',
//         cursor: 'pointer',
//     }
//
//     return (
//         <button
//             style={style}
//             onClick={() => handleDeleteOption(option)}
//         >Delete</button>
//     )
// }
//
// const Option = ({option, handleDeleteOption}) => {
//     return (
//         <li>
//             {option}
//             <DeleteOption
//                 option={option}
//                 handleDeleteOption={handleDeleteOption}
//             />
//         </li>)
// }
//
// const Options = ({options, removeOptions, handleDeleteOption}) => {
//
//     const items = options.map((option) => {
//         return <Option
//             key={option}
//             option={option}
//             handleDeleteOption={handleDeleteOption}
//         />
//     })
//
//     return (
//         <div>
//             <h2>Options</h2>
//             <p>{options.length > 0 || 'Add an option to get started!'}</p>
//             <ol>{items}</ol>
//             <button onClick={removeOptions}>Remove all</button>
//         </div>
//     )
// }
//
// ReactDOM.render(<App/>, document.getElementById('root'))
