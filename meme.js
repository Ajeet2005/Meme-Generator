// Select elements from the DOM
const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

// Function to update the meme details in the DOM
const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url); // Correct usage of setAttribute
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`; // Add a prefix for clarity
};

// Function to fetch and generate a new meme
const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes") // Updated API URL
        .then(response => response.json())
        .then(data => {
            // Update the details using the fetched data
            updateDetails(data.url, data.title, data.author || data.subreddit);
        })
        .catch(error => {
            console.error("Error fetching meme:", error);
            memeTitle.innerHTML = "Oops! Could not fetch a meme.";
            memeAuthor.innerHTML = "";
            memeImage.setAttribute("src", ""); // Clear the image
        });
};

// Attach event listener to the button
generateMemeBtn.addEventListener("click", generateMeme);
