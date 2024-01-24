let matchResults = [
  {
    date: "Sunday 14 January 2024",
    home_team: "Man Utd",
    away_team: "Spurs",
    score: "2-2",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Sunday 31 December 2023",
    home_team: "Nott'm Forest",
    away_team: "Man Utd",
    score: "2-1",
    location: "The City Ground, Nottingham",
  },
  {
    date: "Wednesday 27 December 2023",
    home_team: "Man Utd",
    away_team: "Aston Villa",
    score: "3-2",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Saturday 23 December 2023",
    home_team: "West Ham",
    away_team: "Man Utd",
    score: "2-0",
    location: "London Stadium, London",
  },
  {
    date: "Sunday 17 December 2023",
    home_team: "Liverpool",
    away_team: "Man Utd",
    score: "0-0",
    location: "Anfield, Liverpool",
  },
  {
    date: "Saturday 9 December 2023",
    home_team: "Man Utd",
    away_team: "Bournemouth",
    score: "0-3",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Thursday 7 December 2023",
    home_team: "Man Utd",
    away_team: "Chelsea",
    score: "2-1",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Sunday 3 December 2023",
    home_team: "Newcastle",
    away_team: "Man Utd",
    score: "1-0",
    location: "St. James' Park, Newcastle",
  },
];

function updateTable() {
  const tableBody = document
    .getElementById("resultsTable")
    .getElementsByTagName("tbody")[0];

  matchResults.sort((a, b) => new Date(b.date) - new Date(a.date));

  tableBody.innerHTML = "";

  const order = ["date", "teams", "score", "location"];

  for (const data of matchResults) {
    const row = document.createElement("tr");

    for (const key of order) {
      const cell = document.createElement("td");

      if (key === "teams") {
        cell.textContent = `${data.home_team} vs ${data.away_team}`;
      } else if (key === "date") {
        cell.textContent = data[key];
      } else {
        cell.textContent = data[key];
      }
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  }
}

function addResult() {
  const dateInput = document.getElementById("date").value;
  const homeTeam = document.getElementById("homeTeam").value;
  const awayTeam = document.getElementById("awayTeam").value;
  const score = document.getElementById("score").value;
  const location = document.getElementById("location").value;

  const newResult = {
    date: dateInput,
    home_team: homeTeam,
    away_team: awayTeam,
    score: score,
    location: location,
  };

  matchResults.push(newResult);

  document.getElementById("date").value = "";
  document.getElementById("homeTeam").value = "";
  document.getElementById("awayTeam").value = "";
  document.getElementById("score").value = "";
  document.getElementById("location").value = "";
  updateTable();
}

updateTable();