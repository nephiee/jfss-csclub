"use server";

import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { studentNumber, code } = await req.json();

  console.log(process.env.ATTENDANCE_CODE)

  const filePath = path.join(process.cwd(), "attendance.txt");
  const entry = `Student Number: ${studentNumber}, Code: ${code}\n`;

  if (code !== process.env.ATTENDANCE_CODE) {
    return NextResponse.json({ success: false, message: "Invalid code" });
  }

  let existingData = "";
  if (fs.existsSync(filePath)) {
    existingData = fs.readFileSync(filePath, "utf8");
  }

  if (existingData.includes(`Student Number: ${studentNumber}`)) {
    return NextResponse.json({ success: false, message: "Already Confirmed Attendance." });
  }

  fs.appendFileSync(filePath, entry, "utf8");

  return NextResponse.json({ success: true, message: "Attendance Saved!" });
}
