# Week 1 Reflection

1. Imperative vs declarative: imperative code tells the browser every step to change the page (create the element, update the text). Declarative React code describes what the UI should look like for the current data, and React works out the updates.
2. Why component names start with a capital letter: React treats lowercase tags like <div> as HTML elements, so a component name must start with a capital letter or React won't treat it as a component.
3. What a fragment does, and why not a div: a fragment <>...</> lets a component return several elements without adding an extra node to the page. A div would add a wrapper that isn't needed.
4. One benefit of small components: each piece is reusable and easier to read and fix. For example, one MenuItemCard can be used for many items.