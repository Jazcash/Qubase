// http://stackoverflow.com/a/15226442/1864403
function hasClass(target, className) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}

// flex-grow fallback
let flexgrowEls = document.querySelectorAll(".no-flexbox .flex-grow");
for (let i=0; i	< flexgrowEls.length; ++i){
	let parent = flexgrowEls[i].parentNode;
	let siblings = parent.children;
	let totalWidth =  parseFloat(window.getComputedStyle(parent).width);
	let siblingsWidth = 0;
	for (let j=0; j < siblings.length; ++j){
		if (hasClass(siblings[j], "flex-grow"))
			continue;
		siblingsWidth += parseFloat(window.getComputedStyle(siblings[j]).width);
	}
	let remainingWidth = (totalWidth - siblingsWidth);
	flexgrowEls[i].style.width = remainingWidth + "px";
}
