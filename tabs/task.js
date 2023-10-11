let tabs = Array.from(document.querySelectorAll(".tab"));
let sections = Array.from(document.querySelectorAll(".tab__content"));

tabs.forEach(tab => {
    tab.addEventListener("click", function() {
        changeTab(this);
    });
});

function changeTab(selectedTab) {
    let currentActiveTab = document.querySelector(".tab.tab_active");
    let currentActiveSection = document.querySelector(".tab__content.tab__content_active");

    if (currentActiveTab) currentActiveTab.classList.remove("tab_active");
    if (currentActiveSection) currentActiveSection.classList.remove("tab__content_active");

    selectedTab.classList.add("tab_active");

    let index = tabs.indexOf(selectedTab);
    sections[index].classList.add("tab__content_active");
    }