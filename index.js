window.onload=function(){
    const a_home=document.querySelector(".headlink");
    a_home.classList.add("animate-on-load")
}

// it is for the single class
// to add separate event through callback
// const about = document.querySelectorAll(".aboutme_head");

// // Pass a function reference instead of invoking the function directly
// about.addEventListener("mouseover", () => about_a(about));

// function about_a(key) {
//     key.classList.add("animate-on-load");
// }


const about = document.querySelectorAll(".aboutme_head, #h1_coding, #quote");

// Loop through each element and add the event listener
about.forEach(element => {
    element.addEventListener("mouseover", () => about_a(element));
});

function about_a(element) {
    element.classList.remove("animate-on-load");
    void element.offsetWidth; // Trigger a reflow
    element.classList.add("animate-on-load");
}


document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'visible' class when the item is in view
                entry.target.classList.add('visible');
                // Add a class based on item position (even or odd)
                if (Array.from(entry.target.parentNode.children).indexOf(entry.target) % 2 === 0) {
                    entry.target.classList.add('even');
                }
                observer.unobserve(entry.target); // Stop observing after it becomes visible
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the item is visible
    });

    // Observe each timeline item
    timelineItems.forEach(item => {
        observer.observe(item);
    });
});
