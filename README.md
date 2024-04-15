# Star Wars Archive

This project is a simple web application that allows users to explore planets in the Star Wars universe.

## Features

- Fetch and display a list of planets from the Star Wars API. [API](https://swapi.dev/).
- Free to use planets images from "Free to use" png sites.
- My own made logo, that was made via using Adobe Photoshop.
- Animations for each planet and for loading the page.
- Search functionality to find a planet, character and starship.
- Cool Star Wars text on main page and on "404notfound" one.

## Problems and solutions

- The /planets page has an unoptimized display of planets, which is why we send 61 API requests, and because of this, if the Internet is bad, there may be a problem with loading this page. I know how to optimize it, but I decided that for a small project and for an API that will not expand (the maximum instead of 60 planets will become 70+) this solution will be fine. If the mentor is unable to load this page, then I will attach a screenshot of what it looks like. In general, it’s just 60 pictures and 60 names, the pictures have animation, and links will lead to detailed information about the planet.
![screenshot](./planet-list.png)
- Code reuse and violation of the SOLID principle. Here the code could be made more beautiful, but I didn’t have much time by the time I finished the project.
- Lack of pictures for people and ships. I considered this a minor task. I have done everything correctly, but I do not have PNG photos with ID in the folder.
- Also, to replace the photo with default.png, I used the shortest way - display it when there is an error. There is a more adequate way - to create a function that will do this, but for a small web project it seems to me that my solution is enough.
- There are also minor issues that I could solve, but I think they are not so critical

## Installation
1. If you already know how to deal with Angular you probably don't need such instruction.
2. Clone this repository.
3. Navigate into the project directory.
4. Install the dependencies:
npm install


## Usage
1. Run the Development Server:
ng serve
2. Open in Browser:
Open your web browser and visit `http://localhost:4200`.

