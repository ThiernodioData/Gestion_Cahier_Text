const body = document.body;
const sidebar = document.querySelector('.main-sidebar');
const openSidebar = document.querySelector('#openSidebar');
const closeSidebar = document.querySelector('#closeSidebar');
const toggleTheme = document.querySelector('.toggle-theme');
const light = toggleTheme.children[0];
const dark = toggleTheme.children[1];
const inputFields = document.querySelectorAll('.percentage p');
const card1=document.getElementById('card1');
const card2=document.getElementById('card2');
const card3=document.getElementById('card3');
const ongletTableauBord=document.getElementById('tableauBord');
const ongletActiveTab=document.querySelector('#tableauBord .active');
const dashboardBody1=document.getElementById('dashBody1'); //milier du tableau de bord
const dashboardBody2=document.getElementById('dashBody2'); //milier du tableau de bord

const seDeconnecter=document.getElementById('seDeconnecter');

dashboardBody2.style.display='none';


ongletTableauBord.addEventListener('click',addTableauBord);
function addTableauBord(){
    ongletActiveTab.classList.add('active');

    dashboardBody1.style.display='block';
    
    dashboardBody2.style.display='none';

};

card1.addEventListener('click',()=>{
    remplissageTableau('ESITECH');
})
card2.addEventListener('click',()=>{
    remplissageTableau('MERCURE');

})
card3.addEventListener('click',()=>{
    remplissageTableau('TRANSPORT');

})
window.addEventListener('load',()=>{
    remplissageTableau('ESITECH');
})



// Fonction pour remplir le tableau avec les données du localStorage
function remplissageTableau(department) {
    const tableau = document.querySelector('.recent-orders tbody');

    tableau.innerHTML = '';

    // Récupérer les données du localStorage
    const data = JSON.parse(localStorage.getItem(`stockageEtudiant${department}`)) || [];

    // Remplir le tableau avec les données filtrées
    data.forEach(item => {
        const row = document.createElement('tr');

        // Ajouter les cellules du tableau
        row.innerHTML = `
            <td>${item.nom}</td>
            <td>${item.prenom}</td>
            <td>${item.niveau}</td>
            <td>${item.matiere}</td>
            <td class="${item.statut === 'present' ? 'text-green' : item.statut === 'absent' ? 'text-red' : 'text-yellow'}">${item.statut}</td>
            <td>${item.date}</td>
        `;

        // Ajouter la ligne au tableau
        tableau.appendChild(row);
    });
}

// Fonction pour gérer le changement de département
document.getElementById('choixDepartement').addEventListener('change', function() {
    const selectedDepartment = this.value;
    remplissageTableau(selectedDepartment);
});

// Appel initial pour remplir le tableau avec le département par défaut
window.onload = function() {
    const defaultDepartment = document.getElementById('choixDepartement').value;
    remplissageTableau(defaultDepartment);
};







openSidebar.addEventListener('click', openSidebarFunction);
closeSidebar.addEventListener('click', closeSidebarFunction);
toggleTheme.addEventListener('click', changeTheme);

function openSidebarFunction() {
    sidebar.style.left = '0%';
}

function closeSidebarFunction() {
    sidebar.style.left = '-100%';
}

function changeTheme() {
    if (body.classList.contains('dark-mode')) {
        lightMode();
    } else if (!body.classList.contains('dark-mode')) {
        darkMode();
    }
}

inputFields.forEach((e, i) => {
    let val = parseInt(e.textContent);
    console.log(val);
    let circle = document.getElementById(`circle${i + 1}`);
    let r = circle.getAttribute('r');
    let circ = Math.PI * 2 * r;
    let counter = 0;
    let fillValue = (circ * (100 - val)) / 100;
    setInterval(() => {
        if (counter === val) {
            clearInterval();
        } else {
            counter += 1;
            e.innerText = counter + '%';
            circle.style.strokeDashoffset = fillValue;
        }
    }, 1000 / val);
});

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode();
}

function darkMode() {
    body.classList.add('dark-mode');
    light.classList.remove('active');
    dark.classList.add('active');
}

function lightMode() {
    body.classList.remove('dark-mode');
    dark.classList.remove('active');
    light.classList.add('active');
}


seDeconnecter.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href='Connexion.html'
});