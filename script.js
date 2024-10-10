// List of additional artworks to add dynamically
const newArtworks = [
    { title: 'The Scream', artist: 'Edvard Munch', img: 'https://media.npr.org/assets/img/2012/05/03/scream_vert-a59c4997eed62f01e7ce9f7471890ea40f1f4636.jpg' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/800px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg' },
    { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/1200px-The_Night_Watch_-_HD.jpg' },
    { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://media.overstockart.com/cache/data/product_images/KL1267-1000x1000.jpg' },
    { title: 'American Gothic', artist: 'Grant Wood', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/1200px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg' },
    { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg/1200px-Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg' },
    { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/640px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg' },
    { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://www.claude-monet.com/assets/img/paintings/water-lilies-harmony-in-blue.jpg' },
    { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg' }
];

// Add your JavaScript code here.
let viewedCount = 0;
const counterElement = document.getElementById('counter');
const artPanels = document.querySelectorAll('.art-panel');
const addArtButton = document.getElementById('add-art-button');
const resetButton = document.getElementById('reset-button');
const artGrid = document.querySelector('.art-grid');
let removingArtwork = false;
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

