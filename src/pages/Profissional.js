import {FaArrowAltCircleRight, FaAngleLeft, FaArrowAltCircleLeft} from 'react-icons/fa'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {functions} from '../components/functions/Functions'

function Profissional({name}){
    var links = ['https://caiogsan.github.io/proj-acad', 'https://caiogsan.github.io/pop-flix/', 'https://caiogsan.github.io/Projeto-tiago', 'https://caiogsan.github.io/match-game/']
    const [currentIndex, setCurrentIndex] = useState(0);

    const back = () => {functions.map((item) => {
        return item.f1(links, currentIndex, setCurrentIndex)
    })}
    const foward = () => {functions.map((item) => {
        return item.f2(links, currentIndex, setCurrentIndex)
    })}

    return (
        <div className="text-center mt-8 mb-8 min-h-[500px] flex flex-col ">
            <div className="flex">
                <Link to={'/inside'} className="pl-8 text-xl pt-1"><FaAngleLeft></FaAngleLeft></Link>
                <h1 className="pr-8 w-full text-2xl font-merienda">Hey {name}, check out a few of my projects!!</h1>
            </div>
            <div className="m-auto w-[95%] my-10 flex">
                <button onClick={back} className="m-auto mr-8 text-4xl"><FaArrowAltCircleLeft></FaArrowAltCircleLeft></button>
                <iframe title="projeto1" className="rounded change h-[600px] w-[100%] overflow-hidden" src={links[currentIndex]}></iframe>
                <button onClick={foward} className="m-auto ml-8 text-4xl"><FaArrowAltCircleRight></FaArrowAltCircleRight></button>
            </div>
        </div>
    )
}

export default Profissional