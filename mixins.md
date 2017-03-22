---
title: Mixins
layout: page
---

### Mixins
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

{% assign mixins = site.mixins %}
{% for mixin in mixins %}

<div class="mixin" id="{{ mixin.title | slugify }}" markdown="1">

<div class="mixin-title">
{% highlight scss %}
{{ mixin.title }}{% if mixin.params %}( {{ mixin.params }} ) {% endif %}
{% endhighlight %}

{% if mixin.alias %}
<div class="mixin-alias" markdown="1">
**Alias:** `{{ mixin.alias }}`
</div>
{% endif %}
</div>

<div class="mixin-content" markdown="1">
{{ mixin.content }}
</div>

</div>
{% endfor %}