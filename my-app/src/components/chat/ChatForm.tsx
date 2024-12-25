"use client";


import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { useAtom } from "jotai";
import { sendMessageAtom } from "@/common/store/chat/chat";


export const ChatForm: React.FC = () => {
    const [message, setMessage] = useState<string>("");
    const [, setSender] = useAtom(sendMessageAtom);

    const sendMessage = async () => {
        if (!message) return;

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    role: "user",
                    message: message,
                }),
            });

            const data = await response.json();
            setSender(true);
        } catch (err) {
            console.error(err);
        }

        setMessage("");
    };

    return (
        <div
            style={{
                position: "fixed",
                bottom: 0,
                width: "100%",
                padding: 20,
                background: "#fff",
            }}
        >
            <div style={{ display: "flex", gap: 10 }}>
                <input
                    style={{
                        width: "100%",
                        padding: 10,
                        borderRadius: 10,
                        border: "1px solid #ccc",
                    }}
                    type="text"
                    value={message}
                    placeholder="新しいチャットを送る..."
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
                            e.preventDefault();
                            sendMessage();
                        }
                    }}
                />
                <button
                    style={{
                        padding: 10,
                        background: "#006bd6",
                        color: "white",
                        borderRadius: 10,
                        border: "none",
                    }}
                    onClick={() => {
                        sendMessage();
                    }}
                >
                    送信
                </button>
            </div>
        </div>
    );
}