<?php
$validpages = array("home","phone");
$urlArray = explode('/', $_SERVER['REQUEST_URI']);
$scriptName = explode('/',$_SERVER['SCRIPT_NAME']);
for($i= 0;$i < sizeof($scriptName);$i++){
	if($urlArray[$i] == $scriptName[$i]){
		unset($urlArray[$i]);
	}
}
$urlArray = array_values($urlArray);
$p = $urlArray[0];
  
if (empty($p)) { $p = "home"; }
if (array_search($p, $validpages) === false) {
	$p = "home.php";
} else {
	$p = "$p.php";
}  
?>

<!doctype html>
<html itemscope itemtype="http://schema.org/WebPage" lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<title>RadioCaster - Chromecast Radio Player</title>
	<meta name="author" content="Project Five Design">
	<link rel="author" href="https://plus.google.com/110285456380524835695">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<meta itemprop="name" content="RadioCaster - Chromecast Radio Player">
    <meta itemprop="description" content="Play streaming radio on your Chromecast! What other apps don't allow you to do now is available on the web!">
    <?php if($p=="home.php"){?><link rel="canonical" href="https://radiocaster.projectfive.nl" /><?php }?>
    <meta itemprop="image" content="https://radiocaster.projectfive.nl/logo.png">
    <meta property="og:title" content="RadioCaster - Chromecast Radio Player">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://radiocaster.projectfive.nl/">
    <meta property="og:image" content="https://radiocaster.projectfive.nl/logo.png">
    <meta property="og:site_name" content="RadioCaster - Chromecast Radio Player">
    <meta property="og:description" content="Play streaming radio on your Chromecast! What other apps don't allow you to do now is available on the web!">
    <meta property="og:locale" content="en_US">
	
  	<link type="text/css" rel="stylesheet" href="/css/style.css">
  	<script type="text/javascript" src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"></script>
  	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  	<script src="/js/media.js"></script>
</head>
<body class="init">
	<div class="notice">
		TuneIn Radio updated it's apps with Chromecast support on 25-11-2014! I will no longer add new stations to Radiocaster but the site will stay for now.
	</div>
	<div class="c topPart clearfix">
		<div class="left">
			<a href="/home/">
				<img src="/images/logo.png" class="logo" alt="RadioCaster logo"/>
			</a>
		</div>
		<div class="right">
			<h1>Radio<strong>Caster</strong></h1>
		</div>
	</div>
	<div class="c clearfix">
		<?php include $p; ?>
		
		<br style="clear:both" /><br />
	</div>
	<div class="overlay">
        <div class="overlayContainer clearfix">
            <h2>Requesting is closed</h2>
            <span class="closeButton" onclick="missingStation('close');">&times;</span>
            <h3 class="regulartext">TuneIn Radio updated it's apps with Chromecast support on 25-11-2014! I will no longer add new stations to Radiocaster but the site will stay for now.</h3>
        </div>
    </div>
	<script src="/js/svgicons.js"></script>
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	
	  ga('create', 'UA-34267342-2', 'projectfive.nl');
	  ga('send', 'pageview');
	</script>
</body>
</html>