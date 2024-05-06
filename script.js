'use strict';

// Function to toggle classes
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar toggle
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// Testimonials modal handling
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

testimonialsItems.forEach(item => {
  item.addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.textContent = this.querySelector("[data-testimonials-title]").textContent;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();
  });
});

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Category filter and selection handling
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

select.addEventListener("click", function () {
  elementToggleFunc(select);
});

selectItems.forEach(item => {
  item.addEventListener("click", function () {
    let selectedValue = this.textContent.toLowerCase();
    selectValue.textContent = this.textContent;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    if (selectedValue === "all" || item.dataset.category === selectedValue) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

let lastClickedBtn = filterBtns[0];
filterBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    let selectedValue = this.textContent.toLowerCase();
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
});

// Form validation and submission handling
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
  input.addEventListener("input", function () {
    formBtn.disabled = !form.checkValidity();
  });
});

// Navigation links and page handling
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link, index) => {
  link.addEventListener("click", function () {
    pages.forEach((page, pageIndex) => {
      if (pageIndex === index) {
        page.classList.add("active");
        navigationLinks[pageIndex].classList.add("active");
      } else {
        page.classList.remove("active");
        navigationLinks[pageIndex].classList.remove("active");
      }
    });
  });
});

