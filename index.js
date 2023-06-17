let homeTeamScore = 0;
let guestTeamScore = 0;

let homeScoreBoard = document.getElementById('home-score')
let guestScoreBoard = document.getElementById('guest-score')
let resetBtnEl = document.getElementById('new-game')

function addScoreHome(points) {
        homeTeamScore += points;
        homeScoreBoard.textContent = homeTeamScore;
    }

function addScoreGuest(points) {
        guestTeamScore += points;
        guestScoreBoard.textContent = guestTeamScore;
    } 
    
// Home team score functionality

// +1 button - increment score by one point
function addOnePoint() {
addScoreHome(1)
}
// +2 button - increment score by two points

function addTwoPoint() {
addScoreHome(2)
}
// +3 button - increment score by three points

function addThreePoint() {
addScoreHome(3)
}

// Guest team score functionality
function addOnePointGuest() {
addScoreGuest(1);
}
// +2 button - increment score by two points

function addTwoPointGuest() {
addScoreGuest(2);
}
// +3 button - increment score by three points

function addThreePointGuest() {
addScoreGuest(3);
}

function newGame() {
    homeScoreBoard.textContent = 0;
    guestScoreBoard.textContent = 0;
    homeTeamScore = 0;
    guestTeamScore = 0;

}