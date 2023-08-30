// JavaScript for animations and interactions
const spotifyLogo = document.querySelector(".spotify-logo");
const qrCodeContainer = document.querySelector(".qr-code");
const instructions = document.querySelector(".instructions");

// Rotate the Spotify logo
spotifyLogo.addEventListener("mouseover", () => {
    spotifyLogo.style.animation = "spin 3s linear infinite";
});

spotifyLogo.addEventListener("mouseout", () => {
    spotifyLogo.style.animation = "";
});

// Pulsate the QR code container
function pulsateQRCode() {
    qrCodeContainer.style.animation = "pulse 2s ease-in-out infinite";
}

pulsateQRCode();

// Fade in the instructions
instructions.style.animation = "fadeIn 2s ease-in-out";

// Reset animations on QR code click
qrCodeContainer.addEventListener("click", () => {
    qrCodeContainer.style.animation = "";
    setTimeout(pulsateQRCode, 10);
});

// Create the Instagram link element
var instagramLink = document.createElement('a');
instagramLink.href = 'https://www.instagram.com/dhrubajyoti.official/';
instagramLink.target = '_blank';
instagramLink.textContent = 'dhrubajyoti.official';

// Create the container div for the Instagram link
var instagramLinkContainer = document.createElement('div');
instagramLinkContainer.id = 'instagram-link';
instagramLinkContainer.appendChild(instagramLink);

// Append the Instagram link container to the designated element
var instagramContainer = document.getElementById('instagram-link-container');
if (instagramContainer) {
    instagramContainer.appendChild(instagramLinkContainer);
}