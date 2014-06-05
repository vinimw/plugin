<html>

 <head>

 <title>Função de banner</title>

<link rel="stylesheet" type="text/css" href="css/style.css">

<script type="text/javascript" src="js/jquery.js" ></script>
<script type="text/javascript" src="js/easing.js" ></script>
<script type="text/javascript" src="js/acoes.js" ></script>
 </head>



 <body>


<div class="banner-align">

	<div class="banner" style="background-image: url(images/banner1.jpg);">

	</div>

	<div class="banner" style="background-image: url(images/banner2.jpg);">

	</div>

	<div class="banner" style="background-image: url(images/banner3.jpg);">

	</div>


</div>

<script type="text/javascript">
	$.simpleSlideShow('.banner-align', {'delay':3000, 'fadeSpeed': 800});
</script>


 </body>
 
 </html>