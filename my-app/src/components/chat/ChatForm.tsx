"use client";


import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { sendMessageAtom } from "@/common/store/chat/chat";


export default function ChatForm() {
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
                    type="text"
                    placeholder="メッセージを入力..."
                    style={{
                        width: "100%",
                        padding: 10,
                        borderRadius: 10,
                        border: "1px solid #ccc",
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
                        sendMessageAtom();
                    }}
                >
                    送信
                </button>
            </div>
        </div>
    );
}