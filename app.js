let friends = ['Victor', 'Jimmy', 'Seth', 'Bianca', 'Chris'];

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);

    for (let j = 99; j > 0; j--) {

        if (j === 1) {
            console.log(j + ' line of code in the file, ' + j + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file');

        } else {
            console.log(j + ' lines of code in the file, ' + j + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file');
        }
    }
}