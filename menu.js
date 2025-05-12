 export function switchMenu(){
    let div_menu = document.getElementById('menu_container')
    let btn_menu = document.getElementById('btn_menu')

    if(div_menu.style.left == '70vw'){
        div_menu.style.left = '100vw'
        btn_menu.className = 'open'
    }else{
        div_menu.style.left = '70vw'
        btn_menu.className = 'close'
    }
}