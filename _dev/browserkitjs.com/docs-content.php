<?php

	$docs_nav = array(

			'General'	=>	array(

				"Why use this?" => 'why-use-this',
				'Setup'	=>	'setup',
				'Syntax' => 'syntax',
				'Browser Support'	=>	'browser-support',
				'Customisation'	=>	'customisation',
				'License' => 'license'

			),

			'Methods' => array(

				'Classes'	=>	array(

					'addClass'	=>	'addclass',
					'removeClass'	=>	'removeclass',
					'toggleclass'	=>	'toggleclass'

				),

				'Events'	=>	array(

					'addEvent'	=>	'addevent',
					'detachEvent'	=>	'detachevent'

				),

				'Custom Events'	=>	array(

					'Click'	=>	'click',
					'resizeEnd'	=>	'resizeend'

				),

				'AJAX'	=>	array(

					'ajax'	=>	'ajax',
					'serialize'	=>	'serialize',
					'parseJSON' => 'parsejson'

				)

			),

			'Other Polyfills' => array(

				'querySelector'	=>	'queryselector',
				'querySelectorAll'	=>	'queryselectorall',
				'getElements<br>ByClass Name' => 'getelementsbyclassname',
				'Array.indexOf' => 'array-indexof'

			)

	);

	$docs_arguments = array(

		'element' =>	array(
				'name'	=>	'Element',
				'type'	=>	'HTML Element or String',
				'description'	=>	'HTML element the method should be applied on or the query selector that can be used to find this element'
		),

		'class-name' =>	array(
			'name'	=>	'Class Name',
			'type'	=>	'String',
			'description'	=>	'Name of the class'
		),

		'event'	=>	array(
			'name'	=>	'Event',
			'type'	=>	'String',
			'description'	=>	'Name of the event you want to add a listener for'
		),

		'handler'	=>	array(
			'name'	=>	'handler',
			'type'	=>	'Function',
			'description'	=>	'Will be executed when the given event is detected'
		),

		'selector'	=>	array(
			'name'	=>	'Selector',
			'type'	=>	'String',
			'description'	=>	"The <a href='https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors' alt='CSS Selectors Information'>CSS selector</a> that can be used to find the HTML elements"
		),

		'search'	=>	array(
			'name'	=>	'Search',
			'type'	=>	'String',
			'description'	=>	"The search by which the array item can be found"
		),

		'ajax-settings' => array(
			'name'	=>	'Settings',
			'type'	=>	'Object',
			'description' => "Contains the request settings. The following arguments are accepted:
			<ul class='small'>
				<li><b>url</b><i> - URL of the file the data should be posted to</i></li>
				<li><b>data</b><i> - String of data structured like: [input name]=[input value] and seperated by &</i></li>
				<li><b>success</b><i> - The success handler function</i></li>
				<li><b>dataType</b><i> (Optional) - The type of data that is returned to the succes handler.</i></li>
			</ul>"
		),

		'no-arg' =>	'This method does not accept any arguments',

		'json-string' => array(
			'name'	=>	'JSON String',
			'type'	=>	'String',
			'description' => "Stringified JSON"
		),

	);

	$docs_pages = array(

			'why-use-this' => array(
				'title'			=>	"Why use this?",
				'sub_title'		=>	'What is Browserkit.js?',

				'addition'	=>	"
				<p>Browserkit.js is a <b>customisable and lightweight mini library</b>. 
				I created Browserkitjs for use in small to medium sized web projects were I wasn't using any bigger libraries like jQuery. 
				It makes things like getting elements and handling classes and events cross-browser much faster and easier.</p>

				<p>A very important aspect of Browserkitjs is that you can <b>remove what you don't need</b>, in contrast to bigger 
				libraries like were your end user loads a lot of methods they don't need.
				This way your end-user will only load what is actually being used on the page and nothing else.</p>

				<p><a href='/docs/setup'>Get started!</a></p>"
			),

			'setup' => array(
				'title'			=>	'Setup',
				'sub_title'		=>	'How to get started?',

				'addition'	=>	"<p>Starting to use Browserkit.js is easy:</p>
				<ol>
					<li><a href='https://github.com/kvendrik/Browserkit.js/archive/master.zip' alt='Latest Version of Browserkit.js'>Download the latest version</a></li>
					<li>Import <code>browserkit.min.js</code> in your project
					<pre><code class='language-markup'>&lt;script src='browserkit.min.js'&gt;&lt;/script&gt;</code></pre></li>
					<li>Start coding! :)</li>
				</ol>"
			),

			'syntax' => array(
				'title'			=>	'Syntax',
				'sub_title'		=>	'How to use Browserkit.js?',

				'addition'	=>	"<p>Browserkit uses a syntax that is quite simular to other libraries:</p>

								<pre><code class='language-javascript'>B('section.kitten').addClass('is-cute');</code></pre>

								<p>Also chaining is possible:</p>

<pre><code class='language-javascript'>
B('section.kitten').addClass('has-bal').removeClass('is-mean').click(function(){
    alert('Awh, thats cute!');
});</code></pre>

								<p>And elements can easily be selected using the el variable:</p>
								<pre><code class='language-javascript'>var kittenArea = B('section.kitten').el;</code></pre>

								<p>Note that selecting elements using document.querySelector (which Browserkit.js polyfills) is currently faster than using the <code>el</code> variable</p>"
			),

			'browser-support' => array(
				'title'			=>	'Browser Support',
				'sub_title'		=>	'What browsers do we support?',

				'addition'	=>	"<p>Good news! Browserkitjs supports even the most ancient browser you can think of like IE6 and Android 1.5!</p>
				<h6>Desktop:</h6> 
				<ul>
					<li>IE5(IE10 document mode)</li>
					<li>IE6+</li>
					<li>Firefox 3+</li>
					<li>Safari 4+</li>
					<li>Chrome 14+</li>
					<li>Opera 10.6+</li>
				</ul>

				<h6>Mobile:</h6>
				<ul>
					<li>iOS 3+</li> 
					<li>Android 1.5+</li> 
					<li>Opera Mobile</li>
				</ul></p>"
			),

			'customisation' => array(
				'title'			=>	'Customisation',
				'sub_title'		=>	'Customizing Browserkit to your needs',

				'addition'	=>	"
<h3>Custom builds</h3>

<p>Browserkit allows you to easily remove methods you don't need. This way the file can be made as small as possible before your web project goes live. Removing methods is quite easy:</p>

<ol>
	<li>Remove methods you don't need from the <code>browserkit.js</code> file</li>
	<li>Check the method's doc page to see if other methods are using it<br>browserkitjs.com/docs/[method-name]</li>
	<li>Minify the customised file</li>
</ol>

<h3>Changing the <code>B</code> variable</h3>
<p>The Browserkit object is by default stored in a variable named <code>B</code> which can easily be changed at the end of the <code>browserkit.js</code> or <code>browserkit.min.js</code> file.</p>

"
			),

			'license' => array(
				'title'			=>	"License",
				'sub_title'		=>	'Browserkit.js is licensed under the MIT license',

				'addition'	=>	"<h3>The MIT License (MIT)</h3>
<p>Copyright © ".date('Y')."</p>

<p>Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:</p>

<p>The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.</p>

<p>THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.</p>"
			),

			'removeclass' => array(
				'title'			=>	'removeClass',
				'sub_title'		=>	'Removes a class from a HTML element',

				'arguments'	=>	array(

									'code'	=>	'B( [Element] ).removeClass( [Class Name] );',
									'details'	=>	array(

										$docs_arguments['element'],
										$docs_arguments['class-name']

									)

								),

				'example'	=>	"
								<h6>HTML Before</h6>
								<pre><code class='language-markup'>&lt;section class='kittens are-mean'&gt;&lt;/section&gt;</code></pre>
								<h6>JS Usage</h6>
								<pre><code class='language-javascript'>B('section.kittens').removeClass('are-mean');</code></pre>
								<h6>HTML After</h6>
								<pre><code class='language-markup'>&lt;section class='kittens'&gt;&lt;/section&gt;</code></pre>",

				'addition'	=>	''
			),

			'addclass' => array(
				'title'			=>	'addClass',
				'sub_title'		=>	'Adds a class to a HTML element',

				'arguments'	=>	array(

									'code'	=>	'B( [Element] ).addClass( [Class Name] );',
									'details'	=>	array(

										$docs_arguments['element'],
										$docs_arguments['class-name']

									)

								),

				'example'	=>	"
								<h6>HTML Before</h6>
								<pre><code class='language-markup'>&lt;section class='kittens'&gt;&lt;/section&gt;</code></pre>
								<h6>JS Usage</h6>
								<pre><code class='language-javascript'>B('section.kittens').addClass('are-cute');</code></pre>
								<h6>HTML After</h6>
								<pre><code class='language-markup'>&lt;section class='kittens are-cute'&gt;&lt;/section&gt;</code></pre>",

				'addition'	=>	''
			),

			'toggleclass' => array(
				'title'			=>	'toggleClass',
				'sub_title'		=>	'Toggles a class on a HTML element',

				'arguments'	=>	array(

									'code'	=>	'B( [Element] ).toggleClass( [Class Name] );',
									'details'	=>	array(

										$docs_arguments['element'],
										$docs_arguments['class-name']

									)

								),

				'example'	=>	"
								<h6>HTML Before</h6>
								<pre><code class='language-markup'>&lt;section class='kittens'&gt;&lt;/section&gt;</code></pre>
								<h6>JS Usage</h6>
								<pre><code class='language-javascript'>B('section.kittens').toggleClass('are-cute');</code></pre>
								<h6>HTML After</h6>
								<pre><code class='language-markup'>&lt;section class='kittens are-cute'&gt;&lt;/section&gt;</code></pre>",

				'addition'	=>	''
			),

			'addevent' => array(
				'title'			=>	'addEvent',
				'sub_title'		=>	'Adds an event listener to a HTML element',

				'arguments'	=>	array(

									'code'	=>	'B( [Element] ).addEvent( [Event], [Handler] );',
									'details'	=>	array(

										$docs_arguments['element'],
										$docs_arguments['event'],
										$docs_arguments['handler']

									)

								),

				'example'	=>	"<pre><code class='language-javascript'>B('section.kittens').addEvent('click', kittensfunc);</code></pre>",
			),

			'detachevent' => array(
				'title'			=>	'detachEvent',
				'sub_title'		=>	'Removes an event listener from a HTML element',

				'arguments'	=>	array(

									'code'	=>	'B( [Element] ).addEvent( [Event], [Handler] );',
									'details'	=>	array(

										$docs_arguments['element'],
										$docs_arguments['event'],
										$docs_arguments['handler']

									)

								),

				'example'	=>	"<pre><code class='language-javascript'>B('section.kittens').detachEvent('click', kittensfunc);</code></pre>"
			),

			'click' => array(
				'title'			=>	'Click',
				'sub_title'		=>	'Adds a click event listener to a HTML element',

				'arguments'	=>	array(

									'code'	=>	'B( [Element] ).click( [Handler] );',
									'details'	=>	array(

										$docs_arguments['element'],
										$docs_arguments['handler']

									)

								),

				'example'	=>	"<pre><code class='language-javascript'>B('section.kittens').click(kittensfunc);</code></pre>",

				'dependencies'	=>	array(
										'addEvent <i>- or Google Fastbutton, see notes for details</i>' => 'addevent'
									),

				'addition'	=>	"<h3>Notes</h3>
					<p>Uses the <a href='https://github.com/kvendrik/google_fastbutton' alt='Google Fastbutton'>Google Fastbutton</a> module in case it is imported before Browserkit is. This will prevent a 300ms delay on mobile phones.
					If the module is not available it will add a normal event listener instead.</p>"
			),

			'resizeend' => array(
				'title'			=>	'resizeEnd',
				'sub_title'		=>	'Executes a function when resizing finishes',

				'arguments'	=>	array(

									'code'	=>	'B( [Element] ).resizeEnd( [Handler] );',
									'details'	=>	array(

										$docs_arguments['element'],
										$docs_arguments['handler']

									)

								),

				'example'	=>	"<pre><code class='language-javascript'>B(window).resizeEnd(kittensfunc);</code></pre>",

				'dependencies'	=>	array(
										'addEvent' => 'addevent'
									)
			),

			'ajax' => array(
				'title'			=>	'ajax',
				'sub_title'		=>	'Preforms an Ajax HTTP request',

				'arguments'	=>	array(

									'code'	=>	'B.ajax( [Settings] );',
									'details'	=>	array(

										$docs_arguments['ajax-settings']

									)

								),

				'example'	=>	"
<h6>Basic usage</h6>
<pre><code class='language-javascript'>
B.ajax({
	url: 'post.php',
	data: 'name=George&age=21',
	success: function(data){
		
		//PHP file: echo &#36;_POST['name'].'is'.&#36;_POST['age'];
		console.log(data); //George is 21

	}
});</code></pre>

<h6>JSON</h6>
<p>Data will be returned as JSON</p>
<pre><code class='language-javascript'>
B.ajax({
	url: 'post.php',
	data: 'name=George&age=21',
	dataType: 'json',
	success: function(data){
		
		//PHP file: echo json_encode(&#36;_POST);
		console.log(data); //{'name': 'George', 'age': '21'}

	}
});</code></pre>

<h6>Post Form and JSON</h6>
<p>Form will be posted and data will be returned as JSON</p>
<pre><code class='language-markup'>
&lt;form id='send-form' action='#' method='post'&gt;
	&lt;input type='text' name='name' value='George'&gt; 
	&lt;input type='number' name='age' value='21'&gt;
	&lt;input type='checkbox' name='does-sports' value='yes' checked&gt;
&lt;/form&gt;
</code></pre>
<pre><code class='language-javascript'>
B.ajax({
	url: 'post.php',
	data: B('form#send-form').serialize(),
	dataType: 'json',
	success: function(data){
		
		//PHP file: echo json_encode(&#36;_POST);
		console.log(data); //{'name': 'George', 'age': '21', 'does-sports', 'yes'}

	}
});</code></pre>",
			),

			'serialize' => array(
				'title'			=>	'serialize',
				'sub_title'		=>	'Creates a text string from HTML form input values',

				'arguments'	=>	array(

									'code'	=>	'B( [Form Element] ).serialize()',
									'details'	=>	array(

										$docs_arguments['no-arg']

									)

								),

				'example'	=>	"
<pre><code class='language-markup'>
&lt;form id='send-form' action='#' method='post'&gt;
	&lt;input type='text' name='name' value='George'&gt; 
	&lt;input type='number' name='age' value='21'&gt;
&lt;/form&gt;
</code></pre>
<pre><code class='language-javascript'>B('form#send-form').serialize(); //name=George&age=21</code></pre>",

			),

			'parsejson' => array(
				'title'			=>	'parseJSON',
				'sub_title'		=>	'Converts stringified JSON to valid JavaScript JSON',

				'arguments'	=>	array(

									'code'	=>	'B.parseJSON( [JSON String] )',
									'details'	=>	array(

										$docs_arguments['json-string']

									)

								),

				'example'	=>	"<pre><code class='language-javascript'>B.parseJSON(\"{'name':'George', 'age', '21'}\"); //{'name':'George', 'age', '21'}</code></pre>"
			),

			'queryselector' => array(
				'title'			=>	'querySelector',
				'sub_title'		=>	'Finds and returns the first element that matches the selector',

				'arguments'	=>	array(

									'code'	=>	'document.querySelector( [Selector] )',
									'details'	=>	array(

										$docs_arguments['selector']

									)

								),

				'example'	=>	"<pre><code class='language-javascript'>element = document.querySelector('section.kittens'); //&lt;section class='kittens'&gt;&lt;/section&gt;</code></pre>",

				'addition'	=>	"<h3>Notes</h3>
				<p>More information can be found on the method's <a href='https://developer.mozilla.org/en-US/docs/Web/API/document.querySelector' alt='MDN'>MDN page</a></p>"
			),

			'queryselectorall' => array(
				'title'			=>	'querySelectorAll',
				'sub_title'		=>	'Finds and returns all elements that match the selector',

				'arguments'	=>	array(

									'code'	=>	'document.querySelector( [Query] )',
									'details'	=>	array(

										$docs_arguments['selector']

									)

								),

				'example'	=>	"<pre><code class='language-javascript'>elements = document.querySelectorAll('article.paws'); //[&lt;article class='paws'&gt;&lt;/article&gt;, &lt;article class='paws'&gt;&lt;/article&gt;]</code></pre>",

				'addition'	=>	"<h3>Notes</h3>
				<p>More information can be found on the method's <a href='https://developer.mozilla.org/en-US/docs/Web/API/document.querySelectorAll' alt='MDN'>MDN page</a></p>"
			),

			'getelementsbyclassname' => array(
				'title'			=>	'getElementsByClassName',
				'sub_title'		=>	'Finds and returns all elements with the given class',

				'arguments'	=>	array(

									'code'	=>	'document.getElementsByClassName( [Class Name] ) //or [HTML Element].getElementsByClassName( [Class Name] )',
									'details'	=>	array(

										$docs_arguments['class-name']

									)

								),

				'example'	=>	"<pre><code class='language-javascript'>elements = document.getElementsByClassName('paws'); //[&lt;article class='paws'&gt;&lt;/article&gt;, &lt;article class='paws'&gt;&lt;/article&gt;]</code></pre>",

				'addition'	=>	"<h3>Notes</h3>
				<p>More information can be found on the method's <a href='https://developer.mozilla.org/en-US/docs/Web/API/document.getElementsByClassName' alt='MDN'>MDN page</a></p>"
			),

			'array-indexof' => array(
				'title'			=>	'Array.indexOf',
				'sub_title'		=>	'Returns the array index of the given search',

				'arguments'	=>	array(

									'code'	=>	"Array.indexOf( [Search] )",
									'details'	=>	array(

										$docs_arguments['search']

									)

								),

				'example'	=>	"<pre><code class='language-javascript'>idx = kittensArr.indexOf('george'); //2</code></pre>",

				'addition'	=>	"<h3>Notes</h3>
				<p>In case the search can not be found in the array the method returns -1.</p>
				<p>More information can be found on the method's <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf' alt='MDN'>MDN page</a></p>"
			)

	);

	$docs_page = !empty($_GET['docs-page']) ? strtolower(strip_tags($_GET['docs-page'])) : 'why-use-this';

?>