fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const reaction = data[0].score;
        const memory = data[1].score;
        const verbal = data[2].score;
        const visual = data[3].score;

        document.querySelector('.reaction b').textContent = reaction;
        document.querySelector('.memory b').textContent = memory;
        document.querySelector('.verbal b').textContent = verbal;
        document.querySelector('.visual b').textContent = visual;
    })
    .catch(error => console.error(error));
