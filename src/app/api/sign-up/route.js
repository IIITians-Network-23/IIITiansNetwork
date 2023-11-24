// Backend Here
import User from "@/app/models/User";
import connect from "@/app/Utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const {fname, lname, email, password} = await req.json();

    await connect();

    const existingUser = await User.findOne({email});

    if(existingUser) {
        return new NextResponse("Email already in use", {
            status: 400
        });
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({
        firstname: fname,
        lastname: lname,
        email,
        password: hashedPassword
    });

    try {
        await newUser.save();
        return new NextResponse("User is registered", {status: 200})
    }
    catch (err) {
        return new NextResponse(err, {
            status: 500
        });
    }
}