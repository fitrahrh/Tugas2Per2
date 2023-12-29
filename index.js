const express = require("express")
const cors = require("cors")
const db = require("./src/models/index")
const app = express();

const corsOptions = {
    origin: "*"
}

app.use(cors(corsOptions));
app.use(express.json());

const mongooseConfig = {
}
db.mongoose.connect(db.url, mongooseConfig)
    .then(() => console.log("database tersambung"))
    .catch(err => {
        console.log(`Gagal terhubung ${err.message}`);
        process.exit();
    })


app.get("/", (req, res) => {
    res.json({message: "test"});

});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));