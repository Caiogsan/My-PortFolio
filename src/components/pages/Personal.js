function Personal ({name}){
    
    return (
        <div className="text-center mt-8 mb-8 min-h-[500px] flex flex-col ">
            <h1 className="text-2xl font-merienda">Hey <strong>{name}</strong>!! Welcome to my personal space!!</h1>
            <div className="m-auto w-[95%] bg-gray-400 min-h-[800px] my-10">
                <h1 className="bg-transparent py-10 text-4xl font-merienda">About me:</h1>
                <div className="text-justify w-[90%] mb-10 m-auto text-xl font-merienda">
                    <p className="bg-gray-400 indent-10">
                        Hello {name}, it is great to have you here and i am pleased to meet you, my name is Caio Gonçalves Tiburzio Santos, i have 21 years old and right know i am living in Brazil but during the past few years i have lived a while in Italy and in the United States where i did study for a few years. I have improved my english, my spanish and my italian during this time.
                    </p>
                    <p className="indent-10 pt-2 bg-gray-400">
                        My journey with the internet has started very early in my life, i think i was around 11 years old when i got my first notebook and i remember staying up all nights to play games, search for random things on internet, watch videos, go through all the files on the computer just out of curiosity and as the years have passed, my passion for technology in general only got bigger and a few years ago i started studying programming because i wanted to do something related to technology and this was what really got my attention and after i started practicing, i had sure i wanted to work with it.
                    </p>
                    <p className="indent-10 py-2 bg-gray-400">
                        After some months of practicing and studying, i got my first job building aps for Itajuba's city hall, my city, we had a large team, about 10 people working with front-end and another 10 with back-end, i was hired to help upgrading the version of PROCON app, which helps the customer with any complains they have and to help build a fitness app the local gym wanted to release. I worked with mostly front-end using only <strong className="bg-gray-400">FLUTTER</strong> and <strong className="bg-gray-400">DART</strong> for programming. 
                    </p>
                    <p className="indent-10 bg-gray-400">My next step was try to learn how to build websites and get in the industry so i could get to know more people and learn more from them, as i have learned from the previous job. So i studied for months to improve my skills and i did learn <strong className="bg-gray-400">HTML</strong>, <strong className="bg-gray-400"> CSS</strong>, <strong className="bg-gray-400">CSS Tailwind</strong>, <strong className="bg-gray-400">Javascript</strong>, <strong className="bg-gray-400">React</strong> and i am now learning <strong className="bg-gray-400">Node.js</strong> as you can check for yourself on my <strong className="bg-gray-400">professional life</strong> tab. i Would very much like a opportunity to learn and work from a great company that is willing to give me a chance, i promiss you won't regreat!!</p>  
                    <p className="indent-10 bg-gray-400 pt-2">I would be avaliable to move to any place if it is required or work from anywhere in the world.</p>  
                </div>
            </div>
        </div>
    )
}

export default Personal