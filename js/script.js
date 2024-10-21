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
