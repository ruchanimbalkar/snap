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
import tvShows from "./data.js";
const FRESH_PRINCE_URL = "https://i.postimg.cc/VvwhzKVb/Thatgirllogo.jpg";

// This is an array of strings (TV show titles)
let titles = [
  "Fresh Prince of Bel Air",
  "Curb Your Enthusiasm",
  "East Los High",
  "That Girl",
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.
// My comments : I decided to use an array of objects. I created an array of objects in a file from data.js called tvShows and I am importing it here

const shows = tvShows;

const quoteBtn = document.getElementById("quote-button");
quoteBtn.addEventListener("click", quoteAlert);

const ascBtn = document.getElementById("asc-order");
ascBtn.addEventListener("click", ascendingOrder);

const descBtn = document.getElementById("desc-order");
descBtn.addEventListener("click", descendingOrder);

const familyBtn = document.getElementById("family");
familyBtn.addEventListener("click", familyShows);

const removeCardBtn = document.getElementById("remove-card");
removeCardBtn.addEventListener("click", removeLastCard);

//Save the form in a variable
const form = document.querySelector("#show-form");
//Print form on console
console.log("form", form);
//Add Event Listener to the form
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  //prevent default form behavior
  event.preventDefault();
  //save form data
  const data = new FormData(event.target);
  //Use the boilerplate code to create your data object
  const dataObject = Object.fromEntries(data.entries());
  //Show it in the console
  console.log("dataObject", dataObject);
  let title = dataObject.title;
  updateCards(title);
  form.reset();
}

function updateCards(title) {
  const cardContainer = document.getElementById("card-container");
  //empty the cardContainer
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");
  const found = tvShows.find(
    (show) => show.title.toLowerCase() === title.toLowerCase()
  );
  console.log("found", found);
  //if show is found
  if (found !== undefined) {
    console.log("show found");
    //show the foundCard
    const nextCard = templateCard.cloneNode(true);
    //Edit title and image
    editCardContent(
      nextCard,
      found.title,
      found.posterURL,
      found.canWatchWithFamily
    );
    //Add new card to the container
    cardContainer.appendChild(nextCard);
  } else {
    console.log("else");
    //display message : "show not found"
    let pMsg = document.createElement("p");
    pMsg.textContent = "Sorry Show not Found!";
    cardContainer.appendChild(pMsg);
  }
}

//This function sorts the movies in ascending order
function ascendingOrder() {
  shows.sort((a, b) => a.title.localeCompare(b.title));
  //call showCards()
  showCards();
}

//This function sorts the movies in descending order
function descendingOrder() {
  //sort in descenfing order
  shows.sort((a, b) => b.title.localeCompare(a.title));
  //call showCards()
  showCards();
}

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let show of shows) {
    let title = show.title;
    let imageURL = show.posterURL;
    let familySafe = show.canWatchWithFamily;
    //Copy the template card
    const nextCard = templateCard.cloneNode(true);
    //Edit title and image
    editCardContent(nextCard, title, imageURL, familySafe);
    //Add new card to the container
    cardContainer.appendChild(nextCard);
  }
  //Commenting this code for now
  // for (let i = 0; i < titles.length; i++) {
  //   let title = titles[i];

  //   // This part of the code doesn't scale very well! After you add your
  //   // own data, you'll need to do something totally different here.
  //   let imageURL = "";
  //   if (i == 0) {
  //     imageURL = FRESH_PRINCE_URL;
  //   } else if (i == 1) {
  //     imageURL = CURB_POSTER_URL;
  //   } else if (i == 2) {
  //     imageURL = EAST_LOS_HIGH_POSTER_URL;
  //   } else if (i == 3) {
  //     imageURL = THAT_GIRL_POSTER_URL;
  //   }

  //   const nextCard = templateCard.cloneNode(true); // Copy the template card
  //   editCardContent(nextCard, title, imageURL); // Edit title and image
  //   cardContainer.appendChild(nextCard); // Add new card to the container
  // }
}

// This function shows family friendly shows
function familyShows() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let show of shows) {
    let title = show.title;
    let imageURL = show.posterURL;
    let familySafe = show.canWatchWithFamily;
    if (familySafe) {
      //Copy the template card
      const nextCard = templateCard.cloneNode(true);
      //Edit title and image
      editCardContent(nextCard, title, imageURL, true);
      //Add new card to the container
      cardContainer.appendChild(nextCard);
    }
  }
}

function editCardContent(card, newTitle, newImageURL, familySafe) {
  card.style.display = "block";

  card.style.border = familySafe ? "5px solid green" : "5px solid red";
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
  tvShows.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
