document.write('
       
<html lang="ja">
<head>
<link rel="stylesheet" href="css/style.css">
<script src="/blob/main/js/openclose.js"></script>
<script src="/blob/main/js/fixmenu_pagetop.js"></script>
<script src="/blob/main/js/ddmenu_min.js"></script>
</head>
<header>
<h1 id="logo"><a href="/blob/main/index.html"><img src="/blob/main/images/logo.png"></a></h1>
<!--PC用（901px以上端末）メニュー-->
<nav id="menubar">
<ul>
<li><a href="/blob/main/index.html">Home</a></li>
<li class="ddmenu-title"><a href="/blob/main/survey.html">Survey</a>
	<ul class="ddmenu">
	<li><a href="/blob/main/survey_AL.html">能動学習</a></li>
	<li><a href="/blob/main/survey_AD.html">異常検知</a></li>
	<li><a href="/blob/main/survey_other.html">その他</a></li>
	</ul>
</li>
<li><a href="/blob/main/publication.html">Publication</a></li>
<li><a href="/blob/main/contact.html">Contact</a></li>
</ul>
</nav>
<!--小さい端末用（900px以下端末）メニュー-->
<nav id="menubar-s">
<ul>
<li><a href="/blob/main/index.html">Home</a></li>
<li id="menubar_hdr2" class="close"><a href="/blob/main/survey.html">Survey</a>
	<ul id="menubar-s2">
	<li><a href="/blob/main/survey_AL.html">能動学習</a></li>
	<li><a href="/blob/main/survey_AD.html">異常検知</a></li>
	<li><a href="/blob/main/survey_other.html">その他</a></li>
	</ul>
</li>
<li><a href="/blob/main/publication.html">Publication</a></li>
<li><a href="/blob/main/contact.html">Contact</a></li>
</ul>
</nav>
<ul class="icon">
<li><a href="#"><img src="images/icon_facebook.png" alt="Facebook"></a></li>
<li><a href="#"><img src="images/icon_twitter.png" alt="Twitter"></a></li>
<li><a href="#"><img src="images/icon_instagram.png" alt="Instagram"></a></li>
<li><a href="#"><img src="images/icon_youtube.png" alt="TouTube"></a></li>
</ul>
</header>
               ');
