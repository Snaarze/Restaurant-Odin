import { container } from "../index"
import logo from "../img/logo.jpg"
import place from "../img/landpage.jpeg"
import { text } from "@fortawesome/fontawesome-svg-core"

export const homeDiv = () => {
    const div = document.createElement("div")
    div.classList.add("container")
    container.appendChild(div);
    

    const leftContainer = document.createElement("div")
    leftContainer.classList.add("left-container")
    div.appendChild(leftContainer);
    const leftLogo = document.createElement("img")
    leftLogo.classList.add("left")
    leftLogo.src = place;
    leftContainer.appendChild(leftLogo)

    const rightContainer = document.createElement("div")
    rightContainer.classList.add("right-container")
    div.appendChild(rightContainer)
    const textContainer = document.createElement("div")
    textContainer.classList.add("textContainer")
    rightContainer.appendChild(textContainer)
    const heroText = document.createElement("h1")
    heroText.textContent = "We are selling  High Quality Sushi, One of the Top distributor in asia!"
    textContainer.appendChild(heroText)
    const part = document.createElement("div")
    part.classList.add("join-container")
    rightContainer.appendChild(part)
    const reserve = document.createElement("h1")
    reserve.textContent = "Wanna be part of us?"
    part.appendChild(reserve)

    const joinBtn = document.createElement("button")
    joinBtn.textContent = "Join now!"
    joinBtn.classList.add("joinBtn")
    part.appendChild(joinBtn)
   

}



