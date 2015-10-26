iOS is full of interesting interaction animations, one of my favorites is the *installing* animation.

I've recreated the effect with CSS:

<p data-height="212" data-theme-id="0" data-slug-hash="WQzRLY" data-default-tab="result" data-user="timkl" class='codepen'>See the Pen <a href='http://codepen.io/timkl/pen/WQzRLY/'>iOS installing animation</a> by Tim Kjær Lange (<a href='http://codepen.io/timkl'>@timkl</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

The approach is inspired by the work of [Lea Verou](https://twitter.com/LeaVerou). I'm reading her book [CSS Secrets](http://www.amazon.com/CSS-Secrets-Solutions-Everyday-Problems/dp/1449372635) at the moment.

The first part of the animation is achieved by giving a SVG a <code>stroke-width</code> and then animating the <code>stroke-dasharray</code>.

The second part uses a <code>radial-gradient</code> background with a sudden color-stop. The background is scaled to encompass the entire square.
