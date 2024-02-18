var ram = "";
var scoreval = 0;

function bubble() {
    var inner = "";
    for (var i = 1; i <= 120; i++) {
        var rn = Math.floor(Math.random() * 10)
        inner += `<div class="bubble">${rn}</div>`
        document.querySelector(".pbtm").innerHTML = inner;
    }
}
bubble();
function hit() {
     ram = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = ram;
}
hit();
function timer() {
    var timer = 60;
    var timeint = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeval").innerHTML = timer + "s";
        }
        else {
            clearInterval(timeint);
            document.querySelector(".pbtm").innerHTML = `<h1>Game is over</h1>\n<h1>score :${scoreval}</h1`;
        }
    }, 1000);
}

function score() {
    scoreval += 10;
    document.querySelector("#scoreval").textContent = scoreval;
}

function playgame(params) {


    var play = document.querySelector(".play");
    var listner = play.addEventListener("click", () => {
        timer();
        setInterval(() => {
            play.style.display = "none";
        }, 6000);
        var pause = document.querySelector("#pause");
        setInterval(() => {
            pause.style.visibility = "visible";
        }, 7000);

    })

    pause.addEventListener("click", () => {
        window.location.reload();
        timer();
    });
}
playgame();
function scorehitval() {
    document.querySelector(".pbtm").addEventListener("click", (dets) => {
 var clickhit =  Number(dets.target.textContent);
 if (clickhit === ram) {
    score();
    bubble();
    hit();
 }
 });
}
scorehitval();