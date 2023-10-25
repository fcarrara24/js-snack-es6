// snack 3

listaNomi = ['MarcaCostosa', 'MarcaMedia', 'MarcaEconomica']
listaPeso = [10, 20, 25]

class Bicicletta {
    nome
    peso
    constructor(nome, peso) {
        this.nome = nome;
        this.peso = peso
    }
    printBike() {
        console.log(`nome: ${this.nome},
peso: ${this.peso}
                `)
    }
}

//creazione lista biciclette

const arrayBici = listaNomi.map((nome, indexNome) => new Bicicletta(nome, listaPeso[indexNome]));

//selecting less weight bike
let pesoMinore = 1000000
let biciMinore;
arrayBici.forEach(element => {

    if (pesoMinore > element.peso) {
        const { weight } = element
        biciMinore = element;
        pesoMinore = weight;
    }

});


biciMinore.printBike();

//snack 4

class Squadra {
    nome;
    puntiFatti = 0;
    falliSubiti = 0;
    constructor(nome) {
        this.nome = nome
    }
    assignRnd() {
        this.puntiFatti = rndInt(0, 10);
        this.falliSubiti = rndInt(0, 10);
    }
    returnNameFaults() {
        return [this.nome, this.falliSubiti]
    }
}

function rndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const arraySquadre = ['LAZIO', 'ROMA', 'JUVE', 'NAPOLI', 'ATALANTA', 'FIORENTINA', 'FROSINONE', 'MILAN', 'TORINO']

//creazione di array di dquaddre con partuta
const arraySquadreEPartite = arraySquadre.map(nome => new Squadra(nome));



//assegnazione punti a ciascun componente
arraySquadreEPartite.forEach(squadra => {
    squadra.assignRnd() // assigninig random points
})



const nomeEFalli = arraySquadreEPartite.map(element => element.returnNameFaults());

//ritornare il nome e i falli subiti
console.log(nomeEFalli)


//bonus: printing to screen

function printToScreenFirst() {
    document.getElementById('snack1').innerHTML = `<div style="min-width: 200px;">bicicletta: ${biciMinore.nome}</div> <div>peso: ${biciMinore.peso}</div>`
}
printToScreenFirst();




function printToScreenSecond() {

    let toAppend = ``;
    nomeEFalli.forEach((element) => {
        toAppend += `<div style="min-width: 200px;">Squadra: ${element[0]}</div> <div>falli: ${element[1]}</div>`
    });
    document.getElementById('snack2').innerHTML = toAppend;
}
printToScreenSecond();
