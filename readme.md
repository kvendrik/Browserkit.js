Browserkit.js [![Travis Build Status](https://travis-ci.org/kvendrik/Browserkit.js.svg?branch=master)](https://travis-ci.org/kvendrik/Browserkit.js "Browserkit.js on Travis CI")
=============

Browserkit.js is a small JavaScript library that makes some of the things that you use frequently in JavaScript easier and faster.

Why you should use Browserkit? I'm not saying you should. Every library has its pros and cons, my goal for Browserkit is to create a library that helps create high quality projects faster and easier.

To do this I try to identify the things I find myself doing frequently, then make a method to be able to to it quicker and then optimise the code using benchmarks to try to get the best performance out of it.

## What versions can I use?
Browserkit.js has stable versions and unstable ones. The stable versions have been browser tested and the unstable ones are versions that can for example contain untested new methods.

In case you're interested in using Browserkit I recommand you keep a local copy of a stable version. The newest stable version can be found in the master branch. The unstable version of the library lives in the develop branch.


## Browser support
The stable version of Browserkit has been tested in the following browsers:
* Opera: 17, 20
* Chrome: 22, 30
* Safari: 5.1
* FF: 20, 27
* IE: 9, 10
* Android: 2.3, 4.0, 4.1, 4.2 (Native browser)
* iOS: 6, 7 (Native browser)
* Opera Mobile


## Usage
1. a. Grab the code from the dist/ folder and save it as a local copy <br>
   b. Grab the code using `bower install browserkit.js`
2. Include it in your project
````
<script src='browserkit.min.js'></script>
````

Next to using the whole library it is also possible to create custom builds that only include the methods you need for a particular project. For more info on how to do this please have a look at the [Custom Builds](#custom-builds) section of this page.

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
Finds a element inside the element specified in `B()`

**selector** *(string)* <br>
A CSS selector. The selector works the fastest when only specifing a class or tag name and not both.

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
Adds an event listener to a HTML element

**event** *(string)* <br>
Name of the event you'd like to listen on

**handler** *(function)* <br>
Handler for when the event triggers

---

#### off(*event*, *handler*)
Removes an event listener from a HTML element

**event** *(string)* <br>
Name of the event you'd like to remove the listener from

**handler** *(function)* <br>
Handler of the original event listener

---

#### click(*handler*)
Adds a click event listener to a HTML element

**handler** *(function)* <br>
Handler for when the element is clicked

**Notes** <br>
Uses Google fastbutton if `window.FastButton` is found on page load

---

#### resizeEnd(*handler*)
Adds a resizeEnd event listener to an element (usually `window`)

**handler** *(function)* <br>
Handler for when the resize ends

---

#### each(*handler*)
Loops through all the found HTML elements and invokes the handler on each iteration

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
#### scrollTop([*newY*])
Get the vertical scroll position of an element or scroll the element to the given Y position. Returns either the vertical scroll position of the element or the Browserkit object.

**newY** *(number)* <br>
Y value to scroll the element to.

**Example**
``````
B('#scrollcheck').scrollTop(100);
B('#scrollcheck').scrollTop(); //100
``````

---

#### B.ajax(*settings*)
Gets/posts data from/to a file and passes the result on to a callback function

**settings** *(object)* <br>
* url - *URL to send the request to*
* [type] - *Type of the request, accepts POST, PUT, DELETE or GET, defaults to GET*
* [data] - *URL encoded data string or json*
* [dataType] - *Type of the data we get back from the server. Defaults to plain text.*
* [success] - *Callback function. Accepts parameter it binds the data to and XMLHttpRequest object to.*

**Example**
``````
B.ajax({
	url: 'lib/post.php',
	type: 'POST',
	data: 'animal=kittens&cute=true',
	dataType: 'json',
	success: function(data, xhr){
		document.body.innerHTML += data;
	}
});
``````

---

#### B.getJSON(*url*, *handler*)
Gets JSON from a file and passes it on to a callback function

**url** *(string)* <br>
Url to the file you'd like to receive the JSON from

**handler** *(function)* <br>
Callback function. Accepts parameter it binds the data to.

**Notes**
Basically a shorthand for:
```
B.ajax({
	dataType: 'json',
	url: url,
	success: handler
});
```

---

#### B.forEach(*object*, *handler*)
Loop through all the properties or indexes in an array or object

**object** *(object/array)* <br>
Object or array to loop through

**handler** *(function)* <br>
Function to run on each iteration. Accepts three parameters: `value` to which the current value is send, `index` to which the current index or property is send and `object` to which the array or object that is currently being looped through is send.

Those specific parameters are there because for arrays the function uses the native `Array.prototype.forEach`. For objects it uses a custom solution.

**Example**
``````
B.forEach({ name: "Koen", age: 20 }, function(value, property, object){
	console.log(object+'["'+property+'"] = '+value);
	//{ name: "Koen", age: 20 }["name"] = "Koen"
	//{ name: "Koen", age: 20 }["age"] = 20
});
``````

---

#### B.extend(*targetObject*, *object1*[, *objectN*])
Extends an object with one or multiple other objects. Returns the new object.

**targetObject** *(array)* <br>
The object that is extended.

**object1** *(object)* <br>
Object to extend the `targetObject` with.

**objectN** *(object)* <br>
An unlimited number of other objects to also extend the `targetObject` with.

**Example**
``````
B.extend({name: 85, city: 'Nijmegen'}, {name: 21}, {name: 55, age: 21});
//{"name": 55, "city": "Nijmegen", "age": 21}
``````

---

#### B.setInterval(*handler*, *delay*)
A safer alternative to the native setInterval function. Returns an interval id.

**handler** *(function)* <br>
A function to run each time after the given delay.

**delay** *(number)* <br>
The delay in milliseconds.

---

#### B.clearInterval(*intervalId*)
Clear an interval you've set with `B.setInterval`

**intervalId** *(number)* <br>
The id of the interval you'd like to clear.

---

## Custom Builds
After you either cloned this repository to your computer or downloaded Browserkit using `bower` you are able to create custom builds using Browserkit's `grunt custom` task.

Let's say we worked on a small project in which we used the complete Browserkit library. Now everything is almost done and all that is left for us to do is minimizing the data as much as possible.

Looking through our JavaScript it seems we are only using the `click`, `ajax` and `toggleClass` methods.

Using `grunt custom` we can create a build that only includes these methods and their dependencies and leaves out all the other methods we don't need for our project. This can save us a good amount of data.

Be aware that the parameters we need to pass to the task are not the methods but the files we want to include.

* `click` can be found in custom-eventlisteners.js
* `ajax` can be found in ajax.js
* `toggleClass` can be found in classes.js

So let's create our custom build:

```
grunt custom:custom-eventlisteners,ajax,classes
```

Which generates the following output:

```
`eventlisteners` dependency added
>> `custom-eventlisteners` methods added
>> `ajax` methods added
>> `classes` methods added

temporary file deleted
>> custom build created in dist/
```

Tadaaaa, A minified custom build has been created in dist/ which is ready to be used in your project.

##License
Browserkit is licensed under a BSD-2-Clause license.

```
Copyright (c) 2014, Koen Vendrik
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice,
   this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
DAMAGE.
```
