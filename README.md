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
- [Setting up automatic Beanstalk deployment](#setting-up-automatic-beanstalk-deployment)
- [Graceful degradation or progressive enhancement](#graceful-degradation-or-progressive-enhancement)
- [Responsive](#responsive)
- [Style guide](#style-guide)
- [Pattern library](#pattern-library)
- [Coding rules and guidelines](#coding-rules-and-guidelines)
	- [General](#general)
	- [Markup](#markup)
	- [Styles](#styles)
	- [Scripts](#scripts)

#### Directory overview
[back to top](#table-of-contents)

#### Gulpfile
[back to top](#table-of-contents)

##### CSSNano and Autoprefixer
[back to top](#table-of-contents)

##### JSHint
[back to top](#table-of-contents)

##### Sourcemaps
[back to top](#table-of-contents)

##### Babel
[back to top](#table-of-contents)

##### Browsersync
[back to top](#table-of-contents)

##### Nodemon
[back to top](#table-of-contents)

#### Handlebars
[back to top](#table-of-contents)

#### Setting up automatic Beanstalk deployment
[back to top](#table-of-contents)

#### Graceful degradation or progressive enhancement
[back to top](#table-of-contents)

#### Responsive
[back to top](#table-of-contents)

#### Style guide
[back to top](#table-of-contents)

#### Pattern library
[back to top](#table-of-contents)

#### Coding rules and guidelines
[back to top](#table-of-contents)

##### General
[back to top](#table-of-contents)

##### Markup
[back to top](#table-of-contents)

##### Styles
[back to top](#table-of-contents)

##### Scripts
[back to top](#table-of-contents)

