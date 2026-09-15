

    fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;

      // Once navbar is loaded, initialize active link setup
      setActiveNavLinkByUrl();
      setupScrollSpy();
    })
    .catch((error) => console.error("Error loading navbar:", error));

        fetch("announcement.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("announcement-container").innerHTML = data;

      // Once navbar is loaded, initialize active link setup
      setActiveNavLinkByUrl();
      setupScrollSpy();
    })
    .catch((error) => console.error("Error loading navbar:", error));


    fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;

      // Once navbar is loaded, initialize active link setup
      setActiveNavLinkByUrl();
      setupScrollSpy();
    })
    .catch((error) => console.error("Error loading navbar:", error));


    
    const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelectorAll(".dot");
const heroPrev = document.querySelector(".prev");
const heroNext = document.querySelector(".next");

let slideNo = 0;
let heroSliderTimer = null;

function showSlide(slide) {

    // Clear previous timer
    clearTimeout(heroSliderTimer);

    // Pause all videos
    heroSlides.forEach(item => {

        const video = item.querySelector("video");

        if (video) {
            video.pause();
            video.currentTime = 0;
            video.onended = null;
        }

    });

    // Update slide number
    if (slide >= heroSlides.length)
        slideNo = 0;
    else if (slide < 0)
        slideNo = heroSlides.length - 1;
    else
        slideNo = slide;

    // Remove active classes
    heroSlides.forEach(item => item.classList.remove("active"));
    heroDots.forEach(item => item.classList.remove("active"));

    // Add active class
    heroSlides[slideNo].classList.add("active");
    heroDots[slideNo].classList.add("active");

    // Check if current slide has video
    const currentVideo = heroSlides[slideNo].querySelector("video");

    if (currentVideo) {

        currentVideo.currentTime = 0;
        currentVideo.play();

        // Wait until video finishes
        currentVideo.onended = function () {

            showSlide(slideNo + 1);

        };

    } else {

        // Image slide → wait 3 seconds
        heroSliderTimer = setTimeout(function () {

            showSlide(slideNo + 1);

        }, 3000);

    }

}

// Next Button
heroNext.addEventListener("click", function () {

    showSlide(slideNo + 1);

});

// Previous Button
heroPrev.addEventListener("click", function () {

    showSlide(slideNo - 1);

});

// Dots
heroDots.forEach((dot, i) => {

    dot.addEventListener("click", function () {

        showSlide(i);

    });

});

// Start Slider
showSlide(0);




