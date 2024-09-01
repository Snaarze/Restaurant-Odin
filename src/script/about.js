import { container } from "../index"
export const aboutDiv = () => {
    const div = document.createElement("div")
    div.classList.add("container")
    container.appendChild(div);

    const para = document.createElement("h1");
    para.textContent = "About us"
    para.classList.add(".hero-text")
    div.appendChild(para);
}   