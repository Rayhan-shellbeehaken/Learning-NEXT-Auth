import { connect } from "@/app/dbConfig/dbConfig";
import { NextResponse } from "next/server";

connect();

export async function GET(request) {
    try{
        const response = NextResponse.json({
            message : "Successfully logged out!"
        },{status : 200});

        response.cookies.set("token","",{
            httpOnly : true,
            expires : new Date(0)
        })
    }catch(error){
        return NextResponse.json({error : error.message},{status : 500});
    }
}