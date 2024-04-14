document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contact-form');
    var modal = document.getElementById('success-modal');
    var popup = document.getElementById('success-popup');
    var closePopupBtn = document.getElementById('close-popup');

    // Contact Form
    form.addEventListener('submit', function(event) {
        var name = document.getElementById('name').value.trim();
        var title = document.getElementById('title').value.trim();
        var fromDate = document.getElementById('from-date').value.trim();
        var toDate = document.getElementById('to-date').value.trim();

        if (name === '' || title === '' || fromDate === '' || toDate === '') {
            event.preventDefault();
            alert('Please fill out all required fields.');
        } else {
            event.preventDefault();
            popup.style.display = 'block';
        }
    });

    closePopupBtn.addEventListener('click', function() {
        popup.style.display = 'none';
        form.reset(); // Reset the form
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
