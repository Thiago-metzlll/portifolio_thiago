import{createHeader} from "./header.js";
import { swichMenu } from "./menu.js";
import { switchBanner } from "./banner.js";

window.swichMenu = swichMenu
window.switchBanner = switchBanner

document.addEventListener('DOMContentLoaded',()=>{
    createHeader()
});