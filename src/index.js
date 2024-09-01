import "./style.css";
import { homeDiv } from "./script/home";
import {menuDiv} from "./script/menu"
import { aboutDiv } from "./script/about";

export const container = document.querySelector("#content");

// button selector
const home = document.querySelector(".homeBtn");
const menu = document.querySelector(".menuBtn");
const about = document.querySelector(".aboutBtn");

// initial call to display the current page
homeDiv()

home.addEventListener("click", () =>{
    clearCurrentContent();
    homeDiv();
})

menu.addEventListener("click", () =>{
    clearCurrentContent();
    menuDiv();
})

about.addEventListener("click", () =>{
    clearCurrentContent();
    aboutDiv();
})



function clearCurrentContent(){
   while( container.firstChild){
        container.firstChild.remove()
   }
}