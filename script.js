// List of additional artworks to add dynamically
const newArtworks = [
    { title: 'The Scream', artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
    { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://via.placeholder.com/200' },
    { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://via.placeholder.com/200' },
    { title: 'American Gothic', artist: 'Grant Wood', img: 'https://via.placeholder.com/200' },
    { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://via.placeholder.com/200' },
    { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
    { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://via.placeholder.com/200' },
    { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://via.placeholder.com/200' }
];

// Add your JavaScript code here.
let viewedCount = 0;
const counterElement = document.getElementById('counter');
const artPanels = document.querySelectorAll('.art-panel');
const addArtButton = document.getElementById('add-art-button');
const resetButton = document.getElementById('reset-button');
const artGrid = document.querySelector('.art-grid');

// update the counter display
const updateCounter = () => {
    counterElement.textContent = `Artworks Viewed: ${viewedCount}`;
};

// Art panel click event
artPanels.forEach(panel => {
    panel.addEventListener('click', function () {
        if (!this.classList.contains('viewed')) {
            this.classList.add('viewed');
            this.style.backgroundColor = '#d4edda';
            viewedCount++;
            updateCounter();
        }
    });
});

// Function to reset gallery state
const resetGallery = () => {
    viewedCount = 0;
    updateCounter();
    const viewedPanels = document.querySelectorAll('.viewed');
    viewedPanels.forEach(panel => {
        panel.classList.remove('viewed');
        panel.style.backgroundColor = '';
    });
};

resetButton.addEventListener('click', resetGallery);

// add new artwork
const addNewArtwork = () => {
    const randomArtwork = newArtworks[Math.floor(Math.random() * newArtworks.length)];
    const newPanel = document.createElement('div');
    newPanel.classList.add('art-panel');
    newPanel.innerHTML = `
        <img src="${randomArtwork.img}" alt="${randomArtwork.title}">
        <p>${randomArtwork.title} by ${randomArtwork.artist}</p>
    `;

    // Add click event for the new panel
    newPanel.addEventListener('click', function () {
        if (!this.classList.contains('viewed')) {
            this.classList.add('viewed');
            this.style.backgroundColor = '#d4edda';
            viewedCount++;
            updateCounter();
        }
    });

    artGrid.appendChild(newPanel);
};

addArtButton.addEventListener('click', addNewArtwork);
