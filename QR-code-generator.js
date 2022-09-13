var loop = true
var isComplete = false
var alwaseBlack = [
    1, 2, 3, 4, 5, 6, 7, 19, 20, 21, 22, 23, 24, 25,
    26, 32, 44, 50,
    51, 53, 54, 55, 57, 69, 71, 72, 73, 75,
    76, 78, 79, 80, 82, 94, 96, 97, 98, 100,
    101, 103, 104, 105, 107, 119, 121, 122, 123, 125,
    126, 132, 144, 150,
    151, 152, 153, 154, 155, 156, 157, 169, 170, 171, 172, 173, 174, 175,
    451, 452, 453, 454, 455, 456, 457,
    476, 482,
    501, 503, 504, 505, 507,
    526, 528, 529, 530, 532,
    551, 553, 554, 555, 557,
    576, 582,
    601, 602, 603, 604, 605, 606, 607,
    417, 418, 419, 420, 421,
    442, 446,
    467, 469, 471,
    492, 496,
    517, 518, 519, 520, 521
]
var alwaseWhite = [
    8, 18,
    27, 28, 29, 30, 31, 33, 43, 45, 46, 47, 48, 49,
    52, 56, 58, 68, 70, 74,
    77, 81, 83, 93, 95, 99,
    102, 106, 108, 118, 120, 124,
    127, 128, 129, 130, 131, 133, 143, 145, 146, 147, 148, 149,
    158, 168,
    176, 177, 178, 179, 180, 181, 182, 183, 193, 194, 195, 196, 197, 198, 199, 200,
    426, 427, 428, 429, 430, 431, 432, 433,
    458,
    477, 478, 479, 480, 481, 483,
    502, 506, 508,
    527, 531, 533,
    552, 556, 558,
    577, 578, 579, 580, 581, 583,
    608,
    443, 444, 445,
    468, 470,
    493, 494, 495
]

function generate() {
    var num = 1
    if (isComplete === false) {
        while (num <= 625) {
            var coin = Math.round( Math.random() )
            if (alwaseBlack.includes(num)) {
                if (document.querySelector('#accept').checked) {
                    var randomColor = Math.floor(Math.random()*16777215).toString(16);
                    document.getElementById(num).style.backgroundColor = "#" + randomColor
                }
                else {
                    document.getElementById(num).style.backgroundColor = "black"
                }
            }
            else if (alwaseWhite.includes(num)) {
                document.getElementById(num).style.backgroundColor = document.body.style.backgroundColor
            }
            else {
                if (document.querySelector('#accept').checked) {
                    var randomColor = Math.floor(Math.random()*16777215).toString(16);
                    if (coin === 1) { document.getElementById(num).style.backgroundColor = "#" + randomColor }
                }
                else {
                    if (coin === 1) { document.getElementById(num).style.backgroundColor = "black" }
                }
            }
            num ++
            if (num === 625) {
                isComplete = true
            }
        }
    }
    else {
        while (num <= 625) {
            if (alwaseBlack.includes(num)) {
                document.getElementById(num).style.backgroundColor = "black"
            }
            else {
                document.getElementById(num).style.backgroundColor = document.body.style.backgroundColor
            }
            isComplete = false
            num ++
        }
        generate()
    }
}

function generateRandom() {
    var Rnum = 1
    if (isComplete === false) {
        while (Rnum <= 625) {
            var coin = Math.round( Math.random() )
            if (coin === 1) {
                if (document.querySelector('#accept').checked) {
                    var randomColor = Math.floor(Math.random()*16777215).toString(16);
                    document.getElementById(Rnum).style.backgroundColor = "#" + randomColor
                }
                else {
                    document.getElementById(Rnum).style.backgroundColor = "black"
                }
            }
            Rnum ++
            if (Rnum === 625) {
                isComplete = true
            }
        }
    }
    else {
        while (Rnum <= 625) {
            document.getElementById(Rnum).style.backgroundColor = document.body.style.backgroundColor
            isComplete = false
            Rnum ++
        }
        generateRandom()
    }
}

var speed = 100

function loop1() {
    if (loop === true) {
        generateRandom()
        setTimeout(function(){loop2()}, speed)
    }
}

function loop2() {
    if (loop === true) {
        generateRandom()
        setTimeout(function(){loop1()}, speed)
    }
}

loop1()

function mouseUp() {
    if (loop === false) {
        loop = true
        loop1()
    }
    else {
        loop = false
        generate()
    }
}
function mouseDown() {
    if (loop === false) {
        loop = true
        loop1()
    }
    else {
        loop = false
        generate()
    }
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    speed = this.value;
    output.innerHTML = this.value;
}
addEventListener("touchstart", (event) => {
    mouseDown()
});
addEventListener("touchend", (event) => {
    mouseUp()
});