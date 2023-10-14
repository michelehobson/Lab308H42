///////////////////
// EASY GOING
///////////////////
for (let a = 1; a < 21; a++) {
    console.log(a);
}

///////////////////
// GET EVEN 
///////////////////
for (let b = 0; b <= 200; b++) {
    if (b % 2 === 0) {
        console.log(b);
    }
}

///////////////////
// FIZZ BUZZ
///////////////////
for (let c = 1; c <= 100; c++) {
    if (c % 3 === 0 && c % 5 === 0) {
        console.log('FizzBuzz');
    } else if (c % 3 === 0) {
        console.log('Fizz');
    } else if (c % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(c);
    }
}

///////////////////
// WILD WILD LIFE
///////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] += 1;
wolfy[3] = 'Gotham City';
dart[0] += ' Hawkins'
wolfy.shift();
wolfy.unshift('Gameboy')
console.log(wolfy + '\n' + sharky + '\n' + plantee + '\n' + porgee + '\n' + dart);

///////////////////
// Yell at the Ninja Turtles
///////////////////
let turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for (const ninja of turtles) {
    console.log(ninja.toUpperCase());
}

///////////////////
// Methods, Revisited
///////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf('Titanic'));
favMovies.sort();
// console.log('\nSORT: ' + favMovies); // Yes, it is destructive
favMovies.pop();
favMovies.push('Guardians of the Galaxy');
favMovies.reverse();
favMovies.shift();
favMovies.unshift('The Green Mile');
favMovies.splice(favMovies.indexOf('Django Unchained'), 1, 'Avatar')
// console.log('\nSPLICE: ' + favMovies); // Yes, it is destructive
const sliced = favMovies.slice(favMovies.length / 2, favMovies.length);
console.log('\nSLICED: ' + sliced) // No, slice is nondestructive
console.log('\nFINAL RESULTS: ' + favMovies);
console.log(favMovies.indexOf('Fast and Furious - It\'s still there!'));
// IT WASN'T REMOVED, IT RETURNED 14. HOWEVER, IF IT HAD BEEN, I BELIEVE IT WOULD HAVE RETURNED -1
// IF I REMEMBER CORRECTLY, USING const ON AN ARRAY MEANS YOU CAN'T CHANGE THE NAME OF THE ARRAY, BUT HAS NO IMPACT ON ITS CONTENTS

///////////////////
// Where is Waldo
///////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]];

// const whereIsWaldo = [
//                        ["Timmy", "Frank"], 
//                        ["Lucinda", "Jacc", "No One", "Snoop"], 
//                        ["Petunia", ["Baked Goods", "Waldo"]]
//                      ];
// console.log('1: ' + whereIsWaldo); 
whereIsWaldo.splice(whereIsWaldo.indexOf('Eggbert'), 1);
whereIsWaldo[1][2] = 'No One';
// console.log('2: ' + whereIsWaldo);  
// console.log(whereIsWaldo[2][[0][0]]) LOGS Petunia
// console.log(whereIsWaldo[2][[1][0]]) LOGS [ 'Baked Goods', 'Waldo' ]
// console.log(whereIsWaldo[2][1].indexOf('Waldo')) LOGS 1
console.log(whereIsWaldo[2][1][1])
               
///////////////////
// Excited Kitten
///////////////////
// for (let d = 1; d <= 40; d++) {   
//     if (d <= 20) {
//         console.log(d + 'Love me, pet me! HSSSSSS!');
//     } else if (d % 2 === 0) {  THIS DIDN'T SATISFY THE REQUIREMENT BECAUSE MY LOOP ITERATES 40 TIMES AND IT ONLY PRINTS 10 TIMES.
//         console.log(d + msg[(Math.floor(Math.random() * 3))]);
//     }
// }
let msg = ['...human... why you taking pictures of me...?', '...the catnip made me do it...', '...why does the red dot always get away...?']
let ctr = 0;
for (let d = 1; d <= 20; d++) {
    console.log(d + 'Love me, pet me! HSSSSSS!');
    if (d % 2 === 0) {
        ctr++;
    }
}
while (ctr >= 0) {
    console.log(ctr + msg[(Math.floor(Math.random() * 3))]);
    ctr--;
}

///////////////////
// Find the Median
///////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
console.log(Math.floor(nums.length / 2));

///////////////////
// Hungry for More?
///////////////////

///////////////////
// Alien Attire
///////////////////

///////////////////
// Dress Us Up
///////////////////

///////////////////
// Dirty Laundry
///////////////////

///////////////////
// Inventory
///////////////////