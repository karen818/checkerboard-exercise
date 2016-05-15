

window.onload = setInterval(function(){
    for (var i = 0; i < 63; i++) {

        var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        var tile = document.createElement("div");

        tile.style.width = '11.1%';
        tile.style.paddingBottom = '11.1%';
        tile.style.cssFloat = 'left';
        tile.style.backgroundColor = color;

        document.body.appendChild(tile);
    }
}, 2000);
