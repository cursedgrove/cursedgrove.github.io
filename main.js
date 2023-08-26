document.getElementById("navToggle").addEventListener("click", function() {
    const navLinksContainer = document.getElementById("navLinksContainer");
    if (navLinksContainer.style.display === "none" || navLinksContainer.style.display === "") {
        navLinksContainer.style.display = "block";
    } else {
        navLinksContainer.style.display = "none";
    }
});