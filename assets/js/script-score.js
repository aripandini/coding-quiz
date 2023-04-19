var clearScore = document.getElementById("clearHighScores");
let table = document.getElementById('highScoreTable');

function highScores() {
    let data = localStorage.getItem("object");
    let scores = JSON.parse(data);

    let sortedScores = scores ? scores.quizScores.sort(
        (score1, score2) => (score1.score < score2.score) ? 1 : (score1.score > score2.score) ? -1 : 0) : []
   
    
    sortedScores.forEach(function (score, i) {
        let tr = document.createElement('tr'); 
        let td1 = document.createElement('td');
        td1.textContent = i + ".";
        tr.appendChild(td1);
        let td2 = document.createElement('td');
        td2.textContent = score.name;
        tr.appendChild(td2);
        let td3 = document.createElement('td');
        td3.textContent = score.score;
        tr.appendChild(td3);
        table.appendChild(tr);
    });
}

function clearHighScores(){
    if (localStorage.getItem("object") !== null) {
        localStorage.clear();

    table.innerHTML= ""; 
    }
}

clearScore.onclick = clearHighScores;

window.onload=highScores();