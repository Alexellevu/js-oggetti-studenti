//Istruzioni:

//Creare un oggetto che descriva uno studente, con le seguenti proprietà:
//nome,
//cognome
//età.
var studente = {nome:"Alex", cognome:"lv", età:"37"};
//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for(var key in studente){
    console.log(key, studente[key]);
}
 
//Creare un array di oggetti di studenti.
 var studenti = [
     studente1 = {nome:"Alex", cognome:"lv", età:"37"},
     studente2 = {nome:"Saul", cognome:"Alvarez", età:"30"},
     studente3 = {nome:"Ivan", cognome:"Zucco", età:"26"},
     studente4 = {nome:"Daniele", cognome:"Scardina", età:"29"}
    ];


//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for(var i = 0; i <studenti.length ; i++){
    console.log(studenti[i].nome + ' ' + studenti[i].cognome);
}

//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.



var nuovoStudente ={nome: prompt('inserisci un nome'), cognome :prompt('inserisci il cognome'), età:prompt("inserisci l'età") }
studenti.push(nuovoStudenterr);

console.log(studenti);