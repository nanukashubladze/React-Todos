import { useState } from "react"

const Todos = () => {
  const [todos,setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');


  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload

    if (newTodo.trim()) {
      setTodos([...todos, newTodo]); // Add new todo to the list
      setNewTodo(''); // Clear the input field
    }
  };

  return (
    <>
     <form className='inpt' onSubmit={handleSubmit}>
        <label >
          <input 
           type="text"
           placeholder='type'
           value={newTodo}
           onChange={handleInputChange} 
           />
        </label>
        <div>
      <ul>
        {todos.map((todo, index) => (
          <li className="displayTodo" key={index}>{todo}</li>
        ))}
      </ul>
      </div>
      </form>
     
    </>
  )
}

export default Todos