export const functions = [
    {
        f1 : function (link, currentInd, setCurrentInd){
            const newIndex = (currentInd - 1 + this.links.length) % link.length; // Calculate previous index
            setCurrentInd(newIndex); // Update current index
        },
        f2: function (link, currentInd, setCurrentInd){
            const newIndex = (currentInd + 1) % this.links.length; // Calculate next index
            setCurrentInd(newIndex); // Update current index
        },
        links: ['https://caiogsan.github.io/proj-acad', 'https://caiogsan.github.io/pop-flix/', 'https://caiogsan.github.io/Projeto-tiago', 'https://caiogsan.github.io/match-game/']
    }
]