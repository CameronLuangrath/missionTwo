document.addEventListener("DOMContentLoaded", function () {
    let userName = "Cameron Luangrath";
    document.getElementById("user-name").innerText = userName;

    // Theme Toggle Function
    document.getElementById("theme-btn").addEventListener("click", function () {
        document.body.classList.toggle("darkmode");

        // Save theme preference in local storage
        localStorage.setItem("theme", document.body.classList.contains("darkmode") ? "dark" : "light");
    });

    // Check and apply saved theme on page load
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("darkmode");
    }

    // Project List
    let projects = ["Portfolio Website", "JavaScript Calculator", "Weather App"];
    let projectList = document.getElementById("projects");

    projects.forEach((project) => {
        let listItem = document.createElement("li");
        listItem.textContent = project;
        projectList.appendChild(listItem);
    });

});

// Run Typewriter Effect
typeWriterEffect("typing-text", "Full Stack Developer who writes clean and efficient code", 50);

// Typewriter Function
function typeWriterEffect(elementId, text, speed) {
    let i = 0;
    let target = document.getElementById(elementId);
    target.innerHTML = `<span id="text"></span><span id="cursor">|</span>`; // Add cursor

    let textSpan = document.getElementById("text");
    let cursorSpan = document.getElementById("cursor");

    // Type each character at intervals
    let intervalId = setInterval(function () {
        if (i < text.length) {
            textSpan.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(intervalId); // Stop typing once complete
        }
    }, speed);

    // Blinking Cursor Effect
    setInterval(() => {
        cursorSpan.style.visibility = cursorSpan.style.visibility === "hidden" ? "visible" : "hidden";
    }, 500);
}