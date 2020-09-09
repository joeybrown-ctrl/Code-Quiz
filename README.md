# Code-Quiz

**version 1.0.0**

[For deployed version, click me](https://joeybrown-ctrl.github.io/Code-Quiz/startpage.html)

For week four of bootcamp I was assigned with making a JavaScript code quiz completely from scratch. Utilizing HTML 5, Bootstrap 4, and vanilla JavaScript along with DOM manipulation and JSON, I was able to create this quiz. This was definitely my most challenging assignment yet, and I spent a lot of time outside of class pseudocoding then building this app. I worked with my tutor, attended office hours, asked many questions and shared with my classmates for insight along the way. 
<br>
The user lands on startpage.html, where there is a welcome heading and a start button. This was created by loading Bootstrap's CDN into the HTML page, and linking the page through an href within an anchor tag to the index.html file, so as not to confuse the script file.
<br>
![Image of startpage.html](https://github.com/joeybrown-ctrl/Code-Quiz/blob/master/images/start-page.png)
<br>
The start button then leads the user to the questions page/index.html, where a timer function begins counting down from 60 seconds. There are five questions total; if answered correctly, the user is alerted, "correct answer!" And through a function that moves through an array object, the next question appears on the screen. However, if the user answers a question incorrectly, they are alerted, "wrong answer ya ding dong!" And the timer deducts 15 seconds from the time before firing the next question.
<br>
![Image of index.html/code quiz questions](https://github.com/joeybrown-ctrl/Code-Quiz/blob/master/images/questions-page.png)
<br>
After the questions have been answered, a function is called to end the quiz, which reveals the user's score and an input where the user can enter their initials. The user's score is the time left on the timer, and when the user's initials are entered, the quiz starts again with the timer counting down.
<br>
![Image of final score and the input for user's initials](https://github.com/joeybrown-ctrl/Code-Quiz/blob/master/images/score-initials.png)
<br>
Once the user enters their intials and hits submit, their score and initials are saved to local storage, which can be accessed through their DevTools using Chrome Inspect. User can see their score by navigating to the applications tab within Inspect. I utilized JSON for this portion of the project, using JSON.parse and JSON.stringify to save the object to the DOM. 
<br>
![Image of user's initials and score stored to local storage](https://github.com/joeybrown-ctrl/Code-Quiz/blob/master/images/local-storage.png)
<br>



## Built With

* [Visual Studio Code](https://code.visualstudio.com/)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Bootstrap 4](https://getbootstrap.com/)
* [HTML 5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [Markdown](https://guides.github.com/features/mastering-markdown/) 


## Contributors

-Special thanks to Joseph Jepson ([alligatormonday](https://github.com/alligatormonday)) for giving my project a good looking over.

-Joey Brown <br> <gjoey.brown@gmail.com> <br> &copy; 2020 Joey Brown. All rights reserved.