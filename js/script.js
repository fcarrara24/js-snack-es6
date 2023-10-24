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