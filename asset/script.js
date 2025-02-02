document.addEventListener("DOMContentLoaded", function() {
    console.log("Customization script loaded!");

    const colorPicker = document.getElementById("iconColor");
    const sizeSlider = document.getElementById("iconSize");
    const spacingSlider = document.getElementById("iconSpacing");
    const resetButton = document.getElementById("reset");

    function updateIconStyles() {
        document.documentElement.style.setProperty("--icon-color", colorPicker.value);
        document.documentElement.style.setProperty("--icon-size", sizeSlider.value + "px");
        document.documentElement.style.setProperty("--icon-spacing", spacingSlider.value + "px");
    }

    colorPicker.addEventListener("input", updateIconStyles);
    sizeSlider.addEventListener("input", updateIconStyles);
    spacingSlider.addEventListener("input", updateIconStyles);

    resetButton.addEventListener("click", function() {
        colorPicker.value = "#000000";
        sizeSlider.value = "24";
        spacingSlider.value = "10";
        updateIconStyles();
    });

    updateIconStyles(); // Apply default styles on page load
});
