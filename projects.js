import{createHeader} from "./header.js";
import { swichMenu } from "./menu.js";

window.swichMenu = swichMenu

document.addEventListener('DOMContentLoaded',()=>{
    createHeader()
});