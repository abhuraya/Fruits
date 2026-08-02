# Random Fruit Picker

A lightweight and playful web app that displays a random fruit whenever the user presses a button.

The project was built with HTML, CSS, and vanilla JavaScript. It includes a colorful responsive interface, fruit emojis, keyboard controls, animation, and protection against showing the same fruit twice in a row.

## Live Demo

Add your deployed Netlify link here.
[Open the live Fruit Picker]https://pickyfruits.netlify.app/

## Features

* Randomly selects from a large collection of fruits
* Displays the fruit name and a matching emoji
* Prevents immediate repeats
* Animated fruit transitions
* Enter and Space keyboard controls
* Responsive mobile layout
* No external libraries or frameworks

## Keyboard Controls

| Key     | Action           |
| ------- | ---------------- |
| `Enter` | Pick a new fruit |
| `Space` | Pick a new fruit |

## Technologies

* HTML5
* CSS3
* JavaScript

## How It Works

The app stores fruit names and emojis inside an array of objects.

Each time the button is pressed, JavaScript generates a random array index and displays the corresponding fruit. The previously selected index is stored so that the same fruit is not shown twice in succession.

## Running Locally

Clone the repository:

```bash
git clone https://github.com/abhuraya/Fruits.git
```

Open the project folder:

```bash
cd Fruits
```

Then open `index.html` in your browser.

## Future Improvements

* Replace approximate emojis with real fruit images
* Add fruit facts or nutritional information
* Add fruit categories
* Add a favorites feature
* Add sound effects
* Add light and dark themes
