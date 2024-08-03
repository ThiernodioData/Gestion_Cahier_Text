const divOnOffInternet = document.getElementById('onOffInternet');

divOnOffInternet.classList.add('hide');
divOnOffInternet.style.display = 'none';

function handleOffline() {
    divOnOffInternet.classList.add('offline');
    divOnOffInternet.innerHTML = `
        <h1>Ce projet nécessite une connexion Internet pour fonctionner de manière optimale, car il dépend de ressources en ligne telles que des icônes et d'autres éléments !</h1>
        <button id="btnOnOffClose" class="new-product">Fermer Pop-up</button>
    `;
    divOnOffInternet.style.display = 'flex';

    const btnOnOffInternet = document.getElementById('btnOnOffClose');
    btnOnOffInternet.addEventListener('click', (event) => {
        event.preventDefault();
        divOnOffInternet.style.display = 'none';
    });
}

window.addEventListener('offline', handleOffline);

window.addEventListener('load', () => {
    if (!navigator.onLine) {
        handleOffline();
    }
});

window.addEventListener('online', () => {
    divOnOffInternet.classList.remove('offline');
    divOnOffInternet.classList.add('online');
    divOnOffInternet.innerHTML = `
        <h1>Connexion Internet rétablie. Le projet fonctionnera désormais de manière optimale, car il dépendait de ressources en ligne telles que des icônes et d'autres éléments !</h1>
    `;
    divOnOffInternet.style.display = 'flex';

    setTimeout(() => {
        divOnOffInternet.style.display = 'none';
    }, 3000);
});
