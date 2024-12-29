export default function Landing() {
    let fruits = ['Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Boysenberry', 'Canary Melon', 'Cantaloupe', 'Casaba Melon', 'Cherimoya', 'Cherry', 'Christmas Melon', 'Clementine', 'Coconut', 'Cranberry', 'Crenshaw Melon', 'Cucumber', 'Currant', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Figs', 'Goji Berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava', 'Honeydew', 'Horned Melon', 'Huckleberry', 'Jackfruit', 'Jujube', 'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Loganberry', 'Lychee', 'Mandarin Orange', 'Mango', 'Minneola', 'Mulberry', 'Musk Melon', 'Nance', 'Nectarine', 'Blood Orange', 'Orange', 'Papaya', 'Passion Fruit', 'Peach', 'Pear', 'Persimmon', 'Pineapple', 'Plum', 'Pomegranate', 'Prickly (cactus) pear', 'Pomelo', 'Pulasan', 'Rambutan', 'Raspberry', 'Red Currant', 'Satsuma', 'Soutsop', 'Star Fruit', 'Strawberry', 'Tamarillo', 'Tangelo', 'Tangerine', 'Ugli fruit', 'Watermelon', 'White currant', 'White sapote', 'Yuzu', 'Ziziphus'];

document.querySelector('button').addEventListener('click', function() {
    let randomIndex = Math.floor(Math.random() * fruits.length);
    document.querySelector('#display').textContent = fruits[randomIndex];
});

    return (
        <div>
        <h1>Click the button to display a random fruit</h1>
        <br />
        <br />
        <button>Click me</button>
        <br />
        <br />
        <h3 id='display'></h3>
        </div>
    );
}