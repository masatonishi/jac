"use strict";

// ファーストビューを超えたらヘッダーが出現
document.addEventListener("DOMContentLoaded", function () {
  const secondSection = document.querySelector("[data-second-section]");
  const followingHeader = document.querySelector("[data-following-header]");

  window.addEventListener("scroll", () => {
    const sectionRect = secondSection.getBoundingClientRect();

    if (sectionRect.top <= 0) {
      followingHeader.classList.add("is-active");
    } else {
      followingHeader.classList.remove("is-active");
    }
  });
});

// Teamセクションスライダー
document.addEventListener("DOMContentLoaded", function () {
  const teamSliderWrappers = document.querySelectorAll(
    '[data-carousel="member"]'
  );

  teamSliderWrappers.forEach((teamSliderWrapper) => {
    const teamSliderSlides =
      teamSliderWrapper.querySelectorAll(".swiper-slide");

    function initializeSlider() {
      return new Swiper(teamSliderWrapper.querySelector(".swiper"), {
        spaceBetween: 40,
        slidesPerView: "auto",
        breakpoints: {
          768: {
            centeredSlides: false,
          },
        },
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: teamSliderWrapper.querySelector(".swiper-button-next"),
          prevEl: teamSliderWrapper.querySelector(".swiper-button-prev"),
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        speed: 1500,
        observer: true,
        observeParents: true,
      });
    }

    initializeSlider();
  });
});
