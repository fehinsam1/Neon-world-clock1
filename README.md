# 
Neon World Clock

A single file world clock that runs in a browser on any phone or computer, and can also serve as the core page for an Electron desktop application. The clock presents a neon appearance with smooth motion, a breathing glow, a rainbow trail for the second hand, and a complete list of IANA time zones.

Overview

The Neon World Clock is built as one self contained HTML document. All styling and script logic are included inside the file, along with the full set of IANA time zones. This allows the clock to run without any external network request. You can open the page in a browser, or embed it in an Electron shell to create a desktop program.

Features

Smooth frame based movement for all hands

Rainbow comet trail for the second hand

Slow colour drift for the hour and minute hands

Breathing ambient glow that follows the hour hand

Rotating light sweep across the face

Gentle reflection on marks and numbers

Idle dim effect and brighter state when the user interacts

Complete time zone list for worldwide selection

Works on phones, tablets, laptops and desktop systems


How to Use

1. Unzip the project file.


2. Open the file named neon world clock.html in any modern browser.


3. Select a region through the search field to change the displayed time.


4. Add a place to the saved list if you want quick access.



Running as a Desktop Application

If you want to turn this into a desktop program, create a new folder and place three files inside it.

1. The neon world clock HTML file.


2. A file named main.js containing a simple Electron loader.


3. A package.json file to describe the application.



Install Electron through the usual method. Then start the program from the command line. The application will show the same clock in its own window.

Editing the Project

All code is contained in one document. If you wish to change colours, timing values or animation behaviour, open the HTML file in a text editor and search for the relevant sections. The time zone list is also stored directly inside the script section.

Notes

The clock does not require any server or library. Everything is processed on the device that opens the file. It is safe to use offline.

