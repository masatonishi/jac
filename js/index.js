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

// タブ
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll('[data-tab="button"]');

  tabButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      tabControl(event);
    });
  });

  function tabControl(event) {
    const tab = event.currentTarget;
    const isSelected = tab.getAttribute("aria-selected") === "true";

    // キーボード操作時にX座標が変わるとフォーカスを外す
    if (event.clientX === 0) {
      tab.blur();
    }

    if (isSelected) {
      return;
    }

    const panelId = tab.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);

    if (panel === null) {
      return;
    }

    const activeTab = tab
      .closest('[role="tablist"]')
      .querySelector('[data-tab="item"] [aria-selected="true"]');
    const activePanelId = activeTab.getAttribute("aria-controls");
    const activePanel = document.getElementById(activePanelId);

    tab.setAttribute("aria-selected", "true");
    activeTab.setAttribute("aria-selected", "false");
    panel.setAttribute("aria-hidden", "false");
    activePanel.setAttribute("aria-hidden", "true");
  }
});

// Teamセクションスライダー
document.addEventListener("DOMContentLoaded", function () {
  const teamSliderWrappers = document.querySelectorAll(
    '[data-carousel="member"]'
  );

  teamSliderWrappers.forEach((teamSliderWrapper) => {
    const teamSliderSlides =
      teamSliderWrapper.querySelectorAll(".swiper-slide");
    const slideLength = teamSliderSlides.length;

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
