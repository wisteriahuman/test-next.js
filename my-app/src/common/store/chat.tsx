import { atom } from "recoil";

export const sendMessageAtom = atom<boolean>({
    key: "sendMessage",
    default: false,
});