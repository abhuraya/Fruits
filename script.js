const fruits = [
    { name: "Apple", emoji: "🍎" },
    { name: "Banana", emoji: "🍌" },
    { name: "Orange", emoji: "🍊" },
    { name: "Strawberry", emoji: "🍓" },
    { name: "Watermelon", emoji: "🍉" },
    { name: "Grapes", emoji: "🍇" },
    { name: "Pineapple", emoji: "🍍" },
    { name: "Mango", emoji: "🥭" },
    { name: "Peach", emoji: "🍑" },
    { name: "Pear", emoji: "🍐" },
    { name: "Cherry", emoji: "🍒" },
    { name: "Kiwi", emoji: "🥝" },
    { name: "Lemon", emoji: "🍋" },
    { name: "Blueberry", emoji: "🫐" },
    { name: "Coconut", emoji: "🥥" },
    { name: "Avocado", emoji: "🥑" },
    { name: "Papaya", emoji: "🧡" },
    { name: "Pomegranate", emoji: "🔴" },
    { name: "Dragon Fruit", emoji: "🐉" },
    { name: "Guava", emoji: "🟢" },
    { name: "Lychee", emoji: "⚪" },
    { name: "Raspberry", emoji: "🫐" },
    { name: "Blackberry", emoji: "🫐" },
    { name: "Plum", emoji: "🟣" },
    { name: "Apricot", emoji: "🟠" },
    { name: "Fig", emoji: "🟣" },
    { name: "Passion Fruit", emoji: "🟡" },
    { name: "Jackfruit", emoji: "🟢" },
    { name: "Star Fruit", emoji: "⭐" },
    { name: "Persimmon", emoji: "🟠" },
    { name: "Cantaloupe", emoji: "🍈" },
    { name: "Honeydew", emoji: "🍈" },
    { name: "Tangerine", emoji: "🍊" },
    { name: "Cranberry", emoji: "🔴" },
    { name: "Mulberry", emoji: "🟣" },
    { name: "Breadfruit", emoji: "🍈" },
    { name: "Durian", emoji: "🌰" },
    { name: "Rambutan", emoji: "🔴" },
    { name: "Mangosteen", emoji: "🟣" },
    { name: "Longan", emoji: "🟤" },
    { name: "Kumquat", emoji: "🍊" },
    { name: "Pomelo", emoji: "🍊" },
    { name: "Grapefruit", emoji: "🍊" },
    { name: "Lime", emoji: "🍋" },
    { name: "Mandarin", emoji: "🍊" },
    { name: "Nectarine", emoji: "🍑" },
    { name: "Quince", emoji: "🍐" },
    { name: "Gooseberry", emoji: "🟢" },
    { name: "Elderberry", emoji: "🫐" },
    { name: "Boysenberry", emoji: "🫐" },
    { name: "Cloudberry", emoji: "🟠" },
    { name: "Red Currant", emoji: "🔴" },
    { name: "Black Currant", emoji: "🟣" },
    { name: "White Currant", emoji: "⚪" },
    { name: "Açaí Berry", emoji: "🫐" },
    { name: "Date", emoji: "🟤" },
    { name: "Tamarind", emoji: "🟤" },
    { name: "Sapodilla", emoji: "🥝" },
    { name: "Soursop", emoji: "🍈" },
    { name: "Custard Apple", emoji: "🍈" },
    { name: "Cherimoya", emoji: "🍈" },
    { name: "Plantain", emoji: "🍌" },
    { name: "Prickly Pear", emoji: "🌵" },
    { name: "Feijoa", emoji: "🥝" },
    { name: "Jujube", emoji: "🔴" },
    { name: "Loquat", emoji: "🟠" },
    { name: "Salak", emoji: "🟤" },
    { name: "Langsat", emoji: "🟡" },
    { name: "Miracle Fruit", emoji: "🔴" },
    { name: "Horned Melon", emoji: "🥝" },
    { name: "Buddha's Hand", emoji: "🍋" },
    { name: "Bael", emoji: "🟢" },
    { name: "Wood Apple", emoji: "🟤" },
    { name: "Rose Apple", emoji: "🍎" },
    { name: "Wax Apple", emoji: "🍎" },
];

const fruitDisplay = document.getElementById("fruit-display");
const fruitEmoji = document.getElementById("fruit-emoji");
const fruitName = document.getElementById("fruit-name");
const fruitButton = document.getElementById("fruit-button");

let previousFruitIndex = -1;

function getRandomFruitIndex() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * fruits.length);
    } while (
        fruits.length > 1 &&
        randomIndex === previousFruitIndex
    );

    return randomIndex;
}

function showRandomFruit() {
    const randomIndex = getRandomFruitIndex();
    const selectedFruit = fruits[randomIndex];

    previousFruitIndex = randomIndex;

    fruitEmoji.textContent = selectedFruit.emoji;
    fruitName.textContent = selectedFruit.name;

    fruitDisplay.classList.remove("fruit-pop");

    void fruitDisplay.offsetWidth;

    fruitDisplay.classList.add("fruit-pop");
}

fruitButton.addEventListener("click", showRandomFruit);

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showRandomFruit();
    }
});