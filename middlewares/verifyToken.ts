import jwt, { JwtPayload } from "jsonwebtoken";

//token verification middleware
const verifyToken = (req: any, res: any, next: any): void => {
    const authToken = req.headers.authorization;

    if (authToken) {
        const token = authToken.split(" ")[1];
        
        try {
            const decodedPayload = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
            
            
            req.user = decodedPayload;
            
            next();
        } catch (error) {
            return res.status(401).json({ message: "Invalid token, access denied" });
        }
    } else {
        return res.status(401).json({ message: "No token provided, access denied" });
    }
}

export { verifyToken };
