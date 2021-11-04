const button = document.querySelector("#toggle");
const timeline = document.querySelector(".timeline");
const timelineItems = document.querySelectorAll(".timeline-item");

button.addEventListener("click", e => {
    timeline.classList.toggle('active');
});

for (let i = 0; i < timelineItems.length; i++) {
    timelineItems[i].style.animation = `showing 0.2s ease-in ${i}s forwards`;
    console.log(timelineItems[i].childNodes);
    if (timelineItems[i].childNodes[3] !== undefined) {
        timelineItems[i].childNodes[3].style.animation = `showing 0.2s ease-in ${i}.5s forwards`;
    }
    if (timelineItems[i].childNodes[5] !== undefined) {
        timelineItems[i].childNodes[5].style.animation = `shacking 0.5s ease-in ${i}.5s forwards`;
    }
    if (timelineItems[i].childNodes[7] !== undefined) {
        timelineItems[i].childNodes[7].childNodes[1].style.animation = `draw 1.5s ease-in ${i}s forwards`;
    }
}