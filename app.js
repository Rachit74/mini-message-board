const express = require("express")
const indexRouter = require("./routes/indexRouter");

app = express();

app.use("/",indexRouter);


const PORT = 8000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    };
    console.log(`Express app running on port ${PORT}! localhost:8000\n`);
});