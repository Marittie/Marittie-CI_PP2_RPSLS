# Rock, Paper, Scissors, Lizard, Spock (PP2)

(Mario Castaldo)

![Responsive mockup of the website](.//docs/mockup/responsive-mockup.png)

[View the deployed website.](https://marittie.github.io/Marittie-CI_PP2_RPSLS/)

## Table of Content

1. [Project Goals](#project-goals)
2. [User Experience](#user-experience)
    1. [User stories](#user-stories)
    2. [Design](#design)
    3. [Wireframes](#wireframes)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks & Tools](#frameworks,-libraries-and-other-tools)
5. [Testing](#testing)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [JavaScript Validation](#JavaScript-validation)
    4. [Accessibility](#accessibility)
    5. [Performance](#performance)
    6. [Device testing](#performing-tests-on-various-devices)
    7. [Browser compatibility](#browser-compatability)
    8. [Testing user stories](#testing-user-stories)
6. [Bugs](#Bugs-found-and-resolved-during-development)
7. [Deployment](#deployment)
8. [Credits](#credits)
    1. [Code](#code)
    2. [Acknowledgements](#acknowledgements)

## Project Goals

### Website owner goals

- I want users to be able to play an enjoyable game. 
- I want users to return to the website to continue playing the game. 

### User goals

- Learn the rules of the game. 
- Play a game that is enjoyable and challenging. 
- Play a game that encourages the user to return to the game after the first play through. 
- Play a game that has the objective to Win.

## User experience

The user experience is structured around three main goals: (a) to allow users to learn the game, (b) interaction with the game (c) encourage users to return and play through again. 

### User stories

I have divided my user stories into two categories: first-time users and regular visitors, with the understanding that one of the key goals of the website is to encourage replayability of the game.

#### First-time users

1. As a first-time user, I want to see the name of the game.
2. As a first-time user, I want to understand the scope of the game.
3. As a first-time user, I want to understand the rules of the game. 
4. As a first-time user, I want to be able to play the game across all personal devices. 
5. As a first-time user, I want to be able to see the choices made by me and the computer.
6. As a first-time user, I want to keep track of my score to monitor my performance in the game. 
7. As a first-time user, I want to see the result of the "battle" between me and the computer at the end of the game.

#### Regular visitor
 
8. As a regular visitor, I want to see the result og the "battle" between me and the computer. 
9. As a regular visitor, I want to see the difference in score between me and the computer.

#### Site owner

10. As a site owner, I want users to be able to understand the scope of the game.
11. As a site owner, I want users to be able to understand the rules of the game.
12. As a site owner, I want users to be able to play and navigate the page easily so that users are more likely to have an enjoyable experience and return to the game.
13. As a site owner, I want users to enjoy this version of the game from the serie Big Bang Theory.

### Design 

My overall approach to the design came from a desire to create a game that was fun, engaging and simple to understand.

#### Colour Scheme

I chose to use a shade of green and a shade of red as the primary scheme to bring to the user's mind connotations of nature and challenge. I chose shades of orange,blue and gray for the user and computer choice,the scores and the result to be able to draw particular attention when those values changes.

#### Typography

My body font is Fredoka One from Google Fonts. I chose this font because is aesthetically pleasing. Fredoka One is a big, round, bold font that is perfect for adding a little fun to games.

#### Imagery

I chose not to use photography on the website and adopted a cartoonish style instead. I did this to keep a consistent style across the website and promote a tone that was fun and engaging, particularly for children.

I found all the images on Google.

## Features

### Current Features

The game page contains 8 main sections: 

1. A header displaying the name of the game.
2. Scope of the game.
3. A button to direct the user to the rules of the game.
4. The buttons to play the game.
5. User and Computer choices showing when pressing a button.
6. The result calculated between the user and computer choices.
7. The User and the Computer score.
8. The Rules of the game.

#### Feature 1: Header

This header is used to communicate to users the name of the game and what type of game it is.

![Header](.//docs/features/header.png)

**User stories covered by this feature:**

1. As a first-time user, I want to see the name of the game.

#### Feature 2: Scope

This feature is used to communicate to users the end goal of the game.

![Scope](.//docs/features/scope.png)

**User stories covered by this feature:**

2. As a first-time user, I want to understand the scope of the game.
10. As a site owner, I want users to be able to understand the scope of the game.

#### Feature 3: Button to navigate to the rules of the game

This button is used for user to navigate to the rules if the do not know the different combinations of the game.

![Button](.//docs/features/button-rules.png)

**User stories covered by this feature:**

3. As a first-time user, I want to understand the rules of the game.
11. As a site owner, I want users to be able to understand the rules of the game.

#### Feature 4: Buttons to play against the compputer

This buttons are the "weapons" the users will choose to start their game agains the computer.

![Button](.//docs/features/buttons-weapons.png)

**User stories covered by this feature:**

4. As a first-time user, I want to be able to play the game across all personal devices. 
12. As a site owner, I want users to be able to play and navigate the page easily so that users are more likely to have an enjoyable experience and return to the game.

#### Feature 5: User and Computer choices

This feature is used to display to users which "weapon" they and the computer have chosen.

![Choices](.//docs/features/choices.png)

**User stories covered by this feature:**

5. As a first-time user, I want to be able to see the choices made by me and the computer.

#### Feature 6: Result

This feature is used to dispaly to users the result of the "battle" between them and the computer, declering if they have won or lost that round.

![Result](.//docs/features/result.png)

**User stories covered by this feature:**

7. As a first-time user, I want to see the result of the "battle" between me and the computer at the end of the game.
8. As a regular visitor, I want to see the result of the "battle" between me and the computer.

#### Feature 7: Score

This feature is used to display the User and Computer score until the end of the game, it will also display the tie score when the user and the computer will choose the same "weapon".

![Score](.//docs/features/score.png)

**User stories covered by this feature:**

6. As a first-time user, I want to keep track of my score to monitor my performance in the game. 
9. As a regular visitor, I want to see the difference in score between me and the computer.

#### Feature 8: Rules

This feature is used to show, especially to new users, the rules of the game.

![Rules](.//docs/features/rules.png)

**User stories covered by this feature:**

3. As a first-time user, I want to understand the rules of the game.
11. As a site owner, I want users to be able to understand the rules of the game.

### Wireframes

Wireframes:

Balsamiq Wireframes

- [Laptop](./docs/wireframes/wireframe-laptop.png)

- [Tablet](./docs/wireframes/wireframe-tablet.png)

- [Mobile phone](./docs/wireframes/wireframe-mobilephone.png)

## Technologies used

### Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [Javascript](https://en.wikipedia.org/wiki/JavaScript)

### Frameswork, libraries and other tools

1. [GitHub](https://github.com/)
- GitHub was used as a remote repository to store project code.
2. [Font Awesome](https://fontawesome.com/)
- Icons from Font Awesome were used throughout the site.
3. [Google Fonts](https://fonts.google.com/)
- Fendoka One from Google Fonts were used as the main heading font throughout the site.
4. [Am I Responsive](http://ami.responsivedesign.is/)
- Am I Responsive was used to create the multi-device mock-up you see at the start of this README.md file.
5. [Faivcon Generator](https://www.favicon-generator.org/)
- Favicon Generator was used to create a favicon for the website.

## Testing

### HTML Validation

The [W3C Markup Validation Service](https://validator.w3.org/) was used to validate the HTML of the website. All pages passed with [0 errors](./docs/validation/validation-html.png). 

### CSS Validation

The [W3C CSS Validation Service](http://jigsaw.w3.org/css-validator/validator) was used to validate the CSS of the website. Style.css passed with [0 errors](./docs/validation/validation-css.png).

## JavaScript Validation

The [JSHint](https://jshint.com/) was used to validate the JavaScript of the website. All scripts passed with [0 errors and 0 warnings](docs/validation/validation-js.png).

### Accessibility 

The [WAVE WebAIM web accessibility evaluation tool]  was used to ensure the website met high accessibility standards. 

The website passes with [0 errors](./docs/accessibility/wawe-acc.png).

### Performance

[Google Lighthouse](https://developers.google.com/web/tools/lighthouse/) was used to measure the performance and speed of the website. The page passed with 94% score on performance, 100% on accessibility, 92% Best Practice and 100% on SEO.

[Lighthouse](./docs/lighthouse/lighthouse.png)

### Performing tests on various devices 

#### Devices tested: 

- MacBook Air 
- Iphone 7
- Iphone 13 Pro
- Samsung S 22

### Browser compatibility

- **Microsoft Edge**: Website and user stories work as expected. 
- **Google Chrome**: Website and user stories work as expected. 
- **Safari**: Website and user stories work as expected. 
- **Firefox**: Website and user stories work as expected. 

 ### Testing user stories

*1. As a first-time user, I want to see the name of the game.*

| Feature                            |                 Action                 |                           Expected result |     Actual result |
 ---------------------------------- | :------------------------------------ | ---------------------------------------- | ---------------- |
| Read name of the game in the header of the page|      No action required, the header is displayed on the top of the page | To find a name that is clear, readable and easy to understand | Works as expected |

*2. As a first-time user, I want to understand the scope of the game.*

| Feature                            |                 Action                 |                           Expected result |     Actual result |
 ---------------------------------- | :------------------------------------ | ---------------------------------------- | ---------------- |
| Read the scope of the game just below the header|      No action required, the scope is displayed on the top of the page | To understand the final scope of the game | Works as expected |

*3. As a first-time user, I want to understand the rules of the game.*

| Feature                            |                 Action                 |                           Expected result |     Actual result |
 ---------------------------------- | :------------------------------------ | ---------------------------------------- | ---------------- |
| Button below the header to direct user to the rules of the game|      Click the button, user will navigate directly to the rules | To understand the rules of the game | Works as expected |
| A list with all the rules at the bottom of the page|      No action required, the rules are displayed at the bottom of the page | To understand the rules of the game | Works as expected |

*4. As a first-time user, I want to be able to play the game across all personal devices.*

| Feature                            |                 Action                 |                           Expected result |     Actual result |
 ---------------------------------- | :------------------------------------ | ---------------------------------------- | ---------------- |
| The webpage is fully responsive |   No action required  | All content to be present and arranged in a sensible layout | Works as expected |

*5. As a first-time user, I want to be able to see the choices made by me and the computer.*

| Feature                            |                 Action                 |                           Expected result |     Actual result |
 ---------------------------------- | :------------------------------------ | ---------------------------------------- | ---------------- |
| 5 Button with icons to choose as user choice |   Click the chosen button and the choice is displayed in the "You" section  | The name of the object in the icons will display in the "You" section when a button in clicked | Works as expected |
| A section with the names 'You' and 'Computer' |   To display the choices made by the user and the computer | The name of the object in the icons will display in the "You" and "Computer" sections when a button in clicked | Works as expected |

*6. As a first-time user, I want to keep track of my score to monitor my performance in the game.*

| Feature                            |                 Action                 |                           Expected result |     Actual result |
 ---------------------------------- | :------------------------------------ | ---------------------------------------- | ---------------- |
| Score section below the user and computer choices |   No action required,the result is displayed right away when the user and the computer hava made their choices | To display who, between the user and the computer has won the round and and the end the winner of the game | Works as expected |

*7. As a first-time user, I want to see the result og the "battle" between me and the computer at the end of the game.*

| Feature                            |                 Action                 |                           Expected result |     Actual result |
 ---------------------------------- | :------------------------------------ | ---------------------------------------- | ---------------- |
| Score section below the user and computer choices |   No action required,the result is displayed as soon as the user or the computer scores 10 point | To display who, between the user and the computer is the winner of the game | Works as expected |

*8. As a regular visitor, I want to see the result og the "battle" between me and the computer.*

| Feature                            |                 Action                 |                           Expected result |     Actual result |
 ---------------------------------- | :------------------------------------ | ---------------------------------------- | ---------------- |
 | Score section below the user and computer choices |   No action required,the result is displayed as soon as the user or the computer scores 10 point | To display who, between the user and the computer is the winner of the game | Works as expected |
| Score section below the user and computer choices |   No action required,the result is displayed as soon as the user or the computer scores 10 point | To display who, between the user and the computer is the winner of the game | Works as expected |

*9. As a regular visitor, I want to see the difference in score between me and the computer.*

| Feature                            |                 Action                 |                           Expected result |     Actual result |
 ---------------------------------- | :------------------------------------ | ---------------------------------------- | ---------------- |
| Score section below the user and computer choices |   No action required,the result is displayed as soon as the user or the computer scores 10 point | To keep track of the scores  | Works as expected |

*10. As a site owner, I want users to be able to understand the scope of the game.*

| Feature                            |                 Action                 |                           Expected result |     Actual result |
 ---------------------------------- | :------------------------------------ | ---------------------------------------- | ---------------- |
| Read the scope of the game just below the header|      No action required, the scope is displayed on the top of the page | To understand the final scope of the game | Works as expected |

*11. As a site owner, I want users to be able to understand the rules of the game.*

| Feature                            |                 Action                 |                           Expected result |     Actual result |
 ---------------------------------- | :------------------------------------ | ---------------------------------------- | ---------------- |
| Button below the header to direct user to the rules of the game|      Click the button, user will navigate directly to the rules | To understand the rules of the game | Works as expected |
| A list with all the rules at the bottom of the page|      No action required, the rules are displayed at the bottom of the page | To understand the rules of the game | Works as expected |

*12. As a site owner, I want users to be able to play and navigate the page easily so that users are more likely to have an enjoyable experience and return to the game.*

| Feature                            |                 Action                 |                           Expected result |     Actual result |
 ---------------------------------- | :------------------------------------ | ---------------------------------------- | ---------------- |
| Top of the page with header, scope of the game and button to navigate to the rules    |      Click on the button to navigate to the rules of the game   | Displaying name of the game,scope of the game and rules | Works as expected |
| Challange section  |      Click on the icon buttons to start and interact with the game  | To play the game | Works as expected |
| Result and Score section  |      No actions required, displaying the result and the score of the user and computer  | To display result and score | Works as expected |

 ## Bugs:

 No Bugs were found in the game.

 ## Deployment

### GitHub Pages

This website has been deployed using GitHub pages. To do the same...

1. Log into your GitHub account and find the [repository](https://github.com/Marittie/Marittie-CI_PP2_RPSLS). 
2. Click on 'Settings' in the repository. 
3. Click 'Pages' in the left-hand menu once you're in Settings. 
4. Go to 'Branch'.
5. Click on the button that says 'none', then select 'main'.
6. Wait for page to refresh automatically. 
7. On the top of GitHub pages you can now find a link to the published live website. 

#### Forking the GitHub Repository 

By forking this GitHub repository you are making a copy of the original to view or make changes without affecting the original. You can do this by following these steps...

1. Log into your GitHub account and find the [repository](https://github.com/Marittie/Marittie-CI_PP2_RPSLS).
2. Click 'Fork' (third button on the top right of the repository page).
3. You will then have a copy of the repository in your own GitHub account. 

#### Making a Local Clone

1. Log into your GitHub account and find the [repository](https://github.com/Marittie/Marittie-CI_PP2_RPSLS).
2. Click on the 'Code' button (next to 'Add file'). 
3. To clone the repository using HTTPS, under clone with HTTPS, copy the link.
4. Then open Git Bash.
5. Change the current working directory to where you want the cloned directory to be made.
6. In your IDE's terminal type 'git clone' followed by the URL you copied.
7. Press Enter. 
8. Your local clone will now be made.

## Credits

### Code

- **Anya Kubóv** - From [YouTube](https://www.youtube.com/watch?v=RwFeg0cEZvQ&ab_channel=CodewithAniaKub%C3%B3w)3 ways to code Rock Paper Scissors in JavaScript (Beginner to Intermediate to Advanced!). It gave me a good hint from where to start. particularly on the code for the function generateComputerChoice() and the function displayResult().
- **Stack Overflow** - from [StackOverflow](https://stackoverflow.com/questions/66193218/how-do-i-get-my-rock-paper-scissors-game-to-reset-after-5-wins-with-javascript) for the code to end and reset the game. Line 160 of JavaScript
- **Student Support** - For the "rough" codes they would give me in order to give me a base where to start to write my codes. 
- **W3 Schools** - From [W3 Schools](https://www.w3schools.com/) for the hints about different line of codes.

### Acknowledgements: 

- To my girlfriend for the support,help with the daily tasks and feedback.
- To my friends for testing, playing and giving me feedback about the game. 
- To my mentor Mo Shami for his feedback, advice and support.
- To the Code Institute Tutor Support for their helpful advice, resources, guidance and support. 
