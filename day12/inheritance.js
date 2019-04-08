'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*    
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    constructor(firstName, lastName, identification, testScores) {

        super(firstName, lastName, identification);
        this.testScores = testScores;
    }
    /*    
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate() {
        var testScoresAvg = (this.testScores.reduce(function (a, b) { return a + b; })) / this.testScores.length;

        if (testScoresAvg < 40) {
            return 'T';
        } else if (testScoresAvg >= 40 && testScoresAvg < 55) {
            return 'D';
        } else if (testScoresAvg >= 55 && testScoresAvg < 70) {
            return 'P';
        } else if (testScoresAvg >= 70 && testScoresAvg < 80) {
            return 'A';
        } else if (testScoresAvg >= 80 && testScoresAvg < 90) {
            return 'E';
        } else if (testScoresAvg >= 90 && testScoresAvg <= 100) {
            return 'O';
        }
    }
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}
