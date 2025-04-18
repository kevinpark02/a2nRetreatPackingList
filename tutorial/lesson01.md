# Lesson 1 - Setting Up the Initial Style

## Basic Understanding of HTML and CSS
* Read [this](https://www.geeksforgeeks.org/difference-between-html-and-css/) to understand the basics of html and css
* Play around with [this](https://www.w3schools.com/css/tryit.asp?filename=trycss_intro) to understand the connnection between html and css

## Setting Up Initial HTML Structure
* write a `<div>` tag under the `<body>` tag in `popup.html`
* Add id of `app` to the `<div>` you just created like this
    ```html
    <div id="app"></div>
    ```
## Cascading Style Sheet (css)
* copy and paste this under the `<head>` tag in `popup.html`. This will import different font styles that google provides
    ```html
    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
    ```
* copy and paste this under the `<head>` tag in `popup.html`: 
    ```html
    <link rel="stylesheet" type="text/css" href="stylesheet.css">
    ```
* You  can define how each component of html can be styled in `stylesheet.css`. Putting the link tag above will ensure that all the styling rules you defined in `stylesheet.css` will apply to all of your html components.

* Copy and paste this into stylesheet.css

    ```css
    html, body {
        margin: 0; 
        padding: 0;
        width: 300px;
        height: 500px;
        font-family: "Anton";
        background-color: #5E7569;
        box-sizing: border-box;
    }
    ```
Look up all the css properties listed above to understand what kind of styling is being applied to the `html` and the `body` tags. Feel free to ask chatgpt too :D

## Challenge
* Read up on how to utilize class and id along with CSS. Read [this](https://www.w3schools.com/css/css_selectors.asp)
* Using what you know so far, make the title `Packing List` appear on the extension
* Figure out how to make it white just like it appears in the `Packing List.png`
* Figure out how to size it so it appears similarly to `Packing List.png`
* Don't worry about centering it
