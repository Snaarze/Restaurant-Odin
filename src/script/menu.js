import { container } from "../index";
export const menuDiv = () => {
    const div = document.createElement("div")
    div.classList.add("container")
    container.appendChild(div);

    const para = document.createElement("h1");
    para.textContent = "This is our Menu"
    para.classList.add(".hero-text")
    div.appendChild(para);
}