import { getServerSession } from "next-auth";
import { authOption } from "./auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function GET(request) {
    const session = await getServerSession(authOption);
    console.log("get api", session)
    return NextResponse.json({ authenticated: !!session })
}