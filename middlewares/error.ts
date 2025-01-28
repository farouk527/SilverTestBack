// error middleware to check invalid and not found uri
const notFound = (req: any, res: any, next: any): void => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error); 
}

const errorHandler = (err: any, req: any, res: any, next: any): void => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
}

export { notFound, errorHandler };
