## 409.- 50 Projects 50 Days - Sound Board

### What was the project about?

The project is part of the 50 Projects in 50 Days with Brad Travesy via Udemy. The course is a code-a-long to further cement skills used within HTML, CSS, and Vanilla JavaScript.

This particular project was to make a simple sound board. It is more of a 'fun' project which was to highlight some different JavaScript methods.

[Sound Board](https://totallysly.github.io/409.-50PROJECTS50DAYS--sound-board/)

#### CSS

This wasn't a heavy CSS project. In fact, it was rather basic and I didn't learn anything new here.

#### JavaScript

This felt like a more advanced level of JavaScript (compared to what I have previously used within the course and in a couple of my projects.

It used an **array** to store the names of each sound, which was then looped through and the buttons within the HTML by using `.createElement('button')` method, and then adding the class of `'btn'` which was styled within the CSS. These were then added to the HTML document using the `.appendChild()` method.

This is a clever way of adding HTML using JavaScript. Without having to type out 'X' amount of buttons within the HTML document.

Also, what I liked was that the **array** stored the names of the IDs created within the HTML. So within the `document.getElementbyID(sound)` method was used. The sound was whichever sound was looped through within the array, which stored the names of the IDs.

Below is the code used with my own comments trying to further explain each line of code.

    // An array of the names of the sounds from the HTML
    const  sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

    // A forEach loop around the above array, which is used to create a Button Element as well the CSS styling.
    sounds.forEach((sound) => {
    	const  btn = document.createElement('button')
    	btn.classList.add('btn')

    // The innerText is created from looping through the array.
    	btn.innerText = sound

    // For each of the btns we require an event listener which will stop the sound if the user clicks on a new button.
    	btn.addEventListener('click', () => {
    		stopSongs()

    // The Id is reached as it is the name of each of the IDs that was created within the HTML, stored in an array and looped through
    		document.getElementById(sound).play()
    	})

    //This ADDS the buttons and the btn styling into the HTML.
    	document.getElementById('buttons').appendChild(btn)
    })

    // The Function is created to stop the song when the user clicks on the new button.
    function  stopSongs() {
    	sounds.forEach((sound) => {

    	// As with line 17, the IDs have been stored within the Sounds Array and looped through. That is how each of the HTML ID names are read and manipulated via the DOM.
    	const  song = document.getElementById(sound)
    		song.pause()
    		song.currentTime = 0
    	})
    }

> Written with [StackEdit](https://stackedit.io/).
