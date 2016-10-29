#Markup guide

Markup should be:

- Semantically correct
- SEO-friendly
- Backend-neutral
- Compatible with browsers as per the [browser matrix](matrix)

##Code rules

- Avoid putting block-level elements inside inline-level elements
- Only use entity references for reserved HTML characters, characters like `£`, `%` can be used as-is
- Try to avoid blank lines
- Only keep elements on the same line if they are short, otherwise, indent on new line 
- Classes should follow the [BEM](bem) pattern
- Avoid putting CSS or Javascript directly in HTML files
- For elements that require no closing tag, omit the closing slash `/>` and just use `>` alone
- Use the correct [ARIA roles](http://karlgroves-sandbox.com/CheatSheets/ARIA-Cheatsheet.html) when applicable, don't use them unless certain of semantic correctness
- Use the `title` attribute to convey additional/advisory information
- Use the `alt` tag to offer a textual compromise if the image is missing
- Try to avoid excessive use of `<br>`. Generally, you will not need to use them at all
- Ensure the page makes chronological sense without CSS or JS
- Where possible, add an image's exact dimensions to the element like `<img src="..." width="100px" height="100px">`. This forces the browser to reserve that space for the image, even if it hasn't loaded, reducing layout flickering
