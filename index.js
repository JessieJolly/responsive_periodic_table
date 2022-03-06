function changeText(element) {
    var image = document.getElementById('content');
    image.innerHTML=" ";
    image.style.backgroundImage='url(elementimages/'+element.id+'.jpg)';
}
function reset() {
    var image = document.getElementById('content');
    image.style.backgroundImage='url(" ")';
    image.innerHTML="<p>Hover over an element to see its info</p>";
}