Browserkit.js
=============

###A customisable & lightweight mini library (3kb) that polyfills often used methods and makes them faster in use

Browserkit is a customisable and lightweight mini library (3kb minified) for small to medium sized web projects which can help save loads of time by making things like getting elements and handling classes and events fast and easy (cross-browser).

When your project is ready to go live you can remove the methods you don't use from Browserkit easily so your users only load what is actually being used.

**Browser support:** All that have been tested so far including IE6 and Android 1.5.

*Feedback is always welcome. Let me know what you think or if you notice anything. :)*

##Usage

1. Include `browserkit.min.js` in your project
2. Start coding! :)

###Syntax

Browserkit uses a syntax that is quite simular to other libraries:

    B('section.kitten').addClass('is-cute');

Also chaining is possible:

	B('section.kitten').addClass('has-bal').removeClass('is-mean').click(function(){
		alert('Awh, thats cute!');
	});

And elements can easily be selected using the `el` variable:

	var kittenArea = B('section.kitten').el;

*Note: Selecting elements using `document.querySelector`(which Browserkit polyfills) is currently faster than using the `el` variable*


##Features

###Methods

####Classes

| Method      | Arguments   |
|-------------|:-----------:|
| addClass    | *('class')* |
| removeClass | *('class')* |
| toggleClass | *('class')* |

####Events

| Method      | Arguments              |
|-------------|:----------------------:|
| addEvent    | *('event', handler())* |
| detachEvent | *('event', handler())* |

####Custom events

| Method      | Arguments     | Notes |
|-------------|:-------------:|:-----:|
| click       | *(handler())* | Uses (Google) [FastButton](https://github.com/kvendrik/google_fastbutton/blob/master/google-fastbutton.js) in case it exists |
| resizeEnd   | *(handler())* |


###Polyfills

Methods are polyfilled in their original object, which means they are available from anywhere in your code, in any browser supported by Browserkit! ;)

* document.querySelector
* document.getElementsByClassName
* Array.indexOf


##Customisation

###Changing the Browserkit variable
The Browserkit object is by default stored in a variable named `B` which can easily be changed at the bottom of the Browserkit.js file.

###Removing functionality
Browserkit allows you to easily remove what you don't use to make the file as small as possible before your web project goes live.

Note that when removing methods you don't need you should make sure not to remove methods other methods you do need are using. You can find out if any other methods are using it by simply doing a quick search for the method name.