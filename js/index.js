"use strict";

// ファーストビューを超えたらヘッダーが出現
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
