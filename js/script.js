/*
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
2. Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
3. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
_______________________________________________________________________________________________________________________________________________________*/

// ES. 1
const studente = {
    nome: 'Gianni',
    cognome: 'Zanchi',
    eta: 30
};

for ( let key in studente ) {
    console.log ( studente[key] );
}

// ES. 2
const studenti = [
    {
        nome: 'Luca',
        cognome: 'Mandelli',
        eta: 30
    },
    {
        nome: 'Antonella',
        cognome: 'Bruni',
        eta: 25
    },
    {
        nome: 'Mario',
        cognome: 'Ferrari',
        eta: 27
    }
];

for ( i=0; i < studenti.length; i++) {
    const theseStudents = studenti[i];
       
    console.log ( theseStudents['nome'] );
    console.log ( theseStudents['cognome'] );
}


// ES. 3 
const newName = prompt ('Inserire nome studente');
const newSurname = prompt ('Inserire cognome');
const newAge = parseInt ( prompt ('Inserire età') );

const newStudent = {
    nome: newName,
    cognome: newSurname,
    eta: newAge
}

studenti.push(newStudent);
console.log(studenti);