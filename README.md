# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Cirill Florenz Dalangin**

Time spent: **4** hours spent in total

Link to project: https://glitch.com/edit/#!/obtainable-amber-antarctopelta

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Winning the game:

![win](https://cdn.glitch.com/fe23250a-f483-481d-9138-e9300641bde6%2Fwin.gif?v=1615777308875)

Losing the game:
![lose](https://cdn.glitch.com/fe23250a-f483-481d-9138-e9300641bde6%2Flose.gif?v=1615777325530)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- [W3Schools](https://www.w3schools.com/js/DEFAULT.asp)
- [Canva Color Palettes](https://www.canva.com/colors/color-palettes/)
- [MND Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The main challenge I encountered was understanding the code that was used to add sounds for each button using the AudioContext library. I haven’t used it before, and a lot of the syntax was unfamiliar. I began my learning process by following the linked tutorial named “Creating Sounds with AudioContext < JavaScript''. Admittedly, it was a bit complex, because I wasn’t familiar with sound synthesis and music. I then searched up AudioContext documentation and found it on MDN Web docs, and I looked for the specific methods used in the program like createOscillator() and createGain(). I learned that these methods create the sound and control the volume of them. By figuring out what these methods meant, I was able to piece together the code and the role they play in the overall game.

I also struggled with completing the guess() method on my own. I knew that the flowchart would help me set up the if/else statements, but I wasn’t sure how to translate that into the code. But then, I tried looking through the code I had so far, see which parts might seem relevant to what I need to accomplish, and go from there. For example, I realized that I’d have to check if the button that the user pressed matches the clue that was just played, so with an if statement, I checked if the guess and the clue are equal to each other. 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Mainly, I would like to know the thought process behind building web apps. Before beginning the pre-work, I thought I would have to build the entire light and sound game from the ground up, and I had no idea where to begin. I was especially hesitant about the JavaScript because I didn’t know how to set up the rules. Upon beginning the pre-work and following the steps, it made perfect sense and I was proud to have completed the whole game, including some optional features. However, in the future, if I want to create other web apps or even games, how should I break them down, similar to the step by step way that the pre-work is presented, so that I can take things one step at a time? I believe that my main struggle with web development, especially with the projects that I am trying to build on my own, is that I can only see the final product. In fact, I keep adding on some cool features I think it could have as well, but I never know how to break them down into their bare essentials, down to the functions and the if statements.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I would have loved to look more into the AudioContext library, specifically about the various pitches of the sounds, so that I can pick out specific values and make more creative sound patterns. I would like to figure out how to adjust the speed of the clue playback to keep the player on their toes as they play the game. I’d also like to add more levels to the game, maybe starting off with the 5 buttons I currently have, then each level would have an additional button, and the speed would increase as well. Finally, I want to improve the overall look of the game by giving the buttons various shapes and designs, maybe including some hover effects and size changes as the user pushes down on a button. 



## License

    Copyright Cirill Florenz Dalangin

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.