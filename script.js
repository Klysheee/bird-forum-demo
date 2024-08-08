document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.trigger').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            // Оставим пустую обработку клика, если понадобится.
        });
    });
});
