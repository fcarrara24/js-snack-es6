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
        biciMinore = element;
        pesoMinore = element.peso;
    }

});

biciMinore.printBike();

