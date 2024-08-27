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
    isWinning();
}

function addTwoHome() {
    totalScoreHome += 2;
    scoreDisplayHome.textContent = totalScoreHome;
    isWinning();
}

function addThreeHome() {
    totalScoreHome += 3;
    scoreDisplayHome.textContent = totalScoreHome;
    isWinning();
}

function addOneGuest() {
    totalScoreGuest += 1;
    scoreDisplayGuest.textContent = totalScoreGuest;
    isWinning();
}

function addTwoGuest() {
    totalScoreGuest += 2;
    scoreDisplayGuest.textContent = totalScoreGuest;
    isWinning();
}

function addThreeGuest() {
    totalScoreGuest += 3;
    scoreDisplayGuest.textContent = totalScoreGuest;
    isWinning();
}

function resetHome() {
    totalScoreHome = 0;
    scoreDisplayHome.textContent = 0;
}

function resetGuest() {
    totalScoreGuest = 0;
    scoreDisplayGuest.textContent = 0;
}

function isWinning() {
    if (totalScoreHome > totalScoreGuest) {
        scoreDisplayHome.style.color = "green";
        scoreDisplayGuest.style.color = "deeppink";
    } else if (totalScoreGuest > totalScoreHome) {
        scoreDisplayGuest.style.color = "green";
        scoreDisplayHome.style.color = "deeppink";
    } else {
        scoreDisplayHome.style.color = "deeppink";
        scoreDisplayGuest.style.color = "deeppink";
    }
}


