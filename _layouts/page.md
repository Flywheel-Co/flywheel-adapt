<!DOCTYPE html>
<html>
	<head>
		<script src="https://use.typekit.net/yoq1nsx.js"></script>
		<script>try{Typekit.load({ async: true });}catch(e){}</script>
		<link rel="stylesheet" href="{{ site.github.url }}/assets/css/main.css">
	</head>
	<body>

		{% include header.html %}

		<div class="wrapper">

			<div id="sidebar" class="col-3">
				{% include sidebar.html %}
			</div>

			<div id="content" class="col-9">
				{{ content }}
			</div>

		</div>

		{% include footer.html %}

	</body>
</html>