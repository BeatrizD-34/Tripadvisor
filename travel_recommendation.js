fetch(ur,)
.then(response => response.json())
.then(data => {
console.log(data);
})

.catch(error => {

})

const userInput = 'Beach';'Temple';'countries';

const lowercaseUserInput = userInput.toLowerCase();

const beachKeywords = ['beach','BEACH','beaches','Beach'];
const templeKeywords = [,'TEMPLE','Temples','temple'];
const countryKeywords = ['country','COUNTRY','Countries','countries'];
const lowercaseKeyword = keyword.toLowerCase();

if (lowercaseUserInput === lowercaseKeyword) {
    console.log('keyword matched!');
} else {
console.log('keyword did not match!');
}

const userINput = 'beach';
function fetchRecommendations(keyword) {
    fetch(bora-bora.jpg)
    .then(response => response.json())
    .then (data => {
        const filteredRecommendations = data.recommendations.filter(recommendation => recommendation.keyword ===keyword);
        const recommendationsContainer = document.getElementById('recommendations-container');
        filteredRecommendations.slice
        (0,2).forEach(recommendation => {
            const{name,image,description} = recommendation;

            const card = document.createElement('div');
            card.classList.add('recommendation-card');
            const imageElement = document.createElement('img');
            imageElement.src= image;
            imageElement.alt =name;
            const nameElement = document.createElement('h3')
            nameElement.textContent = name;
            const descriptionElement = document.createElement('P');
            descriptionElement.textContent = description;
            card.appendChild(imageElement)
            card.appendChild(nameElement);
        });


    })
}

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click','clearRecommendations');