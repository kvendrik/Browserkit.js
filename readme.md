Browserkit.js
=============

Browserkit.js is a small JavaScript library that makes some of the things that you use frequently in JavaScript easier and faster.

Why you should use Browserkit? I'm not saying you should. Every library has its pros and cons, my goal for Browserkit is to create a library that helps create high quality projects faster and easier.

To do this I try to identify the things I find myself doing frequently, then make a method to be able to to it quicker and then optimise the code using benchmarks to try to get the best performance out of it.

## What versions can I use?
Browserkit.js has stable versions and unstable ones. The stable versions have been browser tested and benchmarked and the unstable ones are versions that can for example contain untested new methods.

In case you're interested in using Browserkit I recommand you keep a local copy of a stable version. The newest stable version can be found in the master branch. The unstable version of the library lives in the develop branch.


## Browser support
The stable version of Browserkit is tested the following browsers:
* Opera: 17, 20
* Chrome: 22, 30
* Safari: 5.1
* FF: 22, 27
* IE: 8, 9, 10
* Android: 2.3, 4.0, 4.1, 4.2
* iOS: 6, 7
* Opera Mobile


## Usage
1. Grab the code from the dist/ folder and save it as a local copy
2. Include it in your project
````
<script src='browserkit.min.js'></script>
````

## Syntax
Browserkit uses a syntax that is quite simular to other libraries:
```
B('.kitten').addClass('is-cute');
```
Also chaining is possible:
```
B('.kitten').addClass('has-bal').removeClass('is-mean').click(function(){
	alert('Awh, thats cute!');
});
```

Elements can easily be selected using their index:
```
B('.kitten')[0];
```

## Performance
Below you'll find some benchmarks done with Browserkit for your consideration

* http://jsperf.com/zepto-vs-jquery-selectors/33
* http://jsperf.com/browserkit-vs-jquery-benchmarks
* http://jsperf.com/browserkit-selector-tests


## Methods

#### find(*selector*)
Finds a element inside the element specified in `B()`.

**selector** *(string)* <br>
A CSS selector. The selector works the fastest when only specifing a class or tag name.

```
B('.area').find('article');
```

---

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
B('.kitten').each(function(el){
	el.setAttribute('style', 'color: green');
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

#### B.forEach(*object*, *handler*)
Loop through all the properties or indexes in an array or object

**object** *(object/array)*
Object or array to loop through

**handler** *(function)* <br>
Function to run on each iteration. Accepts three parameters: `value` to which the current value is send, `index` to which the current index or property is send and `object` to which the array or object that is currently being looped through is send.

Those specific parameters are there because for arrays the function uses the native `Array.prototype.forEach`. For objects it uses a custom solution.

**Example**
``````
B.each({ name: "Koen", age: 20 }, function(value, property, object){
	console.log(object+'["'+property+'"] = '+value);
	//{ name: "Koen", age: 20 }["name"] = "Koen"
	//{ name: "Koen", age: 20 }["age"] = 20
});
``````

---

#### B.extend(*targetObject*, *object1*, *objectN*)
Extends an object with one or multiple other objects

**targetObject** *(array)* <br>
The object that is extended.

**object1** *(object)*
Object to extend the `targetObject` with.

**objectN** *(object)*
An unlimited number of other objects to also extend the `targetObject` with.

**Example**
``````
B.extend({name: 85, city: 'Nijmegen'}, {name: 21}, {name: 55, age: 21});
//{"name": 55, "city": "Nijmegen", "age": 21}
``````

---

#### B.setInterval(*handler*, *delay*)
A safer alternative to the native setInterval function. Have a look over [here](http://zetafleet.com/blog/why-i-consider-setinterval-harmful) for more info on why this is necessary.

**handler** *(function)* <br>
A function to run each time after the given delay

**delay** *(number)* <br>
The delay in milliseconds