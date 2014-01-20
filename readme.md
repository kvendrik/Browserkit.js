#Browserkit.js

Browserkit is a customisable mini library(3kb) for small to medium sized web projects which helps you save loads of production time by making things like getting and handling elements fast and easy without having to load big javascript files with methods your project doesn't need.

**Browser support:** All that have been tested so far. Including: IE6, Android 1.5, do I continue?

**Feature requests are always welcome! Let me know what you think!**

##Usage

Using Browserkit is simple, include it in your project and start coding.


##Syntax

The syntax Browserkit uses is quite simular to other libraries:

	B('section.kitten').addClass('is-cute');

And try chaining some:

	B('section.kitten').addClass('has-bal').removeClass('is-mean').click(function(){
		alert('Awh, thats cute!');
	});


##What it includes

###Methods

* Classes
	* addClass
	* removeClass
	* toggleClass

* Events
	* addEvent
	* removeEvent

* Custom events
	* resizeEnd
	* click *- uses Google fastbutton if the [FastButton object](https://github.com/kvendrik/google_fastbutton/blob/master/google-fastbutton.js) exists*


###Polyfills

Instead of keeping the polyfills Browserkit uses only available within its own object it polyfills them in their original state. Which means methods like `Array.indexOf` are available from anywhere in your code, in any browser.

* document.querySelector
* Array.indexOf
* document.getElementsByClassName


##Customisation

###Changing the `B` variable
The Browserkit object is by default stored in a variable named `B` which can easily be changed at the bottom of the Browserkit.js file.

###Removing functionality
Browserkit allows you to easily remove what you don't use to make the file as small as possible before your web project goes live.

When removing methods you don't need from the Browserkit object make sure not to remove a funcitonality other methods you do use are using. 

If you would for example want to remove the `addEvent` method because you are not using it. You would find out, after a quick search, that the `click` method is using it. Which is fine as long as you are not using this either.


