import { loadNotes } from "./socket.js";
import { onHandleSubmit } from "./ui.js";

loadNotes()

const form = document.querySelector("#form")

form.addEventListener("submit", onHandleSubmit);