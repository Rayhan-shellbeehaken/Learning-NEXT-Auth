import { connect } from "@/app/dbConfig/dbConfig";
import User from '@/app/models/userModel';
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request) {
    try{
        const reqBody = await request.json();
        console.log(reqBody)
        const {token} = reqBody;
        //console.log("Token :: "+token);

        const user = await User.findOne({verifyToken : token , verifyTokenExpiry : {$gt : Date.now()}});
        
        if(!user){
            return NextResponse.json({error : "Invalid token!!"}, {status : 400});
        }

        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;

        await user.save();

        return NextResponse.json({message : "Successfully verified!!"}, {status : 200});

    }catch(error){
        return NextResponse.json({error : error.message}, {status : 500});
    }
}