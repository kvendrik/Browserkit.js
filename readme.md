#Browserkit.js
##A customisable mini library

Browserkit is a customisable mini library for small to medium sized web projects which can help you save loads of production time without having to load functions your project doesn't use in the final product.

Libraries are great but when you import one it has to be worth the payload it gives to your project. In small to medium sized web projects this can be a problem. Bigger libraries like jQuery(32kb) often have more functionality than you actually need and removing what you don't need can get rather complicated.

This is why I started making Browserkit which largly speeds up your production time by polyfilling the `querySelector`, providing cross-browser functionalities to handle classes and events and more. It is nice, small(3kb) and is easily customisable so you can fully adjust it to what your web project needs and throw out what you don't need when your project goes live.

**Browser support:** IE6, Android 1.5, do I continue?


##Usage

Using Browserkit is simple, include it in your project and get cracking.


##Syntax

The syntax Browserkit uses is quite simular to other libraries.

	B('section.kitten').addClass('is-cute');


##What it includes

###Functions

* Classes
	* addClass
	* removeClass
	* toggleClass

* Events
	* addEvent
	* removeEvent

* Custom events
	* resizeEnd
	* click *- uses Google fastbutton if FastButton method available*


###Polyfills

Next to a bunch of functions Browserkit also includes polyfills and instead of keeping them only available in its own object it polyfills them in their original state. Which means functions like `Array.indexOf` are avialable from anywere in your code, hooray!

* document.querySelector
* Array.indexOf
* document.getElementsByClassName


**Feature requests are always welcome. Let me know what you would like to see in Browserkit!**


##Customizing

###Changing the `B` variable
The Browserkit object is stored in a variable named `B` by default which can easily be changed at the bottom of the Browserkit.js file.

###Removing functionality
Browserkit is assambled in a simple way which allows you to easily remove what you don't use to prepare your web project for production.

When removing functions from 


