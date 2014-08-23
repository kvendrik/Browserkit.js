Browserkit.js
=============

Browserkit.js is a small JavaScript library that makes some of the things that you use frequently in JavaScript easier and faster.

Why you should use Browserkit? I'm not saying you should. Every library has its pros and cons, my goal for Browserkit is to create a library that helps create high quality projects.

To do this I try to identify the things I find myself doing frequently, then make a method to be able to to it quicker and then optimise the code using benchmarks to try to get the best performance out of it.

## What versions can I use?
Browserkit.js has stable versions and unstable ones. The stable versions have been browser tested and benchmarked and the unstable ones are versions that can for example contain untested new methods.

In case you're interested in using Browserkit I recommand you keep a local copy of a stable version. The newest stable version can be found in the [releases](https://github.com/kvendrik/Browserkit.js/tree/master/releases) folder. The unstable versions of the library can be found in de [_dev > sandbox folder](https://github.com/kvendrik/Browserkit.js/tree/master/_dev/sandbox).


## Browser support
At the top of every Browserkit file you'll find notes. In these notes you can find information including all the tested and theirfor supported browsers for that specific release.


## Usage
1. Grab the code of one of the releases and save it as a local copy
2. Include it in your project
````
<script src='browserkit.min.js'></script>
````

## Syntax
Browserkit uses a syntax that is quite simular to other libraries:

    B('.kitten').addClass('is-cute');

Also chaining is possible:

	B('.kitten').addClass('has-bal').removeClass('is-mean').click(function(){
		alert('Awh, thats cute!');
	});

Elements can easily be selected using their index:

	var el = B('.kitten')[0];


## Performance
Below you'll find some benchmarks done with Browserkit for your consideration

* http://jsperf.com/zepto-vs-jquery-selectors/33
* http://jsperf.com/browserkit-vs-jquery-benchmarks
* http://jsperf.com/browserkit-selector-tests


## Methods

#### addClass(*class*)
Adds a class to a HTML element

**class** *(string)* <br>
The class you'd like to add

---

#### removeClass(*class*)
Removes a class from a HTML element

**class** *(string)* <br>
The class you'd like to remove

---

#### toggleClass(*class*)
Toggles a class on a HTML element

**class** *(string)* <br>
The class you'd like to toggle

---

#### on(*event*, *handler*)
Adds a event listener to a HTML element

**event** *(string)* <br>
Name of the event you'd like to listen on

**handler** *(function)* <br>
Handler for after the event emitted

---

#### off(*event*, *handler*)
Removes a event listener from a HTML element

**event** *(string)* <br>
Name of the event you'd like to remove the listener from

**handler** *(function)* <br>
Handler of the original event listener

---

#### click(*handler*)
Adds a click event listener to a HTML element

**handler** *(function)* <br>
Handler for after the click emitted

**Notes** <br>
Uses Google fastbutton if `window.FastButton` is found on page load

---

#### resizeEnd(*handler*)
Adds a resizeEnd event listener to an element

**handler** *(function)* <br>
Handler for when the resize ends

---

#### each(*handler*)
Loop through all the found elements

**handler** *(function)* <br>
Function to run on each iteration. Accepts parameter it sends to current element to.

**Example**
``````
B('.kitten').each(function(i){
	i.setAttribute('style', 'color: green');
});
``````

---

#### serialize()
Converts the data of a given form into a query string

---

#### B.ajax(*settings*)
Gets/posts data from/to a file and passes the result on to a callback function

**settings** *(object)* <br>
``````
{
	url: 'lib/post.php', //Url to the file
	type: 'POST', //Type of the request, default is GET
	data: 'animal=kittens&cute=true', //Url encoded data string
	dataType: 'json', //Type of the returned data. Currently only accepts `json`, anything else will just be returned as a string.
	success: function(data){ //Callback function. Accepts parameter it binds the data to.
		document.body.innerHTML += data;
	}
}
``````

---

#### B.getJSON(*url*, *handler*)
Gets JSON from a file and passes it on to a callback function

**url** *(string)* <br>
Url to the file you'd like to receive the JSON from

**handler** *(function)* <br>
Callback function. Accepts parameter it binds the data to.

---

#### B.each(*object*, *handler*)
Loop through all the properties or indexes in an array or object

**handler** *(function)* <br>
Function to run on each iteration. Accepts parameter it sends to current property or index to.

**Example**
``````
B.each({ name: "Koen", age: 20 }, function(i){
	console.log(i, { name: 'Koen', age: 20 }[i]);
	//name Koen
});
``````

---

#### B.merge(*objects*)
Merges an array of objects and returns the resulting object

**objects** *(array)* <br>
Array of objects that should be merged

**Example**
``````
B.merge( [{ name: "Koen", age: 20 },{ city: "Nijmegen" }, { age: 25 }] );
//{ name: "Koen", age: 25, city: "Nijmegen" }
``````

---

#### B.setInterval(*handler*, *delay*)
A safer alternative to the native setInterval function. Have a look over [here](http://zetafleet.com/blog/why-i-consider-setinterval-harmful) for more info on why this is necessary.

**handler** *(function)* <br>
A function to run after the given delay

**delay** *(number)* <br>
The delay in milliseconds