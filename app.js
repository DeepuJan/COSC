const scoreForm = document.getElementById('scoreForm');
const leaderboardTableBody = document.getElementById('leaderboard').getElementsByTagName('tbody')[0];
let leaderboard = [];

// Function to update the leaderboard
function updateLeaderboard() {
    // Clear existing leaderboard entries
    leaderboardTableBody.innerHTML = '';

    // Sort leaderboard by score (highest first)
    leaderboard.sort((a, b) => b.score - a.score);

    // Add each entry to the leaderboard table
    leaderboard.forEach(entry => {
        const row = leaderboardTableBody.insertRow();
        const nameCell = row.insertCell(0);
        const scoreCell = row.insertCell(1);
        nameCell.textContent = entry.name;
        scoreCell.textContent = entry.score;
    });
}

// Handle form submission
scoreForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page refresh

    const name = document.getElementById('name').value;
    const score = parseInt(document.getElementById('score').value);

    // Add new entry to the leaderboard
    leaderboard.push({ name, score });

    // Update the leaderboard display
    updateLeaderboard();

    // Clear the form
    scoreForm.reset();
});
