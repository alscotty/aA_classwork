import React from 'react';

class TodoForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id: Math.random() * 10000000,
      title: "",
      body: "",
      done: false
    }
    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(event) {
    this.setState({title: event.target.value })
  }
  handleBody(event) {
    this.setState({ body: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.title)
    
    this.props.receivedTodo({
      title: this.state.title,
      body: this.state.body,
      done: false,
      id: 7
    })
  }

  render () {
    return (
      <form>
        <h1>Add to Todo List</h1>
        <label htmlFor="">Title
          <input onChange={this.handleTitle} value={this.state.title} />
        </label>
        <label htmlFor="">Body
          <input onChange={this.handleBody} value={this.state.body} />
        </label>
        <input onClick={this.handleSubmit}  type="submit" value="Add Todo" />
      </form>
    )
  }

}

export default TodoForm;