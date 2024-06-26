// Schreibe ein Programm, mit einer Funktion “aufgabe1”. 
// Diese Funktion nimmt einen String entgegen und gibt diesen 
// rückwärts in der Konsole aus. 

function aufgabe1() {
    
    let eingabe;

    while (true) {

        eingabe = prompt("Gib einen String ein:");

        if (/^[a-zA-Z]+$/.test(eingabe)) {
            console.log(eingabe.split("").reverse().join(""));

        } else {
            console.log("Du musst Buchstaben eingeben.");
        }
    }
}

console.log(aufgabe1());


// Die Funktion aufgabe1() erwartet eine Benutzereingabe.

// Eine Endlosschleife (while (true) { ... }) beginnt, 

// Der Benutzer wird aufgefordert, einen INPUT einzugeben (prompt()).

// Die Eingabe wird überprüft, um sicherzustellen, 
// dass sie nur aus Buchstaben besteht (/^[a-zA-Z]+$/).

// Wenn die Eingabe nur aus Buchstaben besteht, 
// wird sie umgekehrt und der umgekehrte String wird 
// zurückgegeben (return eingabe.split("").reverse().join("");).

// split(""): teilt die Zeichenfolge in einzelne 
// Zeichen auf und erstellt daraus ein Array.

// reverse(): Dies dreht die Reihenfolge der 
// Elemente im Array um.

// join(""): fügt die umgekehrten 
// Zeichen wieder zu einer einzigen Zeichenfolge zusammen.

// Wenn die Eingabe nicht nur aus Buchstaben besteht,
// wird eine Fehlermeldung ausgegeben,  
// und die Schleife wird erneut durchlaufen.

// Die Schleife wird solange wiederholt, bis eine gültige 
// Eingabe erfolgt.


// der umgekehrte String 
// (oder undefined, wenn die Schleife endlos läuft) 
// in der Konsole ausgegeben (console.log(aufgabe1());).