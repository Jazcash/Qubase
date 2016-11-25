# Qubase

Qubase is an opinionated frontend development boilerplate for getting a markup project off the ground quickly and easily. Some of the tools it uses are:

- [Gulp](http://gulpjs.com/) - Task runner
- [SCSS](http://sass-lang.com/) - CSS preprocessor
- [Babel](https://babeljs.io/) - JS preprocessor
- [Autoprefixer](https://github.com/postcss/autoprefixer) - Automatically adds CSS vendor prefixes
- [Browsersync](https://www.browsersync.io/) - Live browser reloading and session synchronisation
- [Express.js](http://expressjs.com/) - Lightweight server
- [Handlebars](http://handlebarsjs.com/) - HTML templating engine

----------------

## Prerequisites

Before creating a markup project, make sure you have the following documents or information:

- **Design** - Completed designs for every page, including responsive designs for applicable pages/components
- **Browser matrix** - Which browsers are supported, which should be functional and which aren't supported at all. This should include a decision on whether progressive enhancement will be used or graceful degradation
- **Branding resources** - Not as important for markup as design, but still useful
- **Documented interactions** - Documented behaviour for interactive components. E.g. what happens when a button is clicked or a link is hovered. Should the header be sticky etc.
- **Documented component breakdown and naming** - Analysis of what parts of the design are individual components, their names and names of smaller parts within them. Useful for handlebars partials and BEM naming. A good process for this is printing off the design and labelling everything

## Setup

1. First, setup the main project repository if you haven't already. This should be the main repo for your project, backend and all. Create a folder in it under `branches/development/src/Solution_MyProject/` called `MyProject.Markup`
2. Download the latest Qubase [release](https://github.com/Jazcash/Qubase/releases) and extract the contents directly into the markup folder you just created. There should be no extra folder here, e.g. `../MyProject.Markup/package.json`
3. Open a cmd prompt in this directory
4. Install [node.js](https://nodejs.org/en/) v4+ if you haven't already (type `node -v` in cmd to check version)
5. Install gulp globally - `npm i -g gulp`
6. Install local dependencies (make sure you're in the directory with package.json) - `npm i`

That's it! If you had no errors, you can now just run `gulp` to compile assets and launch the server. If you do have problems feel free to open an [issue](https://github.com/Jazcash/Qubase/issues).

## Docs

### Table of contents

- [Directory overview](#directory-overview)
- [Gulpfile](#gulpfile)
	- [CSSNano and Autoprefixer](#cssnano-and-autoprefixer)
	- [JSHint](#jshint)
	- [Sourcemaps](#sourcemaps)
	- [Babel](#babel)
	- [Browsersync](#browsersync)
	- [Nodemon](#nodemon)
- [Handlebars](#handlebars)
	- [Partials](#partials)
- [Graceful degradation or progressive enhancement](#graceful-degradation-or-progressive-enhancement)
- [Responsive](#responsive)
- [Style guide](#style-guide)
- [Pattern library](#pattern-library)
- [Rules and guidelines](#rules-and-guidelines)
	- [General](#general)
	- [Markup](#markup)
	- [Images](#images)
	- [Fonts](#fonts)
	- [Styles](#styles)
	- [Scripts](#scripts)
- [Setting up automatic Beanstalk deployment](#setting-up-automatic-beanstalk-deployment)
- [Qubase Todo](#qubase-todo)

### Directory overview

The only directories you need to worry about for frontend projects are as follows:
- **/app** - Server-side files
	- **/views** - Markup files. `.hbs` are [handlebars](#handlebars) files
		- **/layouts** - `main.hbs` contains the project header and footer. All includes go in here
		- **/pages** - E.g. `homepage.hbs`, `blog.hbs`
		- **/partials** - Components, e.g. `carousel.hbs`. See [partials](#partials)
- **/public** - Client-side files
	- **/images** - See [Images](#images)
	- **/scripts** - See [Scripts](#scripts)
	- **/styles** - See [Styles](#styles)

### Gulpfile

Gulp is a task-runner that makes it easy to pipe your files through different sets of tooling. Tasks are written in JS and are intuitive to read and write. If you open `gulpfile.js` you'll see the `styles` and `scripts` tasks run the project's `.scss` and `.js` files through a pipeline of operations and spit out files into the `/build` folder at the end.

You can type `gulp --tasks` to see an overview of all the tasks. Below are descriptions of the important tools used in Qubase's gulpfile.

#### CSSNano and Autoprefixer

CSSNano is a CSS minifier that removes all white-space and unnecessary characters in order to shrink your stylesheet's filesize. It has another tool, called autoprefixer, built-in. Autoprefixer automatically reads your stylesheet and adds vendor-prefixes to relevant properties. This means you don't need to worry about adding all the different variations for things like flexbox and can instead just use the standard format, e.g. `display: flexbox`.

#### Sourcemaps

Sourcemaps provide the data necessary to transform concatenated and minified files back into their original format. This is useful for developer inspection and debugging as the original files will be shown instead of having to sift through minified ones.

#### JSHint

JSHint is a Javascript linting tool that analyses your JS and warns you of things like syntax errors or unused variables.

#### Babel

Babel is a transpiler that allows you to write in newer versions of JS whilst retaining compatibility with older browsers that don't support the newer JS.

#### Browsersync

Browsersync is a synchronised browser-testing tool that automatically refreshes your site's frontend whenever it detects client-side file changes. It also has some nifty functionality like synchronising browser sessions on multiple devices, including synced scrolling.

#### Nodemon

Nodemon refreshes your site's backend whenever it detects server-side file changes.

### Handlebars

Handlebars is a view engine, which means it compiles to HTML. Handlebars was chosen for Qubase as it's purely HTML with the addition of Mustache-style placeholders. It makes it easy to render server-side data in your markup, as well as providing useful helpers to reduce the amount of custom Javascript you may otherwise have to write. For Qubase, Handlebars' primary usage is for partials.

#### Partials

Partials are Handlebar's way of importing markup files. Partials should be treated as modular components, each partial with its own BEM class structure. You can import partials into your pages like this: `{{>card title="card-title"}}`. In the `card.hbs` file we can access the data passed through using `{{title}}` which will render the text `card-title` wherever we put the placeholder.

### Graceful degradation or progressive enhancement

Graceful degradation is the process of developing a site for modern browsers first, then implementing fallbacks for older browsers that don't support newer features. Progressive enhancement is developing a site that works on all browsers first, then implementing fancier stuff for newer browsers afterwards. The difference between these development strategies is that a graceful degradation route tends to mean a lower quality experience the older the browser is, whereas progressive enhancement could mean a less immersive experiences for modern browsers. Pick a strategy that suits the site's purpose.

### Responsive

There are two strategies with responsive design: mobile-first or desktop-first. Whilst either of these approaches should result in the same output, they go about achieving it in different ways.

A mobile-first process will write code with the goal of mobile in-mind. When testing your code in the browser, you test on a mobile first, then develop a media-query solution that targets larger viewports afterwards. This process means use the `above` mixin to target bigger devices.

A desktop-first process means the opposite. Building with larger screens in mind, and testing on them first, then implementing the mobile view after. This strategy means using the `below` mixin to target smaller devices.

Regardless of which you pick, it's a good idea to test on both mobile and desktop at the same time anyway. Browsersync can make testing on multiple devices at the same time easy.

### Style guide

The style guide is a more design-oriented document that describes and demonstrates the themes of the site, including things like colour, spacing, colours, fonts and effects like drop-shadows or gradients.

The style guide is a manually crafted document, found in `app/views/style-guide.hbs`

### Pattern library

The pattern library shows all the project's components on one page, along with their markup code. This makes it easy to see all the available components at a glance and gives a good overview of the project's progress. This page is generated automatically based on all the files in the partials directory.

### Rules and guidelines

#### General

- Use double quotes `"` instead of single `'` quotes
- Indentation should use 4 character wide tabs, not spaces
- Keep everything lowercase where possible
- Only use element ids for selecting elements in JS
- Braces should stay on the same line as the opening selector, without a space inbetween `function hello(){`
- BEM nesting should only ever go one level deep. `block__element--modifier` is allowed.

#### Markup

Markup should be:

- Semantically correct
- SEO-friendly
- Backend-neutral
- Compatible with browsers as per the [browser matrix](matrix)

##### Code rules

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


#### Fonts

- Use web-hosted fonts as much as possible, e.g. https://fonts.google.com or https://typekit.com/

#### Stylesheets

Stylesheets should be:

- Clean, easily readable and modifiable
- Modular, separated and organised
- Compatible with browsers as per the [browser matrix](matrix)

##### Code rules

- When creating component files, the named hierarchy of the component should be noted at the top of the file
- Avoid using !important as much as possible
- Z-indexes should be kept small. Try to stick to increments of 10
- br should be used to separate content, within the context of its container. i.e. content is still related, but should be visibly spaced. In general, you probably don't need to use these
- Use hex instead of RGB
- To change the transparency of a colour, use rgba(#fff, 0.5)
- Try to avoid using colours directly and use variables instead
- Avoid animating layout properties like width, left, top and use transform instead
- In general, an element's position/layout should be defined by its parent (e.g. using padding)
- Order your scss in accordance with this CSScomb file:
- Refer to caniuse.com if unsure about an element or css property's browser support
- Avoid passing specific values into breakpoints directly, use the breakpoint variable instead
- Where possible, try to build components to be reusable inside and outside of the project
- Avoid direct targetting of divs, spans, headings and try to use classes instead
- If some text should look like a heading, but it doesn't make semantic sense for it to be one, use the heading classes
- Avoid closing tags on single elements like input, meta, br, hr etc (see this list?)

#### Scripts

- Use CDNs for libraries where possible
- Don't use raw github links
