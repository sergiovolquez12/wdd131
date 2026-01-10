
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the current year dynamically and update the footer
    const currentYear = new Date().getFullYear();
    document.getElementById("copyrightYear").innerHTML = currentYear;

    // Get the last modified date of the document and update the footer
    const lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").innerHTML = lastModifiedDate;
});
