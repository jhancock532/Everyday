# Introduction
Hello, I'm James Hancock, a computer science and innovation student studying at the University of Bristol. 

This website is a list of all the daily web development projects I've completed since the 1st of January, 2019. The projects completed vary considerably in nature, from experiments with [p5.js](https://p5js.org/), [Bootstrap 4](https://getbootstrap.com/), and [jQuery](https://jquery.com/). I've been studying the fundamentals of JavaScript recently.

What you see here is not a portfolio of polished, final products, more of a long-term journey, a learning process filled with ups and downs. This website is part code, part blog, so be warned about rambling reflections.

To read more of the inspiration that started this process and the inital strategy I followed, [click here](#inspiration-and-strategy). Part of this strategy was performing weekly reflections on what I'd done that week. You can find a direct link to these reflections below.

- [Week One Reflection](#week-one-reflection) 
- [Week Two Reflection](#week-two-reflection)
- [Week Three Reflection](#week-three-reflection)

My favourite everyday project so far has been Day 14, Particle System II. See a live demo below.

<p class="codepen" data-height="500" data-theme-id="35659" data-default-tab="result" data-user="jhancock532" data-slug-hash="MZZMVK" data-preview="true" style="height: 462px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Particle System Template II">
  <span>See the Pen <a href="https://codepen.io/jhancock532/pen/MZZMVK/">
  Particle System Template II</a> by James Hancock (<a href="https://codepen.io/jhancock532">@jhancock532</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

# The Everydays

## Day 25 - Refactoring bars.js 1

It's nice to put principles into practice with an actual project. Refactoring takes a lot of time, this underlying code behind this version is almost finished, but no testing or docs created yet, so development still really only half way.

<p class="codepen" data-height="500" data-theme-id="35659" data-default-tab="result" data-user="jhancock532" data-slug-hash="PVZoWO" data-preview="true" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="bars.js V0.1 (Refactoring, Day 1)">
  <span>See the Pen <a href="https://codepen.io/jhancock532/pen/PVZoWO/">
  bars.js V0.1 (Refactoring, Day 1)</a> by James Hancock (<a href="https://codepen.io/jhancock532">@jhancock532</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Day 24 - Learning JavaScript 5
I finished learning about [types](https://javascript.info/types), then moved on to [operators](https://javascript.info/operators) and finally [comparisions](https://javascript.info/comparison). [My notes](https://codepen.io/jhancock532/pen/WPQejX).

### Key Learning Points
- Exponentiation happens with \*\*. Use as a shorthand for Math.sqrt! 16 \*\* (1/2) = 4
- Strings with backticks allow expression insertion, e.g. \`1 + 2 = ${1 + 2}\`
- Strict equality operator === checks if items are equal without type conversion
- null and undefined have there own types, but they equal with ==
- A lot of operators auto convert elements to the right type, "6"/"3" === 2
- Use Boolean(), Number() and String() to convert primitive types.
- Operators have precedence and assoiation rules. a = b = 3 -> a = 3
- Unary + operator converts the type to Number. +"8" === 8
- Prefix ++a increments then assigns, unlike a++ which is lazy

## Day 23 - Learning JavaScript 4

I started reading from the beginning of the [javascript.info](http://javascript.info/) tutorial, and made it to the section on [types](http://javascript.info/types). I've learned some useful fundamentals of the JavaSript language that I had never known before, as well as a killer keyboard shortcut to comment out code. 

My notes can be found [here](https://codepen.io/jhancock532/pen/rPaQXz).

### Key Learning Points
- CoffeeScript, TypeScript, Dart are languages built on JavaScript that get transpiled to JavaScript.
- Press Shift + Enter to enter multiple lines of JavaScript into the FireFox console.
- ```<script type="" language="" ...>``` <-- These tags aren't necessary.
- Add `"use strict";` at the top of your code.
- The console object has a lot more functions than just log.
- The keyboard shortcut, crtl + / auto comments out lines of code (add shift for multiline).
- Hardcoded constants should be written in uppercase with underscores for spaces.
- Dynamically typed just means that variables can hold different types of input.
- Numbers include ints, floating point, `Infinity`, `-Infinity` and `NaN`.

# Week Three Reflection
Ok, coming to do this a day late, but no real harm done.

- **The world is full of possibilities.** There are plenty of meetup groups regarding computer science and other specific frameworks happening around Bristol. I need to make a weekly habit of checking various online posting boards for these events.
- **It's tough, it doesn't always feel good, and it takes a lot of time and effort.** You have good days, you have bad days.
- **Making time is difficult, but it is possible.** This isn't a huge problem yet, but it's going to get more difficult as term starts again. Projects are going to have to extend out over the course of a week, and I may only be able to spend 30 mins developing code in the evenings. Time to start a habit of doing development at fixed times during the week.
- **I need to plan out how I am learning JavaScript.** This study will be a lot more rewarding if I have goals to aim towards, so I can get an overall sense of progress as I complete my study day by day. Found https://javascript.info/, an online course with clear sections. I'll read through these chapters and make notes when I learn new things. It seems to have a good advanced part, which looks very interesting...
- **I must practice what I have learned.** Learning these techniques will only change how I code in JavaScript if I practice using them and build them into my coding projects. I'll work through the javascript.info guide for the most part of the week, then develop new code putting lessons into practice other days of the week. 
- **Understanding JavaScript fundamentals is awesome.** Knowledge is power. It's really satisfying to gain understanding.

## Day 22 - CodePen Recursion 

Recursion in recursion in recursion in recursion (that was about as far as it goes). Spent most of the developing time for this one trying to debug as many levels of recusion as possible. Not a very good coding day, but there's always tomorrow. Speaking of which, I need to write a reflection on this week's work...

<p class="codepen" data-height="500" data-theme-id="35659" data-default-tab="result" data-user="jhancock532" data-preview="true" data-slug-hash="VgwNYN" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CodePen Recusion I">
  <span>See the Pen <a href="https://codepen.io/jhancock532/pen/VgwNYN/">
  CodePen Recusion I</a> by James Hancock (<a href="https://codepen.io/jhancock532">@jhancock532</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Day 21 - Learning JavaScript 3
Learning from...
- [http://javascriptissexy.com/understanding-es2015-in-depth-part-1-block-scope-with-let-and-const/](here)
- [https://www.w3schools.com/js/js_errors.asp](there)
- [https://www.w3schools.com/jsref/jsref_obj_global.asp](everywhere)
My notes are [here](https://codepen.io/jhancock532/pen/dabJob) (note the end of the URL, dabJob).

```
/* KEY LEARNING POINTS
 * Global, function and block scope: Each is the child of the previous.
 * Block scope is defined by a statement then {};
 * let is different from var, it's strict to block scope when var is open to function scope.
 * when let is hoisted it isn't initalized with undefined like var. 
 * try {stuff throw "Custom error"} catch(error) {handle it} finally {no matter what do this}
 */
```

## Day 20 - Learning JavaScript 2
I'll admit, the stuff I'm learning from this pretty interesting. It'll definitely change how I go about my projects in the future.

I read [this](http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/) and [this](//https://hackernoon.com/prototypes-in-javascript-5bba2990e04b) about prototype objects in JavaScript. These two posts were introductions and didn't cover ECMAScript 5, which looks even more interesting. My notes are [here](https://codepen.io/jhancock532/pen/QzezjQ?editors=0012)

```
/* KEY LEARNING POINTS 
 * The prototype is good place to store shared functions / data for objects.
 * The prototype depends on the definition of the object...
  - Object literal / new Object? -> prototype = object.prototype
  - function? -> prototype = constructor (how you defined the function)
  - And there will probably be a __proto__ object tagged on there as well.
 * When searching for an object property, it starts with the object then follows the prototype chain.
 * this in global context references the window object, else it's local context specific.
 */
```

## Day 19 - Learning JavaScript 1
I read [this](http://javascriptissexy.com/javascript-objects-in-detail/) blog post, and made notes [here](https://codepen.io/jhancock532/pen/gZVwMR?editors=0012).
```
/* KEY LEARNING POINTS
 * - JSON.stringify and JSON.parse are pretty useful.
 * - You can delete, iterate through and test the existance of properties. 
 * - delete obj.property, if ("property" in object), object.hasOwnProperty...
 * - You can only iterate through enumerable properties. use "for (var ... in ...)"
 * - Properties are inherited from the prototype (Might be an oversimplification...)
 */
```

## Day 18 - Twitter Simulator

Ok, this. This is getting quite difficult. The quality of the pieces / how I present them is going to take a hit. It's time to step back and reconsider the daily deliverables for this project.

I'm not going to needlessly stress myself out over a goal that I'm setting for myself, especially if doing so means I give up quicker. This is just the start, I've got a long way to go yet, and I'll work things out more as I go along. 

<p class="codepen" data-height="500" data-theme-id="35659" data-default-tab="result" data-user="jhancock532" data-slug-hash="OreBMq" data-preview="true" style="height: 474px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Twitter Simulator">
  <span>See the Pen <a href="https://codepen.io/jhancock532/pen/OreBMq/">
  Twitter Simulator</a> by James Hancock (<a href="https://codepen.io/jhancock532">@jhancock532</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Day 17 - The Enchanted Islands, by Averil Demuth

Putting the particle system template to good use and getting some typography going. Don't have much time for a full project today.

<p data-height="500" data-theme-id="35659" data-slug-hash="xmNxqK" data-default-tab="result" data-user="jhancock532" data-pen-title="The Enchanted Islands, by Averil Demuth" style="height: 521px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-preview="true" class="codepen"><span>See the Pen <a href="https://codepen.io/jhancock532/pen/xmNxqK/">The Enchanted Islands, by Averil Demuth</a> by James Hancock (<a href="https://codepen.io/jhancock532">@jhancock532</a>) on <a href="https://codepen.io">CodePen</a>.</span></p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Day 16 - Learning to Paint IV

This one is a huge mess, but coding it gave me some further ideas... Anyway, we live and learn.

<p data-height="500" data-theme-id="35659" data-slug-hash="jXRwrp" data-default-tab="result" data-user="jhancock532" data-pen-title="Learning to Paint IV" style="height: 476px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-preview="true" class="codepen"><span>See the Pen <a href="https://codepen.io/jhancock532/pen/jXRwrp/">Learning to Paint IV</a> by James Hancock (<a href="https://codepen.io/jhancock532">@jhancock532</a>) on <a href="https://codepen.io">CodePen</a>.</span></p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Day 15 - What's Your Favourite Colour? Internet Survey

Did a CodePen challenge. Tried out serverless coding for the first time. I feel I need to learn more about JavaScript.

<p data-height="500" data-theme-id="35659" data-slug-hash="BvbQrZ" data-default-tab="result" data-user="jhancock532" data-pen-title="What's Your Favourite Primary Colour? Internet Survey" style="height: 377px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-preview="true" class="codepen"><span>See the Pen <a href="https://codepen.io/jhancock532/pen/BvbQrZ/">What's Your Favourite Primary Colour? Internet Survey</a> by James Hancock (<a href="https://codepen.io/jhancock532">@jhancock532</a>) on <a href="https://codepen.io">CodePen</a>.</span></p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

# Week Two Reflection
- **The internet is full of possibilities.** A friend recently introduced me to [glitch.com](https://glitch.com/) a super cool website filled with awesome projects, all hosted for free! Next month I'm going to be making projects on this site, to change things up from CodePen.
- **Splitting projects into chunks is a good idea.** Let's face it, "Learning to Paint I" and a bunch of other projects this week look terrible. The best projects are the end results of those which I've split into parts and built on over several days. I have to accept this and not be so impatient with development. This applies to learning as well - it takes a lot of time to learn how to code, and I'm really only just starting.
- **You have to make pragmatic decisions while coding.** My attempt on day 8 to make the windows popup taught me this, then I learned it properly on day 9. Being limited for time = pragmatic coding.

> "It's courageous developers like Ada, who not only try things out but who share their code and document their process that helps us all appreciate, that everyone, no matter their skill level or experience, have to make pragmatic choices when coding." [glitch.com](https://glitch.com/culture/the-cutting-edge-of-the-web-with-ada-rose-cannon/)

## Day 14 - Particle System Template II
It's good to finish a project. I'm relatively happy with the standard of code in this one, I think it's alright. 

End of week 2! *Nice.*

<p data-height="500" data-theme-id="35659" data-slug-hash="MZZMVK" data-default-tab="result" data-user="jhancock532" data-pen-title="Particle System Template II" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/jhancock532/pen/MZZMVK/">Particle System Template II</a> by James Hancock (<a href="https://codepen.io/jhancock532">@jhancock532</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Day 13 - Particle System Template I
I'm noticing a pattern in how I'm creating some generative art projects - a central simulation class, which holds all the particles and their settings, and then the particle class. This project is an attempt at creating a basic template which has all the essentials for a particle simulation in it. 

The gravity / physics simulation isn't quite right yet, but I like how I'm taking in the dat.GUI object to do all the settings assignment inside the ParticleSystem class - it's nice to be able to encapsulate everything. Those multiline code comments above the functions are super neat, I should add more.

Things I want to try out:
- [webtask.io](https://webtask.io/docs/) for serverless programming sounds **awesome**.
- Get Learning to Paint to do a sketch of a person. 
- Tidy up this project for easy reuse & better default physics. 
- Project Euler. "The programming right of passage"
- Learn a bit of React.

<p data-height="500" data-theme-id="35659" data-slug-hash="MZZjwv" data-default-tab="result" data-user="jhancock532" data-pen-title="Particle System Template I" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/jhancock532/pen/MZZjwv/">Particle System Template I</a> by James Hancock (<a href="https://codepen.io/jhancock532">@jhancock532</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Day 12 - Learning To Paint III
Most of today was spent fixing the maths of yesterday. Everything seems in order now, tomorrow is more parameter fiddling and then development of the Painting class - hopefully!

<p data-height="500" data-theme-id="35659" data-slug-hash="EGOpob" data-default-tab="result" data-user="jhancock532" data-pen-title="Learning to Paint III" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/jhancock532/pen/EGOpob/">Learning to Paint III</a> by James Hancock (<a href="https://codepen.io/jhancock532">@jhancock532</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Day 11 - Learning To Paint II

Developing with a much better flow today. Limited to one hour without qualms, spent at least 20 mins afterwards messing with parameters and watching the results. Making consistent progress, and code quality is steadily increasing. I learned today about the awesomeness of adding really subtle vignettes.

<p data-height="500" data-theme-id="35659" data-slug-hash="aPRezQ" data-default-tab="result" data-user="jhancock532" data-pen-title="Learning to Paint II" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/jhancock532/pen/aPRezQ/">Learning to Paint II</a> by James Hancock (<a href="https://codepen.io/jhancock532">@jhancock532</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Day 10 - Learning To Paint I

It's day three of limiting myself to one hour, and I decided to go about it in a slightly different way - today is part of a much larger project, so I don't have to finish everything in one go. Much more sensible. This is probably how most programmers do it in real life.

The good news is that my code quality has improved a bit now I'm not rushing for time, and I've got a better sense of where to add comments from reading a few guides on it. I've finally started to use the ```class``` constructor in this project, hopefully in two days I'll get to try learning Javascript inheritance as I create a new brush based off the old one. Something new to learn!

<p data-height="500" data-theme-id="35659" data-slug-hash="BvOeJb" data-default-tab="js,result" data-user="jhancock532" data-pen-title="Learning to Paint I" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/jhancock532/pen/BvOeJb/">Learning to Paint I</a> by James Hancock (<a href="https://codepen.io/jhancock532">@jhancock532</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Day 9 - Remembering Interview Questions

After yesterday's disaster of limiting myself to one hour, I decided to do it again. I failed to fully complete the project to the standard I was hoping, but I think I'm improving slightly. I'm learning about the importance of prioritisation and planning - without it, you won't have a complete project by the time it comes to stop. Making design scarifices because of lack of time is definitely an interesting experience, as I usually work until completion. I think I've given myself a good less ambitious project to solve, but it was still not quite possible to do in the hour. The code quality and commenting is still doing quite badly - this is an area I really need to improve in. I'm reading into it tonight.

<p data-height="500" data-theme-id="35659" data-slug-hash="qLyzgW" data-default-tab="js,result" data-user="jhancock532" data-pen-title="Remember the Question! Interview Practice" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/jhancock532/pen/qLyzgW/">Remember the Question! Interview Practice</a> by James Hancock (<a href="https://codepen.io/jhancock532">@jhancock532</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Day 8 - Windows Error Message Pop-Up

I limited myself to one hour to complete this pen - I think I'd need at least twice that to do it properly. I wasted around 10 mins trying to get my imported font to work (it still doesn't). The rest of the time was spent productively, ish - 10 mins on the initial layout and structure of the HTML, and 40 mins of CSS tweaking and constant googling of how to CSS.

The result is poor CSS code structure, nightmare of id tags in the HTML section, and a fire gif where there should be a windows warning icon. I don't think I'll limit myself to only one hour again. 

This has been a great learning experience to reflect on however... 
- You can't rush quality code
- I'm still being far too ambitious with my projects
- Constantly requiring to Google things is limiting my productivity
- A single bug can screw over development quite a lot if you let it
- I really don't know CSS that well, but I guess I know it well enough that I can Google the right things for a passable result
- Finding approprate assests and preparing them for a creative project takes more time than you think
- I just refreshed my memory on a whole bunch of CSS styling in an hour

<p data-height="500" data-theme-id="35659" data-slug-hash="VqdoJx" data-default-tab="css,result" data-user="jhancock532" data-pen-title="Windows Error Message Pop-up" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/jhancock532/pen/VqdoJx/">Windows Error Message Pop-up</a> by James Hancock (<a href="https://codepen.io/jhancock532">@jhancock532</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

# Week One Reflection
 - **My code quality isn't beautiful, but I can make it better.** I know what good code looks like, but I'm not consistently writing to that standard, often due to being in a rush to get the project done / lack of effort. This isn't an acceptable excuse - it is much better to code slowly and create a small project to build on and reuse later, than do a one off large project that nobody cares about.
 - **I'm spending too much time on these projects.** Next week I'll limit myself to one hour only per day. If I can't do a quick project, then I won't be able to sustain doing projects when I'm busier. I'm being too ambitious at the moment.
 - **I should learn the theory behind how to write good comments.** I'm sure I've seen an internet article or two about this, time to read a few and practice better commentary. This can be my project for day 8.
 - **Twitter is better than YouTube, don't spend too long on it though.** Through converting from YouTube to Twitter I'm discovering tons of cool resources. I like being able to support other people doing their everday projects, and there is plenty of inspiration to take from. The bigger the network of everyday folks that I can connect with, the better.
 - **Enough Bootstrap, jQuery is too easy.** Four of my projects have been based on Bootstrap, three of which with heavy jQuery use to make them interactive. Having a few demo sites like this which show I have basic knowledge of how to use Bootstrap/jQuery is useful. I'm ready to move on, I know these frameworks well enough now.
 - **The project I'm most proud of...** is the largest empty square pen. Visualising this algorithm looks super cool, and I got to learn some nice theory while implementing it. I'm definitely doing more algorithms focused pens.
 - **The project I'm least proud of...** is the first atomic design & german grammar tables pen. I wasn't able to implement DRY code, and used a lot of Bootstrap for my atomic and molecular components, so it doesn't really count. The result doesn't look good, and a German grammar teacher on Twitter saw it and helpfully pointed out that I'd been learning my tables the wrong way for three years.

## Day 7 - Beyond Duality - Generative Art
Click in the center of the circle to go beyond duality. The stamps represent peace & diligence. 
I'd say this is the first generative art piece I've made that works on any device size, no matter if you resize. I need to tidy up the work I've done to achieve this and then apply the technique to other projects.

<p data-height="500" data-theme-id="35659" data-slug-hash="vvjXjV" data-default-tab="result" data-user="jhancock532" data-pen-title="Beyond Duality - Generative Art" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/jhancock532/pen/vvjXjV/">Beyond Duality - Generative Art</a> by James Hancock (<a href="https://codepen.io/jhancock532">@jhancock532</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Day 6 - Atomic Design & German Grammar Tables II
The adventures with German grammar continue: you can now test yourself to see how much you've learned. 
From an atomic design perspective, I've developed a handful of organisms, but I really need to use Jekyll or similar to stop copying and pasting them. Perhaps a good step forward is to start messing with Jekyll again? I guess this is a possibility when I finish this month and move outside of CodePen. I'll keep exploring, reading and trying new things in the meantime.

<p data-height="500" data-theme-id="35659" data-slug-hash="bOvOxd" data-default-tab="result" data-user="jhancock532" data-pen-title="Atomic Design with German Grammar II" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/jhancock532/pen/bOvOxd/">Atomic Design with German Grammar II</a> by James Hancock (<a href="https://codepen.io/jhancock532">@jhancock532</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Day 5 - Atomic Design & German Grammar Tables I

I'm learning the basics of atomic design and polishing up on my German grammar at the same time. I'm exploring how I can put the design principles behind atomic design into practice - I haven't read chapter three of the online e-book yet, so I don't have any preconceived notions about best practice. Reading the next two chapters today and resuming development tomorrow.

<p data-height="500" data-theme-id="0" data-slug-hash="bOvjox" data-default-tab="html" data-user="jhancock532" data-pen-title="Atomic Design & German Grammar Tables" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/jhancock532/pen/bOvjox/">Atomic Design & German Grammar Tables</a> by James Hancock (<a href="https://codepen.io/jhancock532">@jhancock532</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Day 4 - Bristol SU Sex & Relationships Survey Results (Interactive!)

An interactive survey results website, built with Bootstrap, jQuery and chart.js. This format of interactive survey, where your answer is highlighted in contrast to others, highlights self comparison, which I don't really like. The instant feedback of results feels like taking an online test, where you could have picked the wrong answer. And it has too much text.

Adding precise numbers of people who are like you, both in the survey and extrapolated out into the general student population, has a slightly more positive effect - you can clearly see you aren't the only one who has picked an option, so you aren't that different to others. The animations and bootstrap styles are alright.

<p data-height="500" data-theme-id="0" data-slug-hash="roJbBj" data-default-tab="result" data-user="jhancock532" data-pen-title="Bristol SU Sex & Relationships Survey Results" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/jhancock532/pen/roJbBj/">Bristol SU Sex & Relationships Survey Results</a> by James Hancock (<a href="https://codepen.io/jhancock532">@jhancock532</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Day 3 - Dynamic Large Square Finder
Finds the largest empty white square in a picture with black pixels. Click "Colour Sizes" to see a visualization of how the algorithm stores data as it runs.

<p data-height="500" data-theme-id="0" data-slug-hash="MZQKMV" data-default-tab="result" data-user="jhancock532" data-pen-title="Dynamic Programming - Largest Empty Square" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/jhancock532/pen/MZQKMV/">Dynamic Programming - Largest Empty Square</a> by James Hancock (<a href="https://codepen.io/jhancock532">@jhancock532</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Day 2 - Abstract Website Generator
Creates a cat-themed, abstract website, built on Bootstrap and jQuery. You can tweak three parameters in the options to get a different result, or simply regenerate a new site with the Create Website button.

<p data-height="500" data-theme-id="0" data-slug-hash="wRprqy" data-default-tab="result" data-user="jhancock532" data-pen-title="Abstract Website Generator" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/jhancock532/pen/wRprqy/">Abstract Website Generator</a> by James Hancock (<a href="https://codepen.io/jhancock532">@jhancock532</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Day 1 - P5JS & dat.GUI Code Template 
A template which has all the basics of P5JS and dat.GUI set up for you, so you can start coding straight away. Comments have been added for beginners.

<p data-height="500" data-theme-id="0" data-slug-hash="maqvax" data-default-tab="js,result" data-user="jhancock532" data-pen-title="P5JS & dat.GUI Template (Beginner)" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/jhancock532/pen/maqvax/">P5JS & dat.GUI Template (Beginner)</a> by James Hancock (<a href="https://codepen.io/jhancock532">@jhancock532</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

# Inspiration and Strategy
This project was [inspired by Beeple](https://vimeo.com/125524216), he's pretty cool.

*What is my definition of an everyday?*

> A digital creative project, either able to stand on its own or a clear section of a boarder creative project, that has been completed in one day before midnight. The work is completed when this repo is updated with the code and a tweet is posted to my Twitter account, including a link to the code and imagery of the result.

> An hour spent learning a framework or coding language, the key takeaways from which are neatly summurised into learning points. These learning points can then be taken and used to change development practice while coding digital creative projects.

*How will I improve my skills through this project?*

> I'll perform regular weekly reflections on the work I completed in the past week. These shall be focusing on what projects worked well and what didn't work so well. I'll also be looking at the skills I employed within the projects - do I think I've improved in these areas? How will I test my skills to see what I've learned? What skills am I currently lacking as a developer?
