import { useEffect, useState } from 'react'

const Timer = () => {
    const [time, setTime] = useState<number>(0);
    const [active,setActive] = useState<boolean>(false);

    useEffect(()=>{
        if (!active) return;
        
        const interval = setInterval(()=>{
            setTime(prev => prev +1);
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    },[active])

    const startTimer = ()=> {
        setActive(true);
    }
    const stopTimer = () => {
        setActive(false);
    }
    const resetTimer = () => {
        setTime(0);
        setActive(false);
    }

    return (
        <main className="w-full flex items-center justify-center">
            <section className='flex flex-col max-w-sm w-full justify-center items-center'>
                <h1 className='text-3xl'>Zegar:</h1>
                <p className={`text-3xl`}>{time}</p>
                <div className='flex w-full justify-between mt-5'>
                    <button onClick={startTimer} className="border-2 pl-5 pr-5 bg-green-200 border-green-500 hover:bg-green-500 hover:border-green-200 hover:text-white">START</button>
                    <button onClick={stopTimer} className="border-2 pl-5 pr-5  bg-red-200 border-red-500 hover:bg-red-500 hover:border-red-200 hover:text-white">STOP</button>
                    <button onClick={resetTimer} className="border-2 p-3 bg-yellow-200 border-yellow-500 hover:bg-yellow-500 hover:border-yellow-200 hover:text-white">RESET</button>
                </div>
            </section>
        </main>

    )
}

export default Timer
