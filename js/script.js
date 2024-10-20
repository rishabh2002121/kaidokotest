"use strict";
// console.log("Kaidoko Test: Sample Web Page");

// Sticky Navigation
const header = document.querySelector("header");
const sectionHero = document.querySelector(".section_hero");
const headerHeight = header.getBoundingClientRect().height;
const stickyNav = function (enteries) {
  const [entry] = enteries;
  // console.log(entry);
  if (!entry.isIntersecting) {
    header.classList.add("sticky_nav");
    sectionHero.style.paddingTop = `${headerHeight}px`;
  } else {
    header.classList.remove("sticky_nav");
    sectionHero.style.paddingTop = `0px`;
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${-headerHeight}px`,
});
headerObserver.observe(sectionHero);

// Tabbed Device Component          // PLS NOTE: CAN BE DONE BY EVENT DELEGATION, IM SORRY
const courseBtn1 = document.querySelector(".course_items_button-1");
const courseBtn2 = document.querySelector(".course_items_button-2");
const courseBtn3 = document.querySelector(".course_items_button-3");
const courseCon1 = document.querySelector(".course_item_content-1");
const courseCon2 = document.querySelector(".course_item_content-2");
const courseCon3 = document.querySelector(".course_item_content-3");

courseBtn1.addEventListener("click", function () {
  courseBtn1.classList.add("course_items_button_active");
  courseBtn2.classList.remove("course_items_button_active");
  courseBtn3.classList.remove("course_items_button_active");
  courseCon1.classList.add("course_item_content_active");
  courseCon2.classList.remove("course_item_content_active");
  courseCon3.classList.remove("course_item_content_active");
});
courseBtn2.addEventListener("click", function () {
  courseBtn1.classList.remove("course_items_button_active");
  courseBtn2.classList.add("course_items_button_active");
  courseBtn3.classList.remove("course_items_button_active");
  courseCon1.classList.remove("course_item_content_active");
  courseCon2.classList.add("course_item_content_active");
  courseCon3.classList.remove("course_item_content_active");
});
courseBtn3.addEventListener("click", function () {
  courseBtn1.classList.remove("course_items_button_active");
  courseBtn2.classList.remove("course_items_button_active");
  courseBtn3.classList.add("course_items_button_active");
  courseCon1.classList.remove("course_item_content_active");
  courseCon2.classList.remove("course_item_content_active");
  courseCon3.classList.add("course_item_content_active");
});

// Tabbed Mobile Component
const courseBtn11 = document.querySelector(".course_items_button-11");
const courseBtn22 = document.querySelector(".course_items_button-22");
const courseBtn33 = document.querySelector(".course_items_button-33");
const courseCon11 = document.querySelector(".course_item_content-11");
const courseCon22 = document.querySelector(".course_item_content-22");
const courseCon33 = document.querySelector(".course_item_content-33");
const mobile1 = document.querySelector(".mobile-1");
const mobile2 = document.querySelector(".mobile-2");
const mobile3 = document.querySelector(".mobile-3");

courseBtn11.addEventListener("click", function () {
  mobile1.classList.add("course_item_mobile_active");
  mobile2.classList.remove("course_item_mobile_active");
  mobile3.classList.remove("course_item_mobile_active");
  courseCon11.classList.add("course_item_content_active");
  courseCon22.classList.remove("course_item_content_active");
  courseCon33.classList.remove("course_item_content_active");
});
courseBtn22.addEventListener("click", function () {
  mobile1.classList.remove("course_item_mobile_active");
  mobile2.classList.add("course_item_mobile_active");
  mobile3.classList.remove("course_item_mobile_active");
  courseCon11.classList.remove("course_item_content_active");
  courseCon22.classList.add("course_item_content_active");
  courseCon33.classList.remove("course_item_content_active");
});
courseBtn33.addEventListener("click", function () {
  mobile1.classList.remove("course_item_mobile_active");
  mobile2.classList.remove("course_item_mobile_active");
  mobile3.classList.add("course_item_mobile_active");
  courseCon11.classList.remove("course_item_content_active");
  courseCon22.classList.remove("course_item_content_active");
  courseCon33.classList.add("course_item_content_active");
});

// Section Reveal
const allSections = document.querySelectorAll(".section_reveal");

const revealSection = function (enteries, observer) {
  const [entry] = enteries;
  // console.log(entry);
  if (entry.isIntersecting) entry.target.classList.remove("section_hidden");
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section_hidden");
});

// Mobile Navigation
const deviceNavBtn = document.querySelector(".device_nav_btns");
const mobileMenu = document.querySelector(".mobile_nav_btn_menu");
const mobileClose = document.querySelector(".mobile_nav_btn_close");

mobileMenu.addEventListener("click", function () {
  deviceNavBtn.style.transform = "translateY(0)";
  mobileMenu.style.display = "none";
  mobileClose.style.display = "block";
});

mobileClose.addEventListener("click", function () {
  deviceNavBtn.style.transform = "translateY(-125%)";
  mobileMenu.style.display = "block";
  mobileClose.style.display = "none";
});

// Slider // Sorry I skipped slider component coz i have no time left now, but i'll complete it once i start working in your team. :o
const techContainer = document.querySelector(".technology_container");
const techBtnRight = document.querySelector(".technology_btn_right");

// Thank you for the assessment
// Rishabh McKnight :)
