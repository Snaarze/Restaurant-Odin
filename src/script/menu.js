import { container } from "../index";
import gunkan from "../img/Sushi-menu/gunkan maki.jpg"
import makizushi from "../img/Sushi-menu/makizushi.jpg"
import narezushi from "../img/Sushi-menu/narezushi.jpg"
import nigiri from "../img/Sushi-menu/nigiri.jpg"
import oshizushi from "../img/Sushi-menu/oshizushi2.jpg"
import temaki from "../img/Sushi-menu/temaki.png"
import temari from "../img/Sushi-menu/temari.jpeg"
import sazasushi from "../img/Sushi-menu/sazasushi.jpg"


export const menuDiv = () => {
    const div = document.createElement("div")
    div.classList.add("menu-container")
    container.appendChild(div);


    const menu = document.createElement("h1");
    menu.textContent = "Sushi Menu"
    menu.classList.add("menu-title");
    div.appendChild(menu)


    const cardContainer = document.createElement("div")
    cardContainer.classList.add("cardContainer")
    div.appendChild(cardContainer)

    const menuList = [gunkan, makizushi, narezushi, nigiri, oshizushi, temaki, temari, sazasushi]
    const menuName = ["gunkan"," makizushi", "narezushi", "nigiri", "oshizushi", "temaki", "temari", "sazasushi"]
   
    for(let i = 0; i < 8; i++){
        const card = document.createElement("div")
        card.classList.add(`${"card"}`)
        cardContainer.appendChild(card)

        const name = document.createElement("h3");
        name.classList.add("foodName")
        name.textContent = menuName[i];
        card.appendChild(name)

        const img = document.createElement("img")
        img.classList.add("img-menu")
        img.src = menuList[i]
        card.appendChild(img)


        const button = document.createElement("button")
        button.textContent = "Buy now!"
        button.classList.add("buyBtn")
        card.appendChild(button)

    }
}