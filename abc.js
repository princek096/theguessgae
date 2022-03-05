var no = 6;
var colors = getc(no);

function colorchg(z) {
    for (var i = 0; i < block.length; i++) {
        block[i].style.background = z;
    }
}

function rndmcolor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function getc(noc) {
    var arr = []
    for (var i = 0; i < noc; i++) {
        arr.push(randomColor())
    }
    return arr;
}
var tgcolor = rndmcolor();

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
var block = document.querySelectorAll(".block");

var easyBtn = document.querySelector("#esybtn");
easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("lvl");
    easyBtn.classList.add("lvl");
    no = 3;
    colors = getc(no);
    tgcolor = rndmcolor();
    document.querySelector("#ques").textContent = tgcolor;
    for (var i = 0; i < block.length; i++) {
        if (colors[i]) {
            block[i].style.background = colors[i];
        } else {
            block[i].style.display = "none";
        }
    }
});

var hardBtn = document.querySelector("#hdbtn");
hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("lvl");
    hardBtn.classList.add("lvl");
    no = 6;
    colors = getc(no);
    tgcolor = rndmcolor();
    document.querySelector("#ques").textContent = tgcolor;
    for (var i = 0; i < block.length; i++) {
        block[i].style.backgroundColor = colors[i];
        block[i].style.display = "block";
    }
});

var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function() {
    colors = getc(no);
    tgcolor = rndmcolor();
    document.querySelector("#ques").textContent = tgcolor;
    resetButton.textContent = "NEW COLORS";
    document.querySelector("#message").textContent = "";
    for (var i = 0; i < block.length; i++) {
        block[i].style.backgroundColor = colors[i];
    }
    document.querySelector("h1").style.background = "#82916A";
})

document.querySelector("#ques").textContent = tgcolor;

for (var i = 0; i < block.length; i++) {
    block[i].style.backgroundColor = colors[i];
    block[i].addEventListener("click", function() {
        var chosencolor = this.style.backgroundColor;
        console.log(chosencolor, tgcolor);
        if (chosencolor === tgcolor) {
            document.querySelector("#message").textContent = "CORRECT!";
            resetButton.textContent = "PLAY AGAIN";
            colorchg(chosencolor);
            document.querySelector("h1").style.background = chosencolor;
        } else {
            this.style.backgroundColor = "#232323";
            document.querySelector("#message").textContent = "TRY AGAIN";
        }
    });
}