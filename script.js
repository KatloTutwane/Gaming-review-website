// Filter Functionality for Game Genres
function filterGames() {
    const selectedGenre = document.getElementById("filter").value;
    const gameItems = document.querySelectorAll(".game-item");

    gameItems.forEach(item => {
        if (selectedGenre === "all" || item.dataset.genre === selectedGenre) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}




// Load all games on page load
document.addEventListener("DOMContentLoaded", () => {
    filterGames();  // Initial call to show all games
});
