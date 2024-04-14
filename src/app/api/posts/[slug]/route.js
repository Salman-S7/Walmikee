import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// to get the single post
export const GET = async (req, { params })=>{
    
    const { slug } = params;
    
    try {
        const post = await prisma.post.findUnique({
            where : { slug },
            data : {views :{ increment : 1}},
            include : {user : true}
        })
        return new NextResponse(JSON.stringify(post, {status : 200}))
    } catch (error) {
        return new NextResponse(JSON.stringify({messege: "something went wrong!"},{status : 500}))
    }
}