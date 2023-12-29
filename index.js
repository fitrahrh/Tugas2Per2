const express = require("express")
const cors = require("cors")

const app = express();

const corsOptions = {
    origin: "*"
}

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "test"});

});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('server started on port ${PORT}'));