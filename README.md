Timer App

    This project is a countdown timer built using HTML, CSS, and JavaScript. 
    Users can select hours, minutes, and seconds using dropdown inputs and start the timer. 
    The timer decreases every second and updates the display in real time.

Core Functionality

    The application allows users to set time values and start the countdown.
    The timer updates every second using setInterval.
    When the timer reaches zero, it stops automatically and displays a message.
    Users can reset the timer or resume from the paused state.

User Controls

    Start button initializes the timer with selected values.
    Reset button clears all values and stops the timer.
    Resume button pauses the current countdown and allows restarting from the same values.

Time Logic

    The timer works by decreasing seconds first.
    When seconds reach zero, minutes are reduced and seconds reset to 59.
    When minutes reach zero, hours are reduced and minutes reset to 59.
    When all values reach zero, the timer stops and shows a time up message.

Display Behavior

    Time is always shown in two digit format.
    A leading zero is added for single digit values.
    The display updates dynamically every second.

Design and Styling

    The interface uses gradient background animation.
    The timer display is styled with large digits for visibility.
    Buttons include hover effects and scaling animations.
    The layout is responsive and adapts to smaller screens.

Project Structure

    index.html contains the structure and inputs
    style.css contains layout, animations, and responsive design
    script.js contains timer logic and event handling

Author:
Vikas
