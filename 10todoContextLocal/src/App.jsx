import { TodoProvider } from './contexts';
import './App.css'
import { useEffect , useState} from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos ((prev) => [{id: Date.now(),...todo}, ...prev])
  }

  const updatedTodo = (id, todo) => {
    setTodos ( (prev) => prev.map( (prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos ( (prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos ( (prev) => prev.map ( (prevTodo) => prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed} : prevTodo))
  }

  //=============Local storge =============================
  //jab ham ne application load kari 

 useEffect(() => {
  const todos = JSON.parse(localStorage.getItem('todos'))

  if(todos && todos.length > 0){
      setTodos(todos)
  }
 }, [])

 //==================dusra local storage is liye
 //ek aur kaam hai.
 //jaise hi sari todos value mere pass ayi tab mai usko loacal storgae me load karan chahita hu.
 //local storage me kab add karna chaheta hu jab ye todos. jaisie hi ye todos ki value 
 //contex api me chali gai aur contex api se vo todopriveder ke through vapas aa gai jaise hi 
 //todo me koi change ho to wo value muhje local storgae me add karni hai.

 useEffect(() => {
  localStorage.setItem('todos' , JSON.stringify(todos))
 
 }, [todos])
 

 


  return (
    <TodoProvider value={{todos, addTodo, updatedTodo, deleteTodo, toggleComplete}}>
    
<div className="bg-[#172842] min-w-screen min-h-screen py-8 ">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}

                        {todos.map ( (todo) => (
                          <div key={todo.id} 
                          className='w-full'>

                            <TodoItem todo={todo}/>

                          </div>
                        ) )}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
