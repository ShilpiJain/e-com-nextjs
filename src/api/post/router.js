import Post from "../../models/postModel";
// import Users from "../../models/user";
import connect  from "../../utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    console.log("hello")
    try {
        await connect()
        const post = await Post.find();
        return new NextResponse(post, { status: 200 });
    } catch (error) {
        return new NextResponse("DB error", { status: 500 });
    }
    // return new NextResponse("Users", { status: 200 });
};
