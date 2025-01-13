import { connect } from "@/app/dbConfig/dbConfig";
import User from '@/app/models/userModel';
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request) {
    try{
        const reqBody = await request.json();
        const {email, password} = reqBody;

        const user = await User.findOne({email : email});

        if(!user){
            return NextResponse.json({error : "User doesn't exist!!"}, {status : "400"});    
        }

        const isValid = await bcryptjs.compare(password, user.password);
        
        if(!isValid)
            return NextResponse.json({error : "Wrong credentials!!"},{status : 400});

        const tokenPayload = {
            id : user._id,
            username : user.username,
            email : user.email
        }

        const token = jwt.sign(tokenPayload, process.env.TOKEN_SECRET, {expiresIn : '1h'});

        const response = NextResponse.json({message : "Successfully logged in"}, {status : 200});

        response.cookies.set("token", token, {
            httpOnly : true,
        })

        return response;

    }catch(error){
        return NextResponse.json({error : error.message}, {status : 500});
    }
}