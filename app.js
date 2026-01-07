const path = require("node:path")
const express = require("express")
const indexRouter = require("./routes/indexRouter");

const assetsPath = path.join(__dirname, "public");

app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));


app.use("/",indexRouter);


const PORT = 8000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    };
    console.log(`Express app running on port ${PORT}! localhost:8000\n`);
});