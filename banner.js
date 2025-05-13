let actual_banner = 1
const qnt_banners = 3

export function switchBanner(n_banner){
    let banners = document.getElementById(banners)
    banners.style.accentColor.left = `-${n_banner - 1}00vw`
    actual_banner = n_banner
}

 for(let i = 1; i < qnt_banners + 1; i++){
        let btn = document.getElementById(`btn_banner_${i}`);
        if(n_banner == i){
            btn.style.transform = 'scale(1.2)';
        }else{
            btn.style.transform = 'scale(1)'
        }
    }

setInterval(()=>{
    if(actual_banner >= qnt_banners){
        actual_banner = 0
    }
    switchBanner(actual_banner + 1);
}, 4000);

