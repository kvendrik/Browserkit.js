Browserkit.js
=============

**Check out the full documentation [on the website](http://browserkitjs.com)**

Browserkit.js is a **customisable and lightweight mini library**. I created Browserkitjs for use in small to medium sized web projects were I wasn't using any bigger libraries like jQuery. It makes things like getting elements and handling classes and events cross-browser much faster and easier.

A very important aspect of Browserkitjs is that you can **remove what you don't need**, in contrast to bigger 
libraries like were your end user loads a lot of methods they don't need.
This way your end-user will only load what is actually being used on the page and nothing else.

[Get started!](http://browserkitjs.com/docs/setup)

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

*Note that selecting elements using `document.querySelector`(which Browserkit polyfills) is currently faster than using the `el` variable*
