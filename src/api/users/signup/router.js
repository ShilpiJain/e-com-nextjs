import { NextResponse } from "next/server";
import Users from "../../../models/userModel";

export const POST = async (request) => {
    try {
        // await connect()
        const reqBody = await request.json();
        const {username, email, password} = reqBody
        console.log(reqBody)
        const user = await Users.findOne({email})
        if(user){
return(
    NextResponse.json({error:"user already exist"},{ status:400})
)
        }
        // const post = await Post.find();
        // return new NextResponse(post, { status: 200 });
    } catch (error) {
        return new NextResponse("DB error", { status: 500 });
    }
    // return new NextResponse("Users", { status: 200 });
};