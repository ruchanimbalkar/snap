/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";
const THAT_GIRL_POSTER_URL =
  "data:image/jpeg;base64,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";

// This is an array of strings (TV show titles)
let titles = [
  "Fresh Prince of Bel Air",
  "Curb Your Enthusiasm",
  "East Los High",
  "That Girl",
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    let imageURL = "";
    if (i == 0) {
      imageURL = FRESH_PRINCE_URL;
    } else if (i == 1) {
      imageURL = CURB_POSTER_URL;
    } else if (i == 2) {
      imageURL = EAST_LOS_HIGH_POSTER_URL;
    } else if (i == 3) {
      imageURL = THAT_GIRL_POSTER_URL;
    }

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
