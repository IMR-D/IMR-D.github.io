<!DOCTYPE html>
<html lang="en" class="no-js">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
		<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
		<title>Simple Multi-Item Slider with CSS Animations and jQuery</title>
		<meta name="description" content="Simple Multi-Item Slider: Category slider with CSS animations" />
		<meta name="keywords" content="jquery plugin, item slider, categories, apple slider, css animation" />
		<meta name="author" content="Codrops" />
		<link rel="shortcut icon" href="../favicon.ico"> 
		<link rel="stylesheet" type="text/css" href="css/stylemenu.css" />
		<script src="js/modernizr.custom.63321.js"></script>
	</head>
	<body>
		<div class="container">	
			<div class="main">
				<div id="mi-slider" class="mi-slider">
					<ul>
						<li><a href="#"></a></li>
					</ul>
					<ul>
						<li><a href="#"></a></li>
					</ul>
					<ul>
						<li><a href="#"></a></li>
					</ul>
					<ul>
						<li><a href="#"></a></li>
					</ul>
					<ul>
						<li><a href="#"></a></li>
					</ul>
					
					<nav>
						<a href="#">Главная</a>
						<a href="#">Мебель</a>
						<a href="#">Галерея</a>
						<a href="#">Контакты</a>
						<a href="#">О нас</a>
					</nav>
				</div>
			</div>
		</div><!-- /container -->
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
		<script src="js/jquery.catslider.js"></script>
		<script>
			$(function() {

				$( '#mi-slider' ).catslider();

			});
		</script>






		 

	</body>
</html>