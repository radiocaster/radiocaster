<div class="infoText" itemscope itemtype="http://schema.org/AboutPage">
	<h2 itemprop="name">You are using Android</h2>
	<div itemprop="description">This is an experimental function to enable you to stream radio from your phone or tablet. If you have Chrome Beta on your device you should be able to see the Chromecast icon in the top right section of the video when it is fullscreen. If you press it, the stream will be casted to your television.<br /><br />
		Because the audio doesn't contain any images, the screen will be black.
	</div>
</div>

<center>
	<video width="100%" controls poster="http://xyiv0szvm03w0ikk.zippykid.netdna-cdn.com/wp-content/uploads/2012/11/Elevation-Channel-Page-Featured2.jpg">
		<source src="http://stream.adr.fm:8005/;" type="audio/mp3">
		Your browser does not support the video tag.
	</video>
</center>

<script>
	$(document).ready(function(){
		phonePlayer(<?php echo $urlArray["1"];?>);
	});
</script>