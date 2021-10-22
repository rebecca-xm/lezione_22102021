const rubrica = [];

function subscribe(){
    let dati = prompt("Inserisci i tuoi date separati da una virgola");
    let input = dati.split(',');
    
    
    let newUser = userCreation(input);
    addUser(newUser);
    console.log(rubrica)
}


function userCreation(arrData){    
    let user = {
        nome: arrData[0],
        cognome: arrData[1],
        numero: arrData[2],
        email: arrData[3]
    }
    return user;

}


function addUser(user){
        rubrica.push(user)
}