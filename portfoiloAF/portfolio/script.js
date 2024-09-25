// Toggle Accordion Content
document.querySelectorAll('.accordion-title').forEach(function (title) {
    title.addEventListener('click', function () {
        var content = title.nextElementSibling;
        if (content) {
            // Toggle the display of accordion content
            content.style.display = (content.style.display === 'block') ? 'none' : 'block';
        }
    });
});
// Toggle Contact Info Display
var toggleBtn = document.getElementById("togglebtn");
if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
        var content = document.querySelector("section.left p");
        if (content) {
            content.style.display = (content.style.display === 'none') ? 'block' : 'none';
        }
    });
}
// Change background color on click
document.body.addEventListener('click', function () {
    var currColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = (currColor === 'gray') ? '#102937' : 'gray';
});
