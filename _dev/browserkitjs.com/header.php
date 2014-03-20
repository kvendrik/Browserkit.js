<?php

	$pages = array(
		'Home' => '',
		'Docs' => 'docs'
	);

?>

<!DOCTYPE HTML>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    
    <title>Browserkit.js - A highly customisable mini library</title>
    
    <meta name="description" content="A lightweight and highly customisable mini library with lightning fast speeds and great browser support" />
    <meta name='author' content='Koen Vendrik' />
    <meta name='follow' content='index, follow' />
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />

    <meta name="google-site-verification" content="bQ6kNmFM_t22wEeSM_zBKyDLySdR483Y7bZwwXlYEv0" />
    
	<link rel="shortcut icon" href="/assets/favicons/favicon.ico">
	<link rel="apple-touch-icon" sizes="57x57" href="/assets/favicons/apple-touch-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="114x114" href="/assets/favicons/apple-touch-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="72x72" href="/assets/favicons/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="144x144" href="/assets/favicons/apple-touch-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="60x60" href="/assets/favicons/apple-touch-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="120x120" href="/assets/favicons/apple-touch-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="76x76" href="/assets/favicons/apple-touch-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="152x152" href="/assets/favicons/apple-touch-icon-152x152.png">
	<link rel="icon" type="image/png" href="/assets/favicons/favicon-196x196.png" sizes="196x196">
	<link rel="icon" type="image/png" href="/assets/favicons/favicon-160x160.png" sizes="160x160">
	<link rel="icon" type="image/png" href="/assets/favicons/favicon-96x96.png" sizes="96x96">
	<link rel="icon" type="image/png" href="/assets/favicons/favicon-32x32.png" sizes="32x32">
	<link rel="icon" type="image/png" href="/assets/favicons/favicon-16x16.png" sizes="16x16">
	<meta name="msapplication-TileColor" content="#1a6996">
	<meta name="msapplication-TileImage" content="/assets/favicons/mstile-144x144.png">
	<meta name="msapplication-square70x70logo" content="/assets/favicons/mstile-70x70.png">
	<meta name="msapplication-square144x144logo" content="/assets/favicons/mstile-144x144.png">
	<meta name="msapplication-square150x150logo" content="/assets/favicons/mstile-150x150.png">
	<meta name="msapplication-square310x310logo" content="/assets/favicons/mstile-310x310.png">
	<meta name="msapplication-wide310x150logo" content="/assets/favicons/mstile-310x150.png">
    
    <!--[if lt IE 9]>
    	<script type="text/javascript" src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    
	<link href='http://fonts.googleapis.com/css?family=Roboto:300,100,100italic,300italic,400,400italic,500,500italic,700,700italic|Merriweather+Sans:300,300italic,400,400italic,700,700italic' rel='stylesheet' type='text/css'>

	<link href='http://fonts.googleapis.com/css?family=Inconsolata' rel='stylesheet' type='text/css'>

	<link rel="stylesheet" type="text/css" href="/fonts/ss-standard/ss-standard.css" />
	<link rel="stylesheet" type="text/css" href="/fonts/ss-social-regular/ss-social-regular.css" />

	<link rel="stylesheet" type="text/css" href="/js/libs/prism/prism.css" />
	<link rel='stylesheet' type='text/css' href='/css/main.css' />

</head>
<body>

<div class='container'>

	<header id='header'>

		<section class='sticky-mobile'>
			<div class='container'>
				
				<nav>
					<ul class='inline'>
						<?php

							foreach ($pages as $name => $url_name) {

								echo "<a href='/".$url_name."'><li>".$name."</li></a>";

							}

						?>
					</ul>
				</nav>
		
			<?php

				if($include_sidebar_trigger === 1){

					echo "<a class='mobile-only btn ss-icon ss-standard' id='sidebar-trigger'>rows</a>";

				}

			?>

			</div>
		</section>

		<section class='column auto-width floatl'>
			<a href='/' alt='Browserkit.js'>
				<h1>Browserkit.js <small>Beta</small></h1>
				<h2 class='h4'>A highly customisable mini library</h2>
			</a>
		</section>

	</header>