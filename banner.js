export function switchBanner(n_banner){
    let banners = document.getElementById(banners)
    banners.style.accentColor.left = `-${n_banner - 1}00vw`
    actual_banner = n_banner
}
setInterval(()=>{
    if(actual_banner >= qnt_banners){
        actual_banner = 0
    }
    switchBanner(actual_banner + 1);
}, 4000);

