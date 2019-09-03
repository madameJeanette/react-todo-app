import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
          return {
              textDecoration: this.props.todo.completed ? 'line-through': 'none',
              background: this.props.todo.completed ?'#C4E538' : '#12CBC4',
              padding: '10px',
              borderBottom: '1px #ccc dotted'
            

          }
  }    
 
render() {

     //destructuring this.props.todo.id to simplify the code.
     const { id, title } = this.props.todo;
        return (
           <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange=
                {this.props.markComplete.bind(this, id)} /> 
                {/* Drilling the function up */}
               
                {" "}
                { title }
                <button onClick={this.props.delTodo.bind(this, id)} style=
                {btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

//Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
  }

const btnStyle = {
    background:'#FF1744',
    color:'#fff',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'

}

export default TodoItem;
