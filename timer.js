class timer {
    constructor(parentElement) {
        this.parentElement = parentElement;
        this.yearsElement = parentElement.querySelector(".years");
        this.monthsElement = parentElement.querySelector(".months");
        this.weeksElement = parentElement.querySelector(".weeks");
        this.daysElement = parentElement.querySelector(".days");
        this.hoursElement = parentElement.querySelector(".hours");
        this.minutesElement = parentElement.querySelector(".minutes");
        this.secondsElement = parentElement.querySelector(".seconds");
        this.interval = null;
    }

    displayTime(sec) {
        var seconds = sec;
        
        // calculate
        var years = Math.floor(seconds / 31536000), seconds = seconds %= 31536000;
        var months = Math.floor(seconds / 2628000), seconds = seconds %= 2628000;
        var weeks = Math.floor(seconds / 604800), seconds = seconds %= 604800;
        var days = Math.floor(seconds / 86400), seconds = seconds %= 86400;
        var hours = Math.floor(seconds / 3600), seconds = seconds %= 3600;
        var minutes = Math.floor(seconds / 60), seconds = Math.floor(seconds %= 60);

        // display
        this.yearsElement.querySelector(".time__content").textContent = years < 10 ? "0" + years : years;
        this.monthsElement.querySelector(".time__content").textContent = months < 10 ? "0" + months : months;
        this.weeksElement.querySelector(".time__content").textContent = weeks < 10 ? "0" + weeks : weeks;
        this.daysElement.querySelector(".time__content").textContent = days < 10 ? "0" + days : days;
        this.hoursElement.querySelector(".time__content").textContent = hours < 10 ? "0" + hours : hours;
        this.minutesElement.querySelector(".time__content").textContent = minutes < 10 ? "0" + minutes : minutes;
        this.secondsElement.querySelector(".time__content").textContent = seconds < 10 ? "0" + seconds : seconds;

        // hide elements if the number is 0 or less
        this.yearsElement.style.display = years <= 0 ? "none" : "inline-block";
        this.monthsElement.style.display = months <= 0 ? "none" : "inline-block";
        this.weeksElement.style.display = weeks <= 0 ? "none" : "inline-block";
        this.daysElement.style.display = days <= 0 ? "none" : "inline-block";
        this.hoursElement.style.display = hours <= 0 ? "none" : "inline-block";
        this.minutesElement.style.display = minutes <= 0 ? "none" : "inline-block";
        this.secondsElement.style.display = seconds <= 0 ? "none" : "inline-block";

        // display time units
        this.yearsElement.querySelector(".time__unit").textContent = years === 1 ? "Year" : "Years";
        this.monthsElement.querySelector(".time__unit").textContent = months === 1 ? "Month" : "Months";
        this.weeksElement.querySelector(".time__unit").textContent = weeks === 1 ? "Week" : "Weeks";
        this.daysElement.querySelector(".time__unit").textContent = days === 1 ? "Day" : "Days";
        this.hoursElement.querySelector(".time__unit").textContent = hours === 1 ? "Hour" : "Hours";
        this.minutesElement.querySelector(".time__unit").textContent = minutes === 1 ? "Minute" : "Minutes";
        this.secondsElement.querySelector(".time__unit").textContent = seconds === 1 ? "Second" : "Seconds";
    }

    startCountdown(sec, overText = "over") {
        var seconds = sec;

        this.interval = setInterval(() => {
            seconds = seconds - 1;
            this.displayTime(seconds);
        
            if (seconds === 0) {
                this.displayText(overText);
            }
        }, 1000);
    }

    startCountup(maxSec = null, overText = "over") {
        var seconds = 0;
        this.interval = setInterval(() => {
            this.displayTime(seconds = seconds + 1);
            if (maxSec !== null && seconds >= maxSec) {
                this.displayText(overText);
            }
        }, 1000);
    }

    displayText(txt) {
        clearInterval(this?.interval);

        // hide elements
        this.yearsElement.style.display = "none";
        this.monthsElement.style.display = "none";
        this.weeksElement.style.display = "none";
        this.daysElement.style.display = "none";
        this.hoursElement.style.display = "none";
        this.minutesElement.style.display = "none";
        this.secondsElement.style.display = "none";

        const element = document.createElement("p");
        element.textContent = txt;
        element.classList.add("timer__text")
        this.parentElement.appendChild(element);
    }
}
