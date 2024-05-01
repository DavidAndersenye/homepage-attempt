document.getElementById('hamburger').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
    this.classList.toggle('active');

    // Add this line to hide the hamburger button when the sidebar is active
    document.body.classList.toggle('no-scroll');
});
const card = document.querySelector('.card');
card.addEventListener('click', function() {
    card.classList.toggle('flip');
});
