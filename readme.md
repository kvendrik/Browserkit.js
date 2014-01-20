Browserkit.js
=============

###A customisable & lightweight mini library (3kb) that makes often used functionalities fast and easy

Browserkit is a customisable and lightweight mini library (3kb minified) for small to medium sized web projects which can help save loads of time by making things like getting elements and handling classes and events fast and easy (cross-browser).

When your project is ready to go live you can remove the methods you don't use from Browserkit easily so your users only load what is actually being used.

**Browser support:** All that have been tested so far including IE6 and Android 1.5.

*Feedback is always welcome. Let me know what you think or if you notice anything. :)*

##Usage

Using Browserkit is simple, include it into your project and start coding. :)

###Syntax

The syntax Browserkit uses is quite simular to other libraries:

	B('section.kitten').addClass('is-cute');

Oh, also try chaining some:

	B('section.kitten').addClass('has-bal').removeClass('is-mean').click(function(){
		alert('Awh, thats cute!');
	});

Elements can also be selected:

	var kittenArea = B('section.kitten').el;


##Features

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

Methods are polyfilled their original object, which means they are available from anywhere in your code, in any browser, hooray!

* document.querySelector
* Array.indexOf
* document.getElementsByClassName


##Customisation

###Changing the `B` variable
The Browserkit object is by default stored in a variable named `B` which can easily be changed at the bottom of the Browserkit.js file.

###Removing functionality
Browserkit allows you to easily remove what you don't use to make the file as small as possible before your web project goes live.

When removing methods you don't need from the Browserkit object make sure not to remove a funcitonality other methods you do use are using. 

If you would for example want to remove the `addEvent` method. Do a quick search for `addEvent`. You'll notice that the `click` method is using it. Its good to note that the `click` method might not work correctly after you removed `addEvent`.


