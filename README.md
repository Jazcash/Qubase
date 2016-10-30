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

## Docs (WIP)

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
- [Setting up automatic Beanstalk deployment](#setting-up-automatic-beanstalk-deployment)
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
- [Qubase Todo](#qubase-todo)

### Directory overview
[[back to contents](#table-of-contents)]

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
[[back to contents](#table-of-contents)]

Gulp is a task-runner that makes it easy to pipe your files through different sets of tooling. Tasks are written in JS and are intuitive to read and write. If you open `gulpfile.js` you'll see the `styles` and `scripts` tasks run the project's `.scss` and `.js` files through a pipeline of operations and spit out files into the `/build` folder at the end.

You can type `gulp --tasks` to see an overview of all the tasks. Below are descriptions of the important tools used in Qubase's gulpfile.

#### CSSNano and Autoprefixer
[[back to contents](#table-of-contents)]

CSSNano is a CSS minifier that removes all white-space and unnecessary characters in order to shrink your stylesheet's filesize. It has another tool, called autoprefixer, built-in. Autoprefixer automatically reads your stylesheet and adds vendor-prefixes to relevant properties. This means you don't need to worry about adding all the different variations for things like flexbox and can instead just use the standard format, e.g. `display: flexbox`.

#### Sourcemaps
[[back to contents](#table-of-contents)]

Sourcemaps provide the data necessary to transform concatenated and minified files back into their original format. This is useful for developer inspection and debugging as the original files will be shown instead of having to sift through minified ones.

#### JSHint
[[back to contents](#table-of-contents)]

JSHint is a Javascript linting tool that analyses your JS and warns you of things like syntax errors or unused variables.

#### Babel
[[back to contents](#table-of-contents)]

Babel is a transpiler that allows you to write in newer versions of JS whilst retaining compatibility with older browsers that don't support the newer JS.

#### Browsersync
[[back to contents](#table-of-contents)]

Browsersync is a synchronised browser-testing tool that automatically refreshes your site's frontend whenever it detects client-side file changes. It also has some nifty functionality like synchronising browser sessions on multiple devices, including synced scrolling.

#### Nodemon
[[back to contents](#table-of-contents)]

Nodemon refreshes your site's backend whenever it detects server-side file changes.

### Handlebars
[[back to contents](#table-of-contents)]

Handlebars is a view engine, which means it compiles to HTML. Handlebars was chosen for Qubase as it's purely HTML with the addition of Mustache-style placeholders. It makes it easy to render server-side data in your markup, as well as providing useful helpers to reduce the amount of custom Javascript you may otherwise have to write. For Qubase, Handlebars primary usage is for partials.

#### Partials
[[back to contents](#table-of-contents)]

Partials are Handlebar's way of importing markup files. Partials should be treated as modular components, each partial with its own BEM class structure. You can import partials into your pages like this: `{{>card title="card-title"}}`. In the `card.hbs` file we can access the data passed through using `{{title}}` which will render the text `card-title` wherever we put the placeholder.

### Setting up automatic Beanstalk deployment
[[back to contents](#table-of-contents)]

### Graceful degradation or progressive enhancement
[[back to contents](#table-of-contents)]

### Responsive
[[back to contents](#table-of-contents)]

### Style guide
[[back to contents](#table-of-contents)]

### Pattern library
[[back to contents](#table-of-contents)]

### Rules and guidelines
[[back to contents](#table-of-contents)]

#### General
[[back to contents](#table-of-contents)]

#### Markup
[[back to contents](#table-of-contents)]

#### Images
[[back to contents](#table-of-contents)]

#### Fonts
[[back to contents](#table-of-contents)]

#### Styles
[[back to contents](#table-of-contents)]

#### Scripts
[[back to contents](#table-of-contents)]

## Qubase Todo
[[back to contents](#table-of-contents)]
- Babel polyfill
- Replace JSHint with ESLint
