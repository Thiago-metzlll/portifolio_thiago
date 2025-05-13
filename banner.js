let actual_banner = 1;
const qnt_banners = 3;

export function switchBanner(n_banner) {
    let banners = document.getElementById("banners");
    
    // A largura de cada banner é 90vw, então movemos para a posição correta
    banners.style.left = `-${(n_banner - 1) * 100}vw`;

    actual_banner = n_banner;

    for (let i = 1; i <= qnt_banners; i++) {
        let btn = document.getElementById(`btn_banner_${i}`);
        if (n_banner == i) {
            btn.style.transform = 'scale(1.2)';
        } else {
            btn.style.transform = 'scale(1)';
        }
    }
}

window.switchBanner = switchBanner;

setInterval(() => {
    if (actual_banner >= qnt_banners) {
        actual_banner = 0;
    }
    console.log('Alternando para o banner: ', actual_banner + 1); // Verificação no console
    switchBanner(actual_banner + 1);
}, 4000);



