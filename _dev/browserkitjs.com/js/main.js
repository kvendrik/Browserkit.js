(function(){

////SIDEBAR

	var sidebarTrigger = document.getElementById('sidebar-trigger'),
	body = document.getElementsByTagName('body')[0],
	sidebar = document.getElementById('sidebar'),
	toggleClass = function(el, className){

		var elClass = el.className;

		if( elClass.indexOf(className) !== -1 ){

			el.className = elClass.replace(className, '');

		} else {

			el.className += ' '+className;

		}

		return el.className;

	},

	toggleSidebar = function(){

		toggleClass(body, 'pushed-left');
		toggleClass(sidebar, 'visible');

	};

	new FastButton(sidebarTrigger, toggleSidebar);

})();


////GOOGLE ANALYTICS

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-47677768-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();