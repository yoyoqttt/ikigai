class Todo extends React.Component {
    state = { todos: [], newTodo: '' };
  
    handleInputChange = (e) => this.setState({ newTodo: e.target.value });
    handleAddTodo = () => this.setState((s) => ({ todos: [...s.todos, s.newTodo], newTodo: '' }));
    handleDeleteTodo = (i) => this.setState((s) => ({ todos: s.todos.filter((_, j) => j !== i) }));
  
    render = () => (
      <div className="todo-container">
        <h1>Todo List</h1>
        <input
          type="text"
          className="todo-input"
          value={this.state.newTodo}
          onChange={this.handleInputChange}
          placeholder="Add a new task"
        />
        <button className="add-button" onClick={this.handleAddTodo}>
          Add Task
        </button>
        <ul>
          {this.state.todos.map((t, i) => (
            <li key={i} className="todo-item">
              {t}
              <button className="delete-button" onClick={() => this.handleDeleteTodo(i)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  ReactDOM.render(<Todo />, document.getElementById('root'));
  