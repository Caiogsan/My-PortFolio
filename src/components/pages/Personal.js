function Personal ({name}){
    
    return (
        <section>
            <div className="text-center font-merienda mt-8 mb-8 min-h-[700px] flex flex-col ">
                <h1 className="text-2xl mb-8">Hey <strong>{name}</strong>!! <span className="hover:cursor-pointer"><span className="text-[#2FFAAD] hover:text-[#B048FA] teste">W</span><span className="text-[#A83CFA] hover:text-[#FAAE55]">e</span><span className="text-[#31FA23] hover:text-[#3B47FA]">l</span><span className="text-[#FA340A] hover:text-[#E1FA23]">c</span><span className="text-[#E8FA28] hover:text-[#34BEFA]">o</span><span className="text-[#41FA89] hover:text-[#B048FA]">m</span><span className="text-[#FA340A] hover:text-[#3B47FA]">e</span></span> to my personal space!!</h1>
                <div className="bg-gray-400 h-[700px] w-[90%] m-auto"></div>
            </div>
        </section>
    )
}

export default Personal