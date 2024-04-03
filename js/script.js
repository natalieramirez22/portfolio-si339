
// set the text for each music genre
var rb = "SZA, Dijon, Jhené Aiko, Kali Uchis"
var house = "Fred Again, Dom Dolla, Fisher, John Summit"
var reggaeton = "Bad Bunny, Young Miko, Karol G, Rauw Alejandro"
var indie = "Tame Impala, Hippo Campus, Omar Apollo, Lana Del Rey"

document.addEventListener('DOMContentLoaded', function() {
    // Function to show the popup
    function showPopup(text) {
        var popupBackground = document.getElementById('popup-background');
        var popup = document.getElementById('popup');
        var popupText = document.getElementById('popup-text');

        popupText.style.padding = '20px 40px 0 60px';
        popupText.textContent = text; // Set the text inside the popup
        popupBackground.classList.add('show'); // Show the dark background
        popup.classList.add('show'); // Show the popup
    }

    // Function to close the popup
    window.closePopup = function() {
        var popupBackground = document.getElementById('popup-background');
        var popup = document.getElementById('popup');

        popupBackground.classList.remove('show'); // Hide the dark background
        popup.classList.remove('show'); // Hide the popup
    }

    // Get all the genres
    var genres = document.querySelectorAll('.music-genre');

    // Attach the event listeners to genres
    genres.forEach(function(genre) {
        genre.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            var text = 'My favorite artists in ' + genre.title + ' music: '; // Change this text to whatever you want to show
            
            if (genre.title == 'r&b') {
                text += rb;
            } else if (genre.title == 'house') {
                text += house;
            } else if (genre.title == 'reggaeton') {
                text += reggaeton;
            } else if (genre.title == 'indie') {
                text += indie;
            }
            
            showPopup(text);
        });
    });
});


