Browserkit.js
=============

Browserkit.js was created for use in small to medium sized web projects were I wasn't using any bigger libraries like jQuery. It makes things like getting elements and handling classes and events cross-browser much faster and easier.

Why I use my own library? Because every code has it's pros and cons, native JavaScript does and so do jQuery and Browserkit.js.

The advantige of using my own library is that whenever I find out about something I'd like to improve I can throw a fix in Browserkit.js so future projects will include these improvements.

###Can I Use This?
In case you're interested in using Browserkit.js and wondering if you can and if its stable, the answer is; yes you can and yes it is. The root contains all the stable versions. The unstable version that is under development can be found in de _dev > sandbox folder.

I appriciate any kind of feedback so let me know what you think. :)

###Methods
A list of all the methods can be found in the [_dev > sandbox > src folder](https://github.com/kvendrik/Browserkit.js/tree/master/_dev/sandbox/src).

###Browser support
Previously Browserkit.js supported browser up to IE6 and 7 but due to all the polyfills required for about 1% of the world who still uses IE7 I decided to drop the support for those browsers and move up to the support I also give my web projects; **IE8+ and Android 2.3+**.

##Usage

1. Include `browserkit.min.js` in your project
    <script src='browserkit.min.js'></script>

2. That's all! Here's a picture of a kitten: [Sleepy Kitten](http://cutestuff.co/wp-content/uploads/2012/12/kitten_gif.gif)

###Syntax

Browserkit uses a syntax that is quite simular to other libraries:

    B('section.kitten').addClass('is-cute');

Also chaining is possible:

	B('section.kitten').addClass('has-bal').removeClass('is-mean').click(function(){
		alert('Awh, thats cute!');
	});

Elements can easily be selected using the `el` variable:

	var kittenArea = B('section.kitten').el;

*Note that selecting elements using `document.querySelector`(which Browserkit polyfills) is currently faster than using the `el` variable*
