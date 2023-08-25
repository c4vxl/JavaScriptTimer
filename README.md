## Timer
This module allows you to create countdowns and countups with ease!

## Usage
- Clone the files `timer.js` and `timer.css` to your project.
- Import booth files using following code:
```html
<link rel="stylesheet" href="timer.css">
<script src="timer.js"></script>
```
- Import the needed html structure to your Project:
```html
<div class="timer">
    <div class="timer__content">
        <div class="timer__container years">
            <p class="timer__content time__content"></p>
            <p class="timer__content time__unit"></p>
        </div>

        <div class="timer__container months">
            <p class="timer__content time__content"></p>
            <p class="timer__content time__unit"></p>
        </div>

        <div class="timer__container weeks">
            <p class="timer__content time__content"></p>
            <p class="timer__content time__unit"></p>
        </div>
        
        <div class="timer__container days">
            <p class="timer__content time__content"></p>
            <p class="timer__content time__unit"></p>
        </div>

        <div class="timer__container hours">
            <p class="timer__content time__content"></p>
            <p class="timer__content time__unit"></p>
        </div>
        
        <div class="timer__container minutes">
            <p class="timer__content time__content"></p>
            <p class="timer__content time__unit"></p>
        </div>

        <div class="timer__container seconds">
            <p class="timer__content time__content"></p>
            <p class="timer__content time__unit"></p>
        </div>
    </div>
</div>
```
- Create a new timer instance in your js code:
```js
const timerInstance = new timer(document.querySelector(".timer"));
```
- Now you can run the methods `startCountup` and `startCountdown` or `displayTime`.

## Example
To illustrate the functionality, the provided HTML, JS, and CSS code will start a countdown from 10 seconds to 0 seconds. If the countdown is over, the text "Countdown over" will appear on the screen.

## Developer
This Project was Developed by [c4vxl](https://c4vxl.de)
