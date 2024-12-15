<script>
    const container = document.querySelector('.section h2 p');
    const textElements = document.querySelectorAll('.section p');
     const textElements = document.querySelectorAll('.section h2');


    container.addEventListener('scroll', () => {
        textElements.forEach((text) => {
            const rect = text.getBoundingClientRect();
            const containerHeight = container.clientHeight;

            // Якщо елемент у верхній або нижній частині, додаємо розмиття
            if (rect.top < 50 || rect.bottom > containerHeight - 50) {
                text.classList.add('blur');
            } else {
                text.classList.remove('blur');
            }
        });
    });
</script>
