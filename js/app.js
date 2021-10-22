let schedaProdotto = {
    nome: 'Maglia', 
    peso: 20,
    prezzo: 30.00,
    sconto: 18.00,
    descrizione: 'Questa è la descrizione della maglia',
    codice: '12fhdhe',
    disponibile: false,
    colore: ['Giallo', 'verde', {blue1: 'blue', blue2: 'altro blue'}],
    promozione: {                                   // oppure 'promozione-giornaliera'
        dataInizio: '16/12/2018',
        dataFine: '26/12/2018'
    },
    getColore: function(qualeColore) {              
        return schedaProdotto.colore[qualeColore];
    },
    getSconto: function() {
        return this.prezzo = this.sconto;
    } 
}

console.log ( schedaProdotto['nome'] );             
console.log ( schedaProdotto['prezzo']);
console.log ( schedaProdotto.disponibile ); // sintassi alternativa alla precedente
console.log ( schedaProdotto.colore[2].blue1 );
console.log ( schedaProdotto.getColore(0) ); 

schedaProdotto['stampa'] = ['Cane', 'Lontra', 'Gufo', 'etc']; // schedaProdotto.stampa come sintassi alternativa                                                             
console.log (schedaProdotto);                                 // si possono riservare le [] per l'inserimento di caratteri speciali

/////////////////////////////

let stringaDue = "calzOlaio";

let copia = stringaDue.toLowerCase();

console.log( stringaDue );
console.log( copia ); // mi restituisce il risultato del metodo applicato alla stringa