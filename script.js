const box = document.getElementById("expandableBox");
const Icon = document.getElementById("icon");
const list1 = document.querySelector(".list");
let isExpanded = false;

box.addEventListener("click", ()=>{

    isExpanded = !isExpanded;
    box.classList.toggle("h-40", isExpanded);
    box.classList.toggle("h-16", !isExpanded);
    list1.classList.toggle("flex", isExpanded);
    list1.classList.toggle("none", !isExpanded);
    Icon.classList.toggle("rotate-180", isExpanded);
});

const box2 = document.getElementById("expandableBox2");
const Icon2 = document.getElementById("icon2");
const list2 = document.querySelector(".list2");
let isExpanded2 = false;

box2.addEventListener("click", ()=>{

    isExpanded2 = !isExpanded2;
    box2.classList.toggle("h-40", isExpanded2);
    box2.classList.toggle("h-16", !isExpanded2);
    list2.classList.toggle("flex", isExpanded2);
    list2.classList.toggle("none", !isExpanded2);
    Icon2.classList.toggle("rotate-180", isExpanded2);
});

const box3 = document.getElementById("expandableBox3");
const Icon3 = document.getElementById("icon3");
const list3 = document.querySelector(".list3");
let isExpanded3 = false;

box3.addEventListener("click", ()=>{

    isExpanded3 = !isExpanded3;
    box3.classList.toggle("h-28", isExpanded3);
    box3.classList.toggle("h-16", !isExpanded3);
    list3.classList.toggle("flex", isExpanded3);
    list3.classList.toggle("none", !isExpanded3);
    Icon3.classList.toggle("rotate-180", isExpanded3);
});

const box4 = document.getElementById("expandableBox4");
const Icon4 = document.getElementById("icon4");
const list4 = document.querySelector(".list4");
let isExpanded4 = false;

box4.addEventListener("click", ()=>{

    isExpanded4 = !isExpanded4;
    box4.classList.toggle("h-content-fit", isExpanded4);
    box4.classList.toggle("h-16", !isExpanded4);
    list4.classList.toggle("flex", isExpanded4);
    list4.classList.toggle("none", !isExpanded4);
    Icon4.classList.toggle("rotate-180", isExpanded4);
});