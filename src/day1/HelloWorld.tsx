import { useState } from 'react'

const HelloWorld = () => {
    const [text, setText] = useState<string>('Hello World');
    const [newText, setNewText] = useState<string>('');
    const handleChangeText = () => {
        setText(newText);
        setNewText('');
    }

    return (
        <main className='flex flex-col justify-center items-center max-w-sm w-full'>
            <p className='text-2xl'>{text}</p>
            <input type="text" 
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            placeholder='Słowo'
            className='border-2 p-2 rounded-md mb-4 mt-4'
            />
            <button onClick={handleChangeText} className='border-2 w-[150px] mt-10 bg-red-300 rounded-md text-white hover:bg-red-400 transition-colors'
>Zmiana tekstu</button>
        </main>
    )
}

export default HelloWorld
