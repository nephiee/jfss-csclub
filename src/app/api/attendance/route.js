"use server";

import { NextResponse } from "next/server";
import { connect } from "../../config/db.js";
import User from "../../models/user.js";


export async function POST(req) {
  await connect()

  const { studentNumber, code } = await req.json();

  if (code !== process.env.ATTENDANCE_CODE) {
    return NextResponse.json({ success: false, message: "Invalid Code" }, { status: 400 });
  }

  const user = new User({ studentNumber });
  await user.save();
  
  
  return NextResponse.json({ success: true, message: "Attendance Saved!" });
}
