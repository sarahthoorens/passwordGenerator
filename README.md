# passwordGenerator

Deployment date: 9/29/22</br>
Deployed address: [https://sarahthoorens.github.io/passwordGenerator/](https://sarahthoorens.github.io/passwordGenerator/)</br>
Topics applied: JavaScript variables, functions, for loops, conditionals and built-in base object (Math)</br>
Project goal: Provide JavaScript code to animate the provided HTML password generator skeleton according to acceptance criteria

## Project Description
In this challenge, I was provided with an html and css file of basic code, as well as a file with starter JavaScript. The goal of the finished product is to generate a password based on user input regarding length of the password and their preference for which type of characters to include. The information provided for this challenge is as follows:

### User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

### Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Starter code
```
This was the js started code I was provided for this challenge.
```
<img src="/Assets/images/js provided.png" alt="snapshot of js started code">

## Project Review


These are small snippets of the error messages handled by else if conditionals for user input that does not meet the input requirements of 8-128 characters and at least one type of character chosen. 

<img src="/Assets/images/error message 1.png" alt="error message out of range">

<img src="/Assets/images/error message 2.png" alt="error message for no characters chosen">
</br>

**Challenges**

This was one of my first forays into solo-coding JavaScript, so it was fraught with challenges. I was surprised how quickly I cobbled up the code to make the generator work using a single string of available characters. That said, it took me an awful amount of time to grasp the simple method that I ended up with for how to retrieve the user's input, then decide whether or not to apply that input to the randomized string. Talking it through with someone (who does not code) helped me realize I just needed to follow simple logic and thus the if conditionals were formulated. 

I also had a hard time working out how to allow use of the global variables without calling them before the button was pushed. I decided to declare them globally and then assigned them within the functions, as needed. 

**Lessons learned**

I really love this type of challenge because I feel like my breadth of knowledge grew exponentially in the 2 days I toiled at it. Although I hope my current approach of trial and error will give way to a more logical and systematic approach in the future, I feel like it ingrained some important concepts in my mind that I'll reference going forward. 
