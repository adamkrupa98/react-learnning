import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState<number>(0);
    const incrementCounter = () => {
        setCount(prev => prev+1);
    }
    const decrementCounter = () => {
        if (count == 0) return;
        setCount(prev => prev -1);
    }
    const resetCounter = () => {
        setCount(0);
    }

    return (
        <main className="w-full flex items-center justify-center">
            <section className='flex flex-col max-w-sm w-full justify-center items-center'>
                <h1>Counter:</h1>
                <p className={`text-2xl ${count > 10 ? 'text-red-500' : 'text-black'}`}>{count}</p>
                <div className='flex w-full justify-between mt-5'>
                    <button onClick={incrementCounter} className="border-2 pl-5 pr-5 bg-green-200 border-green-500 hover:bg-green-500 hover:border-green-200 hover:text-white">+</button>
                    <button onClick={decrementCounter} className="border-2 pl-5 pr-5  bg-red-200 border-red-500 hover:bg-red-500 hover:border-red-200 hover:text-white">-</button>
                    <button onClick={resetCounter} className="border-2 p-3 bg-yellow-200 border-yellow-500 hover:bg-yellow-500 hover:border-yellow-200 hover:text-white">RESET</button>
                </div>
            </section>
        </main>

    )
}

export default Counter
