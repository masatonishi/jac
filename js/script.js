"use strict";

// 画面幅390px以下でviewport固定
!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 390
        ? "width=device-width,initial-scale=1"
        : "width=390";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }
  addEventListener("resize", switchViewport, false);
  switchViewport();
})();

// グローバルメニュー
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButtons = document.querySelectorAll(".js-hamburger-button");
  const globalMenu = document.getElementById("js-global-menu");
  const globalMenuOverlay = document.getElementById("js-global-menu-overlay");
  const body = document.body;

  // ハンバーガーボタンクリック時
  hamburgerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      body.classList.toggle("is-drawerActive");
      const isExpanded = body.classList.contains("is-drawerActive");

      hamburgerButtons.forEach((button) => {
        button.setAttribute("aria-expanded", isExpanded.toString());
      });

      if (isExpanded) {
        globalMenu.setAttribute("aria-hidden", "false");
      } else {
        globalMenu.setAttribute("aria-hidden", "true");
      }
    });
  });

  // 背景クリック時
  globalMenuOverlay.addEventListener("click", () => {
    body.classList.remove("is-drawerActive");
    hamburgerButtons.forEach((button) => {
      button.setAttribute("aria-expanded", "false");
    });
    globalMenu.setAttribute("aria-hidden", "true");
  });

  // メニュークリックでナビゲーションを閉じる
  const spNavLinks = globalMenu.querySelectorAll(
    ".p-global-menu__nav-item a[href]"
  );
  spNavLinks.forEach(function (spNavLink) {
    spNavLink.addEventListener("click", function () {
      hamburgerButtons.forEach((button) => {
        button.click();
      });
    });
  });
});

// DOMが読み込まれたらbodyにクラス追加
document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  body.classList.add("is-loaded");
});
