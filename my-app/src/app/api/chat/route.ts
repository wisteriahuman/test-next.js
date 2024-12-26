import { NextResponse } from "next/server";
import { chatMessages } from "./messages";

export function GET() {
    return NextResponse.json(chatMessages);
}

export async function POST(request: Request) {
    const data = await request.json();

    const newMessage = {
        id: chatMessages.length + 1,
        role: data.role || "user",
        message: data.message,
    };

    chatMessages.push(newMessage);

    chatMessages.push({
        id: chatMessages.length + 1,
        role: "bot",
        message: data.message,
    });

    return NextResponse.json(newMessage);
}