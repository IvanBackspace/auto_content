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
</script>
