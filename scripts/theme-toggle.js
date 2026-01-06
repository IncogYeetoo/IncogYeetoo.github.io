let darkMode = true;

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    if (darkMode) {
        document.documentElement.style.setProperty("--bg-color", "whitesmoke");
        document.documentElement.style.setProperty("--text-color", "#18183a");
    } else {
        document.documentElement.style.setProperty("--bg-color", "#18183a");
        document.documentElement.style.setProperty("--text-color", "whitesmoke");
    }
    darkMode = !darkMode;
});
