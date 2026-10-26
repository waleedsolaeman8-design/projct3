# Exercise 3: Responsive Navigation Bar

## Goal
Build a navigation bar that works well on desktop and phone: on large screens the links are visible, and on phones they sit behind a Menu button.

## Requirements
- Show the site logo or name and at least four navigation links.
- Below 768px wide, hide the regular links and show a Menu button instead.
- Add a dropdown under one of the sections, such as Products.

## How to test
- Try 320px, 768px and desktop widths, with no unintended horizontal scrolling.
- Open and close the menu with a click and with the keyboard.

## Topics to research
- CSS media queries: choosing a different layout based on screen width.
- Flexbox: arranging the navigation links.
- HTML `nav`: marking up the navigation area semantically.

## Bonus (optional)
Close the menu when the user clicks outside it.

## Hint
Don't rely on hover alone for dropdowns; they must also work on touch devices.

## Running
Open this folder with VS Code Live Server, or run `python3 -m http.server 8000` in this folder and open `http://localhost:8000`.

## Files
- `index.html`: the header, links, Menu button and Products dropdown.
- `styles.css`: base styles plus the media query that hides the links below 768px and shows them when `#nav-links` has the `open` class.
- `script.js`: your work goes under each `TODO`.

## Submission notes
Fill these in before you submit:
- How to run:
- Features implemented:
- What I tested:
- Challenges I faced:
