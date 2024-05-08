"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GlobalMiddleware {
    constructor() {
        this.logger = (req, res, next) => {
            const method = req.method;
            const url = req.url;
            const timestamp = new Date().toISOString();
            console.log(`[${timestamp}] ${method} ${url}`);
            next();
        };
        this.custom = (req, res, next) => {
            res.setHeader("X-myHeader", "Hii Middlewares");
            console.log(res.getHeaders());
            next();
        };
        this.counterMiddleware = (limit) => {
            const counterObj = {};
            return (req, res, next) => {
                counterObj.hasOwnProperty("count") ? null : (counterObj.count = 0);
                if (counterObj.count !== undefined && counterObj.count >= limit) {
                    res.status(429).json({ error: "Too Many Requests" });
                    return;
                }
                else {
                    counterObj.count++;
                }
                console.log(counterObj.count);
                setTimeout(() => {
                    delete counterObj.count;
                }, 5000);
                next();
            };
        };
    }
}
exports.default = new GlobalMiddleware;
