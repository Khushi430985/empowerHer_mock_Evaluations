import {supabase} from "../config/supabase.js";
export const registerCustomer =async(req,res) =>{
    const { full_name,email,phone}=req.body;

    const{data:existing}=await supabase.from("customers")
    .select("*")
    .eq("email",email)
    .single();

    if(existing){
        return 
        res.status(409).json({error:"Email already registered"});
    }

    const {data,error}=await supabase.from("customers").insert([
        {full_name,email,phone}
    ]);
    if(error) returnres.status(500).json({error: error.message});

    res.json({message:"Customer registered successfully"});
};