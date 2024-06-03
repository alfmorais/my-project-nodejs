const express = require("express")
const app = express()

app.get("/", function (request, response) {
    return response.json({ message: "Olá Dev! Bem vindo ao curso!" })
})

app.get("/projects", function (request, response) {
    return response.json([
        "Projeto 1",
        "Projeto 2"
    ])
})

app.listen(3000, () => {
    console.log("Server started on port 3000!")
})