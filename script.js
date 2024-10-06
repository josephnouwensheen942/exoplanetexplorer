// Smooth scroll functionality for buttons and navigation
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    const targetSection = document.querySelector(e.target.getAttribute('href'));
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
});

// Array to hold detailed information about exoplanet types
const planetDetails = {
    'Gas Giants': {
        title: 'Gas Giants',
        content: 'Gas giants like Jupiter and Saturn are massive planets composed primarily of hydrogen and helium. They are characterized by their large sizes and lack of solid surfaces.'
    },
    'Super Earths': {
        title: 'Super Earths',
        content: 'Super Earths are planets larger than Earth but smaller than Neptune. They may be composed of rock, water, or gas, and could potentially harbor life.'
    },
    'Terrestrial Planets': {
        title: 'Terrestrial Planets',
        content: 'Terrestrial planets are Earth-like rocky planets that have a solid surface. Some may be found in the habitable zone where conditions could support life.'
    }
};

// Get elements for modal functionality
const modalContainer = document.getElementById('modal-container');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const closeModalBtn = document.querySelector('.close-btn');

// Function to open modal with planet details
function openModal(planetType) {
    modalTitle.textContent = planetDetails[planetType].title;
    modalContent.textContent = planetDetails[planetType].content;
    modalContainer.style.display = 'flex';
}

// Add event listeners to each planet card
const planetCards = document.querySelectorAll('.planet-type');
planetCards.forEach(card => {
    card.addEventListener('click', function () {
        const planetType = this.querySelector('h3').textContent;
        openModal(planetType);
    });
});

// Close modal functionality
closeModalBtn.addEventListener('click', function () {
    modalContainer.style.display = 'none';
});

// Close modal by clicking outside the modal
window.addEventListener('click', function (event) {
    if (event.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});