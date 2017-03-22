<!DOCTYPE html>
<html>
	<head>
		<title>{{ page.title }} - {{ site.title }}</title>
		{% include head.html %}
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