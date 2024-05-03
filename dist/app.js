"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const sum = (a, b) => {
    return a + b;
};
app.get("/", (req, res) => {
});
console.log(sum(2, 3));
// app.listen(3000, () => console.log("listening"));
