import { NextResponse } from "next/server";
import util from "util";
import db from "../../../../../util/db";

const query = util.promisify(db.query).bind(db);


export const POST = async (req) => {
    const user = await req.json();
    try {
        const results = await query(`INSERT INTO users (uniqID, firstName, lastName, email, password ,phone, type_account, status_account)
        VALUES (UUID(), '${user.firstName}', '${user.lastName}', '${user.email}', '${user.password}', '${user.phone}', 'user-personal', 'pending')`)
        if (results) return new NextResponse(user, { status: 201 });
    } catch (error) {
        console.log(error)
        return new NextResponse(error, { status: 400 });
    }
}