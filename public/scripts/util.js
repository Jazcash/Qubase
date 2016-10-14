// http://stackoverflow.com/a/15226442/1864403
function hasClass(target, className) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}
