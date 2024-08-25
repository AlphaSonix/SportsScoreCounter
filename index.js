let scoreDisplayHome = document.getElementById("homeScore");
let scoreDisplayGuest = document.getElementById("guestScore");
//console.log(scoreDisplay);
let totalScoreHome = 0;
let totalScoreGuest = 0; 

scoreDisplayGuest.textContent = 0;
scoreDisplayHome.textContent = 0;

function addOneHome() {
    totalScoreHome += 1;
    scoreDisplayHome.textContent = totalScoreHome;
}

function addTwoHome() {
    totalScoreHome += 2;
    scoreDisplayHome.textContent = totalScoreHome;
}

function addThreeHome() {
    totalScoreHome += 3;
    scoreDisplayHome.textContent = totalScoreHome;
}

function addOneGuest() {
    totalScoreGuest += 1;
    scoreDisplayGuest.textContent = totalScoreGuest;
}

function addTwoGuest() {
    totalScoreGuest += 2;
    scoreDisplayGuest.textContent = totalScoreGuest;
}

function addThreeGuest() {
    totalScoreGuest += 3;
    scoreDisplayGuest.textContent = totalScoreGuest;
}

function resetHome() {
    totalScoreHome = 0;
    scoreDisplayHome.textContent = 0;
}

function resetGuest() {
    totalScoreGuest = 0;
    scoreDisplayGuest.textContent = 0;
}

