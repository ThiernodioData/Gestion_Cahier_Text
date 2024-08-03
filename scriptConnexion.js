const container1 = document.getElementById('container1');
const btnLogin = document.getElementById('signIn');
const btnSign = document.getElementById('signUp');

const inputNomNewCompt=document.getElementById('nomCreer');
const inputEmailNewCompt=document.getElementById('emailCreer');
const inputPwdNewCompt=document.getElementById('pwdCreer');
const btnNewCompt=document.getElementById('btnCreerCompte1');

const inputEmailCompt=document.getElementById('emailConnexion');
const inputPwdCompt=document.getElementById('pwdConnexion');
const btnConnexion=document.getElementById('btnConexion1');


btnLogin.addEventListener('click', () => {
    container1.classList.remove('panel-active');
});

btnSign.addEventListener('click', () => {
    container1.classList.add('panel-active');
});

btnConnexion.addEventListener('click',(event)=>{
    event.preventDefault();
    if(inputEmailCompt.value=="admin@sup.sn"&&inputPwdCompt.value==1234){
        window.location.href='admin.html'
    }
    if(inputEmailCompt.value=="prof@sup.sn"&&inputPwdCompt.value==1234){
        window.location.href='adminProf.html'
    }

    inputEmailCompt.value="";
    inputPwdCompt.value="";
});

btnNewCompt.addEventListener('click',(event)=>{
    event.preventDefault();
    if(inputEmailNewCompt.value==""&&inputPwdNewCompt.value ==""&&inputNomNewCompt.value==""){
        inputEmailNewCompt.value="";
        inputPwdNewCompt.value="";
        inputNomNewCompt.value="";
    }

    if(inputEmailNewCompt.value=="user@sup.sn"&&inputPwdNewCompt.value==1234&&inputNomNewCompt.value=="user"){
        window.location.href='adminUser.html';

    }

    inputEmailNewCompt.value="";
    inputPwdNewCompt.value="";
    inputNomNewCompt.value="";
    
})


