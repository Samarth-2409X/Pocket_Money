const { JWT_SECREATE } = require("./config");
const JWT = require("jsonwebtoken");

const authmiddelware = (req, res, next) => {
    const authheader = req.headers.authorization;

    if (!authheader || !authheader.startsWith('Bearer ')) {
        return res.status(401).json({ msg: "Authorization header missing or invalid" });
    }

    const token = authheader.split(' ')[1];

    try {
        const decoded = JWT.verify(token, JWT_SECREATE);

        if (decoded.userId) {
            req.userId = decoded.userId;
            next();
        } else {
            return res.status(403).json({ msg: "Invalid token" });
        }
    } catch (e) {
        return res.status(403).json({ msg: "Invalid token" });
    }
};

module.exports = { authmiddelware };
