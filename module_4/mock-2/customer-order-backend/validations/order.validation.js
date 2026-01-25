export const validateOrder = (req,res,next) => {
    const { product_name,quantity,price,customerId}=req.body;
    if(!product_name || !quantity|| !price || !customerId){
        return
        res.status(400).json({
            error:"All fields are required"
        });
    }
    next();
}