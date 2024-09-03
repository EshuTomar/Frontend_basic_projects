const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    panel.addEventListener('drop', (e) => {
        e.preventDefault();
        const card = document.querySelector('.dragging');
        if (card) {
            e.target.appendChild(card);
            if (e.target.id === 'resolved') {
                card.style.backgroundColor = '#d4edda'; 
            } else {
                card.style.backgroundColor = '#FDF3EF'; 
            }
        }
    });
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('dragstart', (e) => {
        e.target.classList.add('dragging');
    });

    card.addEventListener('dragend', (e) => {
        e.target.classList.remove('dragging');
    });
});
