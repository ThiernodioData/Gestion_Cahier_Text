const container = document.getElementById('container');
const setup = document.getElementById('setup');
const inputNumStud = document.getElementById('numStudents');
const btnSaisiUser = document.getElementById('enterStudents');
const btnRandomUser = document.getElementById('usePredefinedList');
const contentForm = document.getElementById('attendanceForm');
const form = document.getElementById('studentsForm');
// const btnPdf = document.getElementById('generatePdf');
const small = document.getElementById('small');
const choixDepartement = document.getElementById('choixDepartement');
const choixNiveau = document.getElementById('choixNiveau');
const choixMatiere = document.getElementById('choixMatiere');
const logo = document.getElementById('logo');




contentForm.classList.add('hide');

btnSaisiUser.addEventListener('click', saisiUser);

form.classList.add('order');


logo.addEventListener('click', () => {
    window.location.reload(); // quand on clique, on actualise la page
});


function dateToDay() {
    let t = new Date();
    let date = t.toLocaleDateString();
    return date;
}

let listEtudiant = [];

function saisiUser() {
    let inputValue = inputNumStud.value;
    if (inputValue === "") {
        small.innerText = "Le champ nombre d'étudiants ne peut pas être vide";
        small.style.color = "red";
    } else {
        small.innerText = "";
        setup.classList.add('hide');
        contentForm.classList.remove('hide');

        let currentDate = new Date();
        let dateStr = currentDate.toLocaleDateString();

        form.innerHTML = `
            <h4>Département: ${choixDepartement.value}</h4>
            <h4>Niveau: ${choixNiveau.value}</h4>
            <h4>Matière: ${choixMatiere.value}</h4>
            <h4>Date: ${dateStr}</h4>
        `;

        for (let i = 0; i < inputValue; i++) {
            let studentDiv = document.createElement('div');
            studentDiv.classList.add('student-input');

            studentDiv.innerHTML = `
                <h2>Veuillez saisir les informations pour l'étudiant N°: ${i + 1}</h2>
                <label for="nom${i}">Nom:</label>
                <input type="text" id="nom${i}" name="nom${i}" required>
                <label for="prenom${i}">Prénom:</label>
                <input type="text" id="prenom${i}" name="prenom${i}" required>
            `;
            
            form.appendChild(studentDiv);
        }

        let submitButton = document.createElement('button');
        submitButton.innerText = 'Enregistrer les étudiants';
        submitButton.type = 'button'; 
        submitButton.classList.add('new-product');
        submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            saveStudents(inputValue);
        });

        form.appendChild(submitButton);
    }
}

function saveStudents(numStudents) {
    listEtudiant = [];

    for (let i = 0; i < numStudents; i++) {
        let nom = document.getElementById(`nom${i}`).value;
        let prenom = document.getElementById(`prenom${i}`).value;
        listEtudiant.push({ nom, prenom });
    }
    
    console.log(listEtudiant); 
    createAttendanceForm();
}




// Utilisation de la liste predefinie
const listEtudPredefinie = [
    { nom: 'Diallo', prenom: 'Amadou Tidiane' },
    { nom: 'Souma', prenom: 'Mamadou Tidiane' },
    { nom: 'Bangoura', prenom: 'Thierno Tidiane' },
    { nom: 'Bah', prenom: 'Salam' },
    { nom: 'Toure', prenom: 'Mamadou Salam' },
    { nom: 'Sall', prenom: 'Thierno Salam' },
    { nom: 'Fall', prenom: 'Mariame Salam' },
    { nom: 'Tall', prenom: 'Aguilou' },
    { nom: 'Cisse', prenom: 'Thierno Aguilou' },
    { nom: 'Gorge', prenom: 'Mamadou Aguilou' },
    { nom: 'Gorge', prenom: 'Orwel' },
    { nom: 'Diallo', prenom: 'Telli' },
    { nom: 'Diallo', prenom: 'Alpha Yaya' }
];



btnRandomUser.addEventListener('click', randomUser);

function randomUser() {
    setup.classList.add('hide');
    contentForm.classList.remove('hide');

    form.innerHTML = ''; 

    form.innerHTML = `
        <h4>Département: ${choixDepartement.value}</h4>
        <h4>Niveau: ${choixNiveau.value}</h4>
        <h4>Matière: ${choixMatiere.value}</h4>
        <h4>Date: ${dateToDay()}</h4>
    `;

    listEtudiant = listEtudPredefinie;

    listEtudiant.forEach((etudiant, index) => {
        const studentDiv = document.createElement('div');
        studentDiv.classList.add('student');

        studentDiv.innerHTML = `
            <label class="lb1">${etudiant.nom} ${etudiant.prenom}</label>
            <label class="lb2"><input class="ipt1" type="radio" name="student${index}" value="present" required> Présent</label>
            <label class="lb3"><input class="ipt2" type="radio" name="student${index}" value="absent" required> Absent</label>
            <label class="lb4"><input class="ipt3" type="radio" name="student${index}" value="absentJustified" required> Absent Justifié</label>
        `;

        form.appendChild(studentDiv);
    });

    let btnPdf = document.createElement('button');
    btnPdf.classList.add('generatePdf', 'new-product');
    btnPdf.innerHTML = "Générer le PDF";
    btnPdf.addEventListener('click', generatePDF);
    form.appendChild(btnPdf);
    form.classList.add('order')
}





function createAttendanceForm() {
    form.innerHTML = ''; 
    form.innerHTML = `
        <h4>Département: ${choixDepartement.value}</h4>
        <h4>Niveau: ${choixNiveau.value}</h4>
        <h4>Matière: ${choixMatiere.value}</h4>
        <h4>Date: ${dateToDay()}</h4>
    `;

    listEtudiant.forEach((etudiant, index) => {
        const studentDiv = document.createElement('div');
        studentDiv.classList.add('student');

        studentDiv.innerHTML = `
            <label class="lb1">${etudiant.nom} ${etudiant.prenom}</label>
            <label class="lb2"><input class="ipt1" type="radio" name="student${index}" value="present" required> Présent</label>
            <label class="lb3"><input class="ipt2" type="radio" name="student${index}" value="absent" required> Absent</label>
            <label class="lb4"><input class="ipt3" type="radio" name="student${index}" value="absentJustified" required> Absent Justifié</label>
        `;

        form.appendChild(studentDiv);
    });

    let btnPdf = document.createElement('button');
    btnPdf.classList.add('generatePdf', 'new-product');
    btnPdf.innerHTML = "Générer le PDF";
    btnPdf.addEventListener('click', generatePDF);
    setTimeout(()=>{
    form.appendChild(btnPdf);

    },3000)    
    form.classList.add('order')
}



function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    let date = new Date();
    let today = date.toLocaleDateString();

    doc.text("Présence des Étudiants", 70, 10);
    doc.text(`Département: ${choixDepartement.value}`, 10, 20);
    doc.text(`Niveau: ${choixNiveau.value}`, 10, 30);
    doc.text(`Matière: ${choixMatiere.value}`, 10, 40);
    doc.text(`Date: ${today}`, 10, 50);

    const studentDivs = form.querySelectorAll('.student');
    let y = 60;

    let department = choixDepartement.value;
    let storageKey = `stockageEtudiant${department}`;
    let storedData = JSON.parse(localStorage.getItem(storageKey)) || [];

    studentDivs.forEach((div, index) => {
        const studentName = div.querySelector('.lb1').innerText;
        const status = div.querySelector('input[type="radio"]:checked').value;

        doc.text(`${studentName}: ${status}`, 10, y);
        y += 10;

        let [nom, prenom] = studentName.split(' ');

        storedData.push({
            nom,
            prenom,
            niveau: choixNiveau.value,
            matiere: choixMatiere.value,
            statut: status,
            date: today
        });
    });

    localStorage.setItem(storageKey, JSON.stringify(storedData));
    console.log(storedData);
    doc.save('presence.pdf');
    addTableauBord();
    window.location.reload();
}

