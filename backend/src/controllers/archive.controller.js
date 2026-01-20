
export const getArchives = async (req, res) => {
    try{
        const username = req.params.username;
        const url = `https://api.chess.com/pub/player/${username}/games/archives`;

        const response = await fetch(url, {
            headers: {
                'User-Agent': 'ChessScoreApp/1.0 (sashasuttons3@gmail.com)'
            }
        });
        if(!response.ok){
            if (!response.ok) return res.status(response.status).json({ error: "Chess.com error" });
        }

        const data = await response.json();

        res.json(data);

    } catch(error){
        res.status(500).json({ error: error.message });
    }
}