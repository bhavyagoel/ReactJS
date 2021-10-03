import React from "react";

class InputTodo extends React.Component {
  state = {
    title: "",
  };
  onChange = (e) => {
    console.log("Trying to edit?");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.title);
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: "",
      });
    } else {
      alert("Please Write Item");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
          name="title"
        />
        <button className="input-submit">Submit</button>
      </form>
    );
  }
}

export default InputTodo;
