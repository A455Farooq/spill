



let tilfeldignummer = Math.floor(Math.random() * 100) + 1;

const inntastingFelt = document.querySelector('.tast_nummer');
const btn_for_å_sende = document.querySelector('.btn_sendTallet');

const LavEllerHøyt = document.querySelector('.LavEllerHøyt');
const Du_tastet = document.querySelector('.Du_tastet');
const siste_resultat = document.querySelector('.siste_resultat');
const Buzzi = document.querySelector('Buzzi');

let antallforsøk = 1;
let resettbtn;




function operationell(){

const inntastetverdi = Number(inntastingFelt.value);
if(antallforsøk === 1){
    Du_tastet.textContent = 'Du tastet tallet...!'
}

Du_tastet.textContent = `${Du_tastet.textContent} + = ${inntastetverdi}`

if(inntastetverdi === tilfeldignummer){
    siste_resultat.textContent = 'VELDIG BRA DU VANT '
    siste_resultat.style.backgroundColor = 'yellowgreen';
    LavEllerHøyt.textContent = '';

}else if(antallforsøk === 10){
  siste_resultat.textContent = 'Du har brukte opp alle forsøk = GAME OVER'
  siste_resultat.style.backgroundColor = 'red';
  siste_resultat.style.color = 'white'
  LavEllerHøyt.textContent = '';
}else{
    siste_resultat.textContent = 'Du tastet feil !!!'
}if(inntastetverdi < tilfeldignummer){
    LavEllerHøyt.textContent = 'FOR LAVT'
    LavEllerHøyt.style.backgroundColor = 'pink'
}else if(inntastetverdi > tilfeldignummer){
    LavEllerHøyt.textContent = 'FOR HØYT'
    LavEllerHøyt.style.backgroundColor = 'pink';

}


antallforsøk++;
inntastingFelt.value = '';
inntastingFelt.focus();

}


btn_for_å_sende.addEventListener('click',operationell);




