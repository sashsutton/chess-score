
export const getArchives = async (req, res) => {
    try{
        const username = req.username;
        const url = `https://api.chess.com/pub/player/${username}/games/archives`;

        const response = await fetch(url, {
            headers: {
                'User-Agent': 'ChessScoreApp/1.0 (sashasuttons3@gmail.com)'
            }
        });
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        res.json(data);

    } catch(error){
        console.error("Could not fetch data:", error)
    }
}