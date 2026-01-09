
document.addEventListener("DOMContentLoaded", function() {
    
    const currentYear = new Date().getFullYear();
    document.getElementById("copyrightYear").innerHTML = currentYear;

    
    const lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").innerHTML = lastModifiedDate;
});
