"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HelperFunction_1 = require("../utils/HelperFunction");
class Controller {
    constructor() {
        this.mock = (req, res) => {
            res.json(HelperFunction_1.mockList);
        };
        this.user1 = (req, res) => {
            res.json({ message: "Authenticated User1", data: req.body });
        };
        this.user2 = (req, res) => {
            res.json({ message: "Authenticated User2", data: req.body });
        };
        this.params = (req, res) => {
            res.json({ message: "Parameters", data: req.query });
        };
        this.location = (req, res) => {
            res.json({ message: "Accessed" });
        };
        this.seeded = (req, res) => {
            res.json(req.body);
        };
        this.auth = (req, res) => {
            res.header({ token: req.headers.authorization }).json({ message: "Token Verified" });
        };
        this.chaining = (req, res) => {
            res.json({ message: "Hello" });
        };
    }
}
exports.default = new Controller();
