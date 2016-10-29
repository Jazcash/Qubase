#Style guide

Stylesheets should be:

- Clean, easily readable and modifiable
- Modular, separated and organised
- Compatible with browsers as per the [browser matrix](matrix)

##Code rules

- Responsive rules should use the `above` or `below` mixins. Stick to using only one per project for consistency
- When IE is supported, be aware that flex uses attempted fallbacks and isn't guarenteed to work 100%.
- Don't use vendor prefixes, autoprefixer takes care of them
- Don't use floats
- Avoid !important as much as possible
- Try to keep control of your z-indexes and only use them if absolutely necessary. Never use anything like `9999`
- To change the transparency of a colour, use rgba(#fff, 0.5)
- When creating component files, the named hierarchy of the component should be noted at the top of the file


Never use floats. Ever.
Avoid using !important as much as possible
Z-indexes should be kept small. Try to stick to increments of 10
br should be used to separate content, within the context of its container. i.e. content is still related, but should be visibly spaced. In general, you probably don't need to use these
Don't use vendor prefixes, autoprefixer takes care of them
Use hex instead of RGB
To change the transparency of a colour, use rgba(#fff, 0.5)
Try to avoid using colours directly and use variables instead
Avoid animating layout properties like width, left, top and use transform instead
In general, an element's position/layout should be defined by its parent (e.g. using padding)
Order your scss in accordance with this CSScomb file:
Consult caniuse.com if unsure about an element or css property's browser support
Avoid passing specific values into breakpoints directly, use the breakpoint variable instead
Where possible, try to build components to be reusable inside and outside of the project
Avoid direct targetting of divs, spans, headings and try to use classes instead
If some text should look like a heading, but it doesn't make semantic sense for it to be one, use the heading classes
Avoid closing tags on single elements like input, meta, br, hr etc (see this list?)

Stuff to research:
Font awesome icon gulp thing?
How to execute JS for only specific pages that need them