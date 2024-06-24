<script>
    const textDivs = document.querySelectorAll('.text');
    const resultContainer = document.querySelector('.content__items');

    let headersNum = 1;
    let headersText = '<ul>';

    textDivs.forEach(div => {
        const headers = div.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headers.forEach(header => {
            const level = header.tagName.toLowerCase().replace('h', '');
            headersText += `<li><a class="title-h${level}" href="#title-${headersNum++}">`;
            headersText += header.textContent + '</a></li>';
        });
    });

    headersText += '</ul>';
    resultContainer.innerHTML = headersText;

    headersNum = 1;
    textDivs.forEach(div => {
        const headers = div.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headers.forEach(header => {
            header.id = `title-${headersNum++}`;
        });
    });

    const toggleButton = document.querySelector('.toggle-button');

    toggleButton.addEventListener('click', () => {
        resultContainer.classList.toggle('expanded');
        if (resultContainer.classList.contains('expanded')) {
            toggleButton.textContent = 'Свернуть';
        } else {
            toggleButton.textContent = 'Подробнее';
        }
    });

    if (resultContainer.scrollHeight <= 210) {
        toggleButton.style.display = 'none';
    }
</script>

<style>
    .content__items {
        overflow: hidden;
        transition: max-height 0.3s ease;
        max-height: 210px;
    }

    .content__items.expanded {
        max-height: 1000px;
    }

    .toggle-button {
        cursor: pointer;
        color: blue;
        text-decoration: underline;
    }
</style>
