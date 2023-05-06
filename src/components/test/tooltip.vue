<template>
 <div class="container">
  <h2 class="header">The abbr element</h2>
<p>The <abbr title="HyperText Markup Language">HTML</abbr> abbr element represents an abbreviation or acronym; the optional title attribute can provide an expansion or description for the abbreviation. If present, title must contain this full description and nothing else.</p>
<p>We can use <abbr title="Cascading Style Sheets">CSS</abbr> to style it and make it look a little nicer. This text is often presented by browsers as a tooltip when the mouse cursor is hovered over the element.</p>
</div>
</template>

<script>
export default {
    name: "tooltip"
}
</script>

<style>

abbr {
  font-style: italic;
  position: relative
}

abbr:hover::after {
  background: #add8e6;
  border-radius: 4px;
  bottom: 100%;
  content: attr(title);
  display: block;
  left: 100%;
  padding: 1em;
  position: absolute;
  width: 280px;
  z-index: 1;
}

</style>