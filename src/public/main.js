import { loadNotes } from "./socket.js";
import { onHandleSubmit, renderNotes } from "./ui.js";

loadNotes(renderNotes)

const form = document.querySelector("#form")

form.addEventListener("submit", onHandleSubmit);