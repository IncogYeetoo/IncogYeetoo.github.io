let darkMode = true;

const toggleBtn = document.getElementById("themeToggle");
const toggleIcon = toggleBtn.querySelector("img");

toggleBtn.addEventListener("click", () => {
    if (darkMode) {
        document.documentElement.style.setProperty("--bg-color", "whitesmoke");
        document.documentElement.style.setProperty("--text-color", "#18183a");
        toggleIcon.src = "./images/DayNight/night.png"; 
    } else {
        document.documentElement.style.setProperty("--bg-color", "#18183a");
        document.documentElement.style.setProperty("--text-color", "whitesmoke");
        toggleIcon.src = "./images/DayNight/day.png";
    }
    darkMode = !darkMode;
});
