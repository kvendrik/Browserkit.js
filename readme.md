Browserkit.js
=============

**Check out the full documentation [on the website](http://browserkitjs.com)**

Browserkit.js is a customisable and lightweight mini library (3kb minified) I created for use in small to medium sized web projects were I'm not using any bigger libraries like jQuery to make things like getting elements and handling classes and events cross-browser faster and easier.

It allows you to remove methods you don't need easily so your users only load what they actually need.

When your project is ready to go live you can remove the methods you don't use from Browserkit easily so your users only load what is actually being used.

###Browser support
All browsers tested so far are supported, including:

**Desktop:** IE5(IE10 document mode), IE6+, Firefox 3+, Safari 4+, Chrome 14+, Opera 10.6+.

**Mobile:** iOS 3+, Android 1.5+, Opera Mobile.

*Feedback is always welcome. Let me know what you think or if you notice anything. :)*

##Usage

1. Include `browserkit.min.js` in your project
    <script src='browserkit.min.js'></script>

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
