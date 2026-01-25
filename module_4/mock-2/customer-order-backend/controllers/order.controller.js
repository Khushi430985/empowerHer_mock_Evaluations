import {supabase} from "../config/supabase.js";
export const createClient =async(req,res)=>{
    const {product_name,quantity,price,customerId}=req.body;

    const {data:customer} =await supabase
    .from("customers")
    .select("*")
    .eq("id", customerId)
    .single();

    if(!customer) return
    res.status(404).json({error: "Customer not found"});

    const {error}=await 
    supabase.from("orders").insert([
        {product_name,quantity,price,customerId}
    ]);
    if(error) return
    res.status(500).json({error:error.message});
    res.json({message:"Order craeted"});
};