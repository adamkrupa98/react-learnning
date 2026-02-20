
type Props = {
    index: number,
    text: string,
    onDelete: ( id:number ) => void,
}

const TodoItem = ( {index, text, onDelete }:Props ) => {
  return (
    <div className="flex items-center mt-5">
        <li className='2xl'>{text}</li>
        <button onClick={() => onDelete(index)} className="ml-5 p-2 border-2 bg-red-100 border-red-300">Delete</button>
    </div>
  )
}

export default TodoItem
