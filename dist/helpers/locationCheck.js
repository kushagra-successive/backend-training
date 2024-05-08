"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationCheckMiddleware = void 0;
const geoip = require("geoip-lite");
const locationCheckMiddleware = () => {
    return (req, res, next) => {
        console.log(req);
        const expectedCountryCode = "IN";
        const ip = req.headers["x-forwarded-for"];
        if (!ip) {
            return res.status(400).send("Unable to determine your location");
        }
        const geo = geoip.lookup(ip);
        if (!geo || geo.country !== expectedCountryCode) {
            return res.status(403).send("Access restricted for your region");
        }
        next();
    };
};
exports.locationCheckMiddleware = locationCheckMiddleware;
