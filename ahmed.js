let btnMode = document.querySelector(".btn-mode");
btnMode.onclick = function () {
  document.body.classList.toggle("white-theme");
  btnMode.classList.toggle("fa-sun");
  btnMode.classList.toggle("fa-moon");
};

// Smooth scrolling for navigation links
$(document).ready(function () {
  $(".nav-links a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800
      );
    }
  });
});

// Initialize Slick carousel for portfolio section
$(document).ready(function () {
  $(".portfolio-slider").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
