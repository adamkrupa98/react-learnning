import { useState } from 'react'
import TodoItem from './TodoItem';

const TodoList = () => {

    const [todos, setTodos] = useState<string[]>([
        "Nauczyć się props",
        "Zrozumieć lifting state",
        "Zrobić projekt"
    ]);

    const deleteToDoItem = ( id:number ) =>{
      let newTodos =  todos.filter((item, index) => index !== id);
      setTodos(newTodos);
    }

  return (
    <main className='flex flex-col max-w-sm w-full'>
        {todos.map( (t,index) => (
            <TodoItem key={index} index={index} text={t} onDelete={deleteToDoItem} />
            ))}
    </main>
  )
}

export default TodoList
