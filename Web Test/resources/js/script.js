// JS for responsive carousel
document.querySelectorAll(".carousel-container").forEach(carousel => {
    const images = carousel.querySelectorAll(".carousel");
    // HTML to create nav buttons, one for each image 
    const btnHTML = Array.from(images, () => {
        return `<span class="carousel-btn"></span>`
    });

    // add HTML inside carousel-nav div
    document.getElementById("carousel-nav").innerHTML = btnHTML.join("");

    const btns = carousel.querySelectorAll(".carousel-btn");

    // add event listener for each button
    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            // remove all active classes
            btns.forEach(btn => btn.classList.remove("carousel-btn-active"));
            images.forEach(item => item.classList.remove("carousel-active"));

            // if button is selected, add active class to button and corresponding image
            btn.classList.add("carousel-btn-active");
            images[i].classList.add("carousel-active");
        });
    });

    // default, first image is active on page load
    images[0].classList.add("carousel-active");
    btns[0].classList.add("carousel-btn-active");
});