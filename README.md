WebKeyBoard
===========
Demo
====
http://squarific.github.io/WebKeyBoard/demo.html
How To Use
==========
`
	var input = document.getElementById("input"); //Input has to be some dom element at which to dispatch keypress events
	var keyboard = new WebKeyBoard(input[, settings[, keyboardlayout]]);
`

Keyboardlayout
==============
The default layout is something based off of the azerty layout. To define your own layout you have to follow the following style:

Example (default):

Special Keys
============
The following special keys are defined by default:

Defining your own
=================
You can define your own special keys in the following way:
