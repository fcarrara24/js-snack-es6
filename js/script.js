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


//////////////
//  SNACK 2 //
//////////////

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
console.log('//////////////////////////')

const newestBestStudents = bestStudents.filter((young) => {
    if (young.Id > 120) {
        return young;
    }
})

newestBestStudents.forEach((student) => {
    console.log(student)
});
console.log('//////////////////////////')