import{createHeader} from ".../../../view/JS/header.js";
import { switchMenu } from ".../../../controller/projects/menu.js";
import { switchBanner } from ".../../../controller/projects/banner.js";
import { creatCards } from ".../../../controller/projects/cards.js";

window.switchMenu = swichMenu
window.switchBanner = switchBanner

document.addEventListener('DOMContentLoaded',()=>{
    createHeader()
    creatCards()
});