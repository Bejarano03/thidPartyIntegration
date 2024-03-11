const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const animechanAPI = async () => {
        try{
            const response = await fetch("https://animechan.xyz/api/random");
            if (!response.ok) {
                throw new Error("Network respose was not OK");
            }
            const quote = await response.json();
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("Anime Quote: ")
            res.write(quote.quote);
            res.write("<br>" + "-" + quote.character);
            res.end();
        } catch(error) {
            console.log(error)
        }
    }
    animechanAPI();
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})