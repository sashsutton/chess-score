

const username = "sashleflash";
const url = `https://api.chess.com/pub/player/${username}/games/archives`;

export const getArchives = async () => {
    try{
        const response = await fetch(url, {
            headers:{
                'User-Agent': 'ChessScoreApp/1.0 (sashasuttons3@gmail.com)'
            }
        });

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        console.log("Monthly archives found:", data);

    } catch(error){
        console.log("Could not fetch data:", error);
    }
}

getArchives();
