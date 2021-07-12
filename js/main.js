function textGenerator({
    font_size,
    offset_x,
    offset_y,
    blur,
    color,
    opacity,
    rgba
}) {
    var h1Styles = offset_x + " px " + offset_y + " px " + blur + " px " + rgba
    $("h1").css("text-shadow", h1Styles)

    $("#resultHex").val("background-color: " + color + "; "
        + ";\nopacity: " + opacity + "; "
        + "font-size" + font_size + "px;")

    $("#resultRgba").val("text-shadow: " + offset_x + "px "
        + offset_y + "px " + blur + "px; \n" + rgba + ";\n"
        + "font-size" + font_size + "px;")
}

textGenerator({
    font_size: 40,
    offset_x: 4,
    offset_y: -1,
    blur: 0,
    color: "#f2ff42",
    opacity: 1,
    rgba: "rgba(225, 0, 0, 1)"
})

$(document).on("input change", "input", function (){

    var font_size = $("#font_size").val();
    var offset_x = $("#offset_x").val();
    var offset_y = $("#offset_y").val();
    var blur = $("#blur").val();
    var color = $("#color").val() + '';
    var opacity = $("#opacity").val();
    var rgba = $("#rgba").val();

    // Перевод с HEX в RGBA
    // Цвет  HEX - # f 2 f f 4 2 

    var red16 = color[1]+''+color[2];
    var green16 = color[3]+''+color[4];
    var blue16 = color[5]+''+color[6];

    var red10 = parseInt(red16,16);
    var green10 = parseInt(green16,16);
    var blue10 = parseInt(blue16,16);

    var rgba = "rgba(" + red10 + ", " + green10 + ", " + blue10 + ", " + opacity + "); "
    
    $("h1").css("fontSize", font_size + "px ");
    textGenerator({
        font_size:font_size,
        offset_x:offset_x,
        offset_y:offset_y,
        blur:blur,
        color:color,
        opacity:opacity,
        rgba:rgba
    });
});



