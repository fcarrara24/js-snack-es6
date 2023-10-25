//starter array with guess
const guests = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']

//variable storing the viptable
const vipTable = 'Tavolo Vip'

//creating with a map a new array containing the guests, table and position 
const guestsInfo = guests.map((singelGuest, position) => {
    return {
        tableName: vipTable,
        guestName: guests[position],
        place: position + 1
    }
});

console.group('milestone1')

console.log(guestsInfo);

//8.46

guestsInfo.forEach(singleInfo => {
    console.group(singleInfo.guestName);
    console.log(`
        tableName: ${singleInfo.tableName}
        guestsName: ${singleInfo.guestName}
        place: ${singleInfo.place}
    `)
    console.groupEnd(singleInfo)
});
console.groupEnd('milestone1')


//////////////
//  SNACK 2 //
//////////////

console.group('milestone2')

const studentList = [
    {
        Id: "213",
        Name: "Marco Della Rovere",
        Grades: "78",
    },
    {
        Id: "110",
        Name: "Paola Cortellassa",
        Grades: "96",
    },
    {
        Id: "68",
        Name: "Tizio caio",
        Grades: "68",
    },
    {
        Id: "567",
        Name: "Mario Monti",
        Grades: "70",
    },
    {
        Id: "789",
        Name: "Fiumi Laghi",
        Grades: "58",
    },
    {
        Id: "432",
        Name: "Prati a Volontà",
        Grades: "96",
    },
    {
        Id: "89",
        Name: "Fiori nei giardini",
        Grades: "69",
    },
    {
        Id: "77",
        Name: "Che Varieta",
        Grades: "77",
    },
]

// aula 

const aula = studentList.map((student) => {
    return student.Name.toUpperCase();
});

aula.forEach((student) => {
    console.log(student)
});


// best group 
const bestStudents = studentList.filter((specialStudent) => {
    if (specialStudent.Grades > 70) {
        return specialStudent;
    }
});

bestStudents.forEach((student) => {
    console.log(student)
});

console.log(``)

const newestBestStudents = bestStudents.filter((young) => {
    if (young.Id > 120) {
        return young;
    }
})

newestBestStudents.forEach((student) => {
    console.log(student)
});

console.groupEnd('milestone2')


//////////////
// j SNACK 1//
//////////////

const automobili = [
    {
        nome: 'pippo',
        modello: 2,
        alimentazione: 'benzina'
    },

    {
        nome: 'pluto',
        modello: 2,
        alimentazione: 'benzina'
    },

    {
        nome: 'minnie',
        modello: 2,
        alimentazione: 'disel'
    },

    {
        nome: 'banda bassotti',
        modello: 2,
        alimentazione: 'elettrico'
    },

    {
        nome: 'paperoga',
        modello: 2,
        alimentazione: 'benzina'
    },

    {
        nome: 'gamba di legno',
        modello: 2,
        alimentazione: 'idrogeno'
    }


];

const autoBenzina = automobili.filter(benzina => { if (benzina.alimentazione === 'benzina') { return benzina } })
const autoDisel = automobili.filter(disel => { if (disel.alimentazione === 'disel') { return disel } })
const miste = automobili.filter(disel => { if (disel.alimentazione !== 'disel' && disel.alimentazione !== 'benzina') { return disel } })

autoBenzina.forEach((auto) => {
    console.log('benzina ' + auto.nome)
})
console.log()

autoDisel.forEach((auto) => {
    console.log('disel ' + auto.nome)
})
console.log()
miste.forEach((auto) => {
    console.log('miste ' + auto.nome)
})

// jsnack 2
// A partire da un array di stringhe, crea un secondo array formattando le
// stringhe del primo array in minuscolo e con l’iniziale maiuscola.


const arrayToCapitalize = ['pippo', 'PLUTO', 'Paperino']
const arrayCapitalized = arrayToCapitalize.map((string) => {
    let outstring = [];
    outstring.push(string[0].toLocaleUpperCase());

    outstring += (string.slice(1).toLowerCase());


    return outstring;
})

console.log(arrayCapitalized)

// jsnack 3
// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// Crea un nuovo array con la lista dei mammiferi.

const animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
];


const arrayMammiferi = animali.filter((mammifero) => {
    if (mammifero.classe === 'mammiferi') {
        return mammifero;
    }
})

// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il
// nome e cognome e l’indicazione se può guidare, in base all’età.

const persona = [
    {
        nome: 'tizio',
        cognome: 'caio',
        eta: 69
    },
    {
        nome: 'pietro',
        cognome: 'piedi',
        eta: 420
    },
    {
        nome: 'fernando',
        cognome: 'orlando',
        eta: 12
    },
];

const personaAbilitata = persona.map((persona) => {
    const messaggio = (persona.eta >= 18) ? 'puoi guidare' : 'non puoi guidare'
    return {
        nome: persona.nome,
        cognome: persona.cognome,
        eta: persona.eta,
        messaggio: messaggio
    }

})

console.log(personaAbilitata)