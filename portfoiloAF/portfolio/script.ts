// Toggle Accordion Content
document.querySelectorAll<HTMLElement>('.accordion-title').forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling as HTMLElement | null;
        if (content) {
            // Toggle the display of accordion content
            content.style.display = (content.style.display === 'block') ? 'none' : 'block';
        }
    });
});

// Toggle Contact Info Display
const toggleBtn = document.getElementById("togglebtn");
if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
        const content = document.querySelector("section.left p") as HTMLElement | null;
        if (content) {
            content.style.display = (content.style.display === 'none') ? 'block' : 'none';
        }
    });
   
}

// Change background color on click
document.body.addEventListener('click', () => {
    const currColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = (currColor === 'gray') ? '#102937' : 'gray';
});
