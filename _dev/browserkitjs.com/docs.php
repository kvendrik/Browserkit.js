<?php $include_sidebar_trigger = 1; require_once 'header.php';

	require_once 'docs-content.php'; ?>

	<section class='column' id='docs'>
		
		<section id='sidebar' class='column one-fourth'>

			<?php

				foreach ($docs_nav as $category => $items) {
					
					echo "<h2 class='h4'>".$category."</h2>";
					echo "<ul class='nav cf-top'>";
					foreach ($items as $name => $url_name) {

						if(is_array($url_name)){

							echo "<h3 class='h5'>".$name."</h3>"; 
							echo "<ul class='nav cf-top'>";
							foreach ($url_name as $name => $url_name) {

								$class = $docs_page === $url_name ? "class='active'" : '';
								echo "<a href='/docs/".$url_name."'><li ".$class.">".$name."</li></a>";

							}
							echo "</ul>";
						
						} else {
						
							$class = $docs_page === $url_name ? "class='active'" : '';
							echo "<a href='/docs/".$url_name."'><li ".$class.">".$name."</li></a>";

						}

					}
					echo "</ul>";

				}

			?>

		</section>

		<section class='column three-fourth cf'>

			<?php 

				if(empty($docs_pages[$docs_page])){

					echo "<header>
								<h1>Page not found.</h1>
								<h2 class='h4'>Have a look at some other stuff mate</h2>
						</header>";		

				} else {

					$details = $docs_pages[$docs_page];

					echo "<header>
								<h1>".$details['title']."</h1>
								<h2 class='h4'>".$details['sub_title']."</h2>
						</header>";

					if(!empty($details['arguments'])){

						echo "<h3>Arguments</h3>
						<pre><code class='language-javascript'>".$details['arguments']['code']."</code></pre>";


						foreach ($details['arguments']['details'] as $idx => $info) {
							
							if(!is_array($info)){
								echo "<p class='small'>".$info."</p>";
							} else {
								echo "<h6 class='small'>".$info['name']." <i>(".$info['type'].")</i></h6>";
								echo "<p class='small'>".$info['description']."</p>";
							}

						}

					}

					if(!empty($details['example'])){

						echo "<h3 class='c-top'>Example</h3>".$details['example'];

					}

					if(!empty($details['dependencies'])){
						echo '<h3>Dependencies</h3>
						<p>This method requires the following methods in order to work correctly:</p>
						<ul>';
						foreach ($details['dependencies'] as $dependency => $url_name) {
							
							echo "<li><a href='".$url_name."' alt='".$dependency."'>".$dependency."</a></li>";

						}
						echo '</ul>';
					}

					if(!empty($details['addition'])){

						echo $details['addition'];

					}

				}

			?>

		</section>


	</section>

<?php require_once 'footer.php'; ?>