I had a LESS file full of color variables and it looked something like this:

<pre>
@color-blue: #0070b9<br />
@color-blue-dark: #003b7f<br />
@color-blue-light: #0079c2<br />
@color-blue-extra-light: #0080cb<br />
@color-blue-xx-light: #9ee0ff<br />
etc.
</pre>

My need for additional color tints grew and so did the length of the variable names. Say hi to <code>@color-blue-very-very-light</code>!

An unsustainable situation. Today I found out that LESS (and Sass for that matter) has a <code>lighten</code> and a <code>darken</code> function. That means that I can have a master color (e.g. @color-blue) and use <code>lighten</code> and <code>darken</code> to create the tints I need:

<p data-height="268" data-theme-id="0" data-slug-hash="EjZRwN" data-default-tab="result" data-user="timkl" class='codepen'>See the Pen <a href='http://codepen.io/timkl/pen/EjZRwN/'>EjZRwN</a> by Tim Kjær Lange (<a href='http://codepen.io/timkl'>@timkl</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>