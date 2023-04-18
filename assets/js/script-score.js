// View Score
function highScores() {
    let table = document.getElementById('highScoreTable');
    let data = localStorage.getItem("object");
    let scores = JSON.parse(data);
    for (let score of scores.quizScores) {
        let tr = document.createElement('tr'); 
        let td1 = document.createElement('td');
        td1.textContent = score.name;
        tr.appendChild(td1);
        let td2 = document.createElement('td');
        td2.textContent = score.score;
        tr.appendChild(td2);
        table.appendChild(tr);
    }
}
window.onload=highScores();