import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import React, { useState } from 'react';

function Profissional({name}){
    var links = ['https://caiogsan.github.io/proj-acad', 'https://caiogsan.github.io/pop-flix/', 'https://caiogsan.github.io/Projeto-tiago', 'https://caiogsan.github.io/match-game/']
    const [currentIndex, setCurrentIndex] = useState(0);
    function next(){
        const newIndex = (currentIndex + 1) % links.length; // Calculate next index
        setCurrentIndex(newIndex); // Update current index
    }
  
    function before(){
        const newIndex = (currentIndex - 1 + links.length) % links.length; // Calculate previous index
        setCurrentIndex(newIndex); // Update current index
    }

    return (
        <div className="text-center mt-8 mb-8 min-h-[500px] flex flex-col ">
            <h1 className="text-2xl font-merienda">Hey {name}, check out a few of my projects!!</h1>
            <div className="m-auto w-[95%] my-10 flex">
                <button onClick={before} className="m-auto mr-8 text-4xl"><FaArrowAltCircleLeft></FaArrowAltCircleLeft></button>
                <iframe title="projeto1" className="rounded change h-[600px] w-[100%] overflow-hidden" src={links[currentIndex]}></iframe>
                <button onClick={next} className="m-auto ml-8 text-4xl"><FaArrowAltCircleRight></FaArrowAltCircleRight></button>
            </div>
        </div>
    )
}

export default Profissional