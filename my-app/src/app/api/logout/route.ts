import { NextResponse } from "next/server";
import { chatMessages } from "../chat/messages";

export function GET(request: Request) {
    return NextResponse.redirect(new URL("/", request.url));
}

export async function POST(request: Request) {
    chatMessages.length = 0;
    chatMessages.push({
        id: 1,
        role: "bot",
        message: "こんにちは！",
    });
    return NextResponse.redirect(new URL("/", request.url));
}