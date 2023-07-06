import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

function Profissional({name}){
    function next(){
        document.getElementsByClassName("change")[0].src = 'https://caiogsan.github.io/Gym-Project/index.html';
    }
    
    function before(){
        document.getElementsByClassName("change")[0].src = 'https://caiogsan.github.io/projeto4/';
    }
    return (
        <div className="text-center mt-8 mb-8 min-h-[500px] flex flex-col ">
            <h1 className="text-2xl font-merienda">Hey {name}, check out a few of my best projects!!</h1>
            <div className="m-auto w-[95%] flex">
                <button onClick={before} className="m-auto mr-8 text-4xl"><FaArrowAltCircleLeft></FaArrowAltCircleLeft></button>
                <iframe scr title="projeto1" className="rounded change h-[600px] mt-12 w-[100%] overflow-hidden" src="https://caiogsan.github.io/projeto4/"></iframe>
                <button onClick={next} className="m-auto ml-8 text-4xl"><FaArrowAltCircleRight></FaArrowAltCircleRight></button>
            </div>
            <div className='flex h-48 w-[85%] m-auto px-12 mt-28 justify-between content-evenly'>
                <div className='bg-black rounded h-48 w-[30%]'>

                </div>
                <div className='bg-red-500 rounded h-48 w-[30%]'>

                </div>
                <div className='bg-green-500 rounded h-48 w-[30%]'>

                </div>
            </div>
            <div className='flex h-48 w-[85%] m-auto px-12 mt-28 justify-between content-evenly'>
                <div className='bg-black rounded h-48 w-[30%]'>

                </div>
                <div className='bg-red-500 rounded h-48 w-[30%]'>

                </div>
                <div className='bg-green-500 rounded h-48 w-[30%]'>

                </div>
            </div>
        </div>
    )
}

export default Profissional