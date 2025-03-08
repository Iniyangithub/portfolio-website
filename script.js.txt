document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle Dark Mode";
    document.body.insertBefore(toggleBtn, document.body.firstChild);
    
    toggleBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});

// Add dark mode styles
const style = document.createElement("style");
style.textContent = `
    .dark-mode {
        background-color: #222;
        color: white;
    }
    .dark-mode section {
        background-color: #444;
    }
`;
document.head.appendChild(style);
