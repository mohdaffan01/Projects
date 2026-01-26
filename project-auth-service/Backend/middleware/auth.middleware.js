

const authMiddleware = (req, res ,next) => {
    try {
        const data = req.body;
        
        next();
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}