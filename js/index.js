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

// ファーストビューの高さを取得してCSS変数に設定
document.addEventListener("DOMContentLoaded", function () {
  const mvElement = document.querySelector('[ data-index="mv"]');

  function getMvHeight() {
    const height = mvElement.offsetHeight;
    document.documentElement.style.setProperty("--mv-height", `${height}px`);
  }

  getMvHeight();
  window.addEventListener("resize", getMvHeight);
});

// スライダー
document.addEventListener("DOMContentLoaded", function () {
  // Missionセクション
  const missionCarousel = new Swiper('[data-carousel="mission"]', {
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

// パララックス
const items = document.querySelectorAll("[data-parallax]");

for (const item of items) {
  const y = item.getAttribute("data-y") ?? "5%";
  const scale = item.getAttribute("data-scale") ?? "1.1";
  const delay = 0;
  const img = item.querySelector("img");

  gsap.set(item, { overflow: "hidden" });
  gsap.set(img, { scale: scale });

  gsap.fromTo(
    img,
    {
      y: `-${y}`,
    },
    {
      y: y,
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        scrub: delay,
      },
      ease: "linear",
    }
  );
}

// スクロールアニメーション
window.addEventListener("load", () => {
  const scrollElms = document.querySelectorAll("[data-scroll-animation]");
  scrollElms.forEach((scrollElm) => {
    ScrollTrigger.create({
      trigger: scrollElm,
      start: "top 90%",
      toggleClass: {
        targets: scrollElm,
        className: "is-active",
      },
      once: true,
    });
  });
});

// Teamメンバーの枚数を取得して、スクロールバーの表示を制御
document.addEventListener("DOMContentLoaded", function () {
  const teamLists = document.querySelectorAll("[data-team-list]");
  teamLists.forEach((teamList) => {
    const itemLength = teamList.querySelectorAll(".p-index-team__item").length;

    if (window.matchMedia("(max-width: 767px)").matches) {
      if (itemLength < 2) {
        teamList.classList.add("is-not-scrollable");
      }
    } else {
      if (itemLength < 3) {
        teamList.classList.add("is-not-scrollable");
      } else {
      }
    }
  });
});

// スクロールヒント
document.addEventListener("DOMContentLoaded", () => {
  const tableContainers = document.querySelectorAll("[data-team-list]");

  if (window.matchMedia("(min-width: 768px)").matches) {
    for (const tableContainer of tableContainers) {
      const scrollHint = document.createElement("div");
      scrollHint.className = "scroll-hint scroll-hint--show";
      scrollHint.innerText = "横にスクロールできます";
      tableContainer.appendChild(scrollHint);

      const showScrollHint = () => {
        if (tableContainer.scrollWidth > tableContainer.clientWidth) {
          scrollHint.classList.add("scroll-hint--show");
        } else {
          scrollHint.classList.remove("scroll-hint--show");
        }
      };
      showScrollHint();

      tableContainer.addEventListener("scroll", () => {
        scrollHint.classList.remove("scroll-hint--show");
      });
    }
  }
});
