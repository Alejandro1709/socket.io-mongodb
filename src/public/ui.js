import { saveNote } from "./socket.js"

export const onHandleSubmit = e => {
  e.preventDefault()

  const input = document.querySelector("#title")
  const desc = document.querySelector("#description")

  saveNote(input.value, desc.value)
}