import { container } from "../index"
export const homeDiv = () => {
    const div = document.createElement("div")
    div.classList.add("container")
    container.appendChild(div);

    const para = document.createElement("h1");
    para.textContent = "Welcome to Odin Project!"
    para.classList.add(".hero-text")
    div.appendChild(para);
}   