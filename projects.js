import{createHeader} from "./header.js";
import { switchMenu } from "./menu.js";
import { switchBanner } from "./banner.js";
import { creatCards } from "./cards.js";

window.switchMenu = swichMenu
window.switchBanner = switchBanner

document.addEventListener('DOMContentLoaded',()=>{
    createHeader()
    creatCards()
});