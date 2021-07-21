const express = require("express");
const userSchema = require("./schema/user");
const validateDto = require("./middleware/validate-dto");

const app = express();
app.use(express.json());

app.post("/", validateDto(userSchema), (req, res) => {
    res.status(200).send({
        status: "success"
    })
})

module.exports = app;