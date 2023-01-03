// An array of the names of the sounds from the HTML
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

// A forEach loop around the above array, which is used to create a Button Element as well the CSS styling.
sounds.forEach((sound) => {
    const btn = document.createElement('button')
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
function stopSongs() {
    sounds.forEach((sound) => {
        // As with line 17, the IDs have been stored within the Sounds Array and looped through. That is how each of the HTML ID names are read and manipulated via the DOM.
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0
    })
}
