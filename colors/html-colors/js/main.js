"use strict";

function darkColor(color){
    return parseInt(color, 16) > parseInt("AAAAAA", 16) ? true : false;
}

function hexToDec(hex){
    var dec = 0;

    var values = {
        "0": 0,
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "A": 10,
        "B": 11,
        "C": 12,
        "D": 13,
        "E": 14,
        "F": 15
    }

    for (let i = hex.length - 1; i >= 0; i--){
        dec += values[hex[i]] * (16**i);
    }

    return dec;
}

function getRgb(hex){
    let r, b, g, rt, bt, gt;
    rt = hex[0] + hex[1];
    gt = hex[2] + hex[3];
    bt = hex[4] + hex[5];
    r = hexToDec(rt);
    g = hexToDec(gt);
    b = hexToDec(bt);

    return `rbg(${r}, ${g}, ${b})`;
}

window.onload = function(){
    let names = "aliceblue antiquewhite aqua aquamarine azure beige bisque black blanchedalmond blue blueviolet brown burlywood cadetblue chartreuse chocolate coral cornflowerblue cornsilk crimson " +
    "cyan darkblue darkcyan darkgoldenrod darkgray darkgreen darkkhaki darkmagenta darkolivegreen darkorange darkorchid darkred darksalmon darkseagreen darkslateblue darkslategray darkturquoise " +
    "darkviolet deeppink deepskyblue dimgray dodgerblue firebrick floralwhite forestgreen fuchsia gainsboro whostwhite gold goldenrod gray green greenyellow honeydew hotpink indianred indigo " +
    "ivory khaki lavender lavenderblush lawngreen lemonchiffon lightblue lightcoral lightcyan lightgoldenrodyellow lightgray lightgreen lightpink lightsalmon lightseagreen lightskyblue " +
    "lightslategray lightsteelblue lightyellow lime limegreen linen magenta maroon mediumaquamarine mediumblue mediumorchid mediumpurple mediumseagreen mediumslateblue mediumspringgreen mediumturquoise " +
    "mediumvioletred midnightblue mintcream mistyrose moccasin navajowhite navy oldlace olive olivedrab orange orangered orchid palegoldenrod palegreen paleturquoise palevioletred papayawhip peachpuff " + 
    "peru pink plum powderblue purple rebeccapurple red rosybrown royalblue saddlebrown salmon sandybrown seagreen seashell sienna silver skyblue slateblue slategray snow springgreen steelblue tan " +
    "teal thistle tomato turquoise violet wheat white whitesmoke yellow yellowgreen";
    let codes = "F0F8FF FAEBD7 00FFFF 7FFFD4 F0FFFF F5F5DC FFE4C4 000000 FFEBCD 0000FF 8A2BE2 A52A2A DEB887 5F9EA0 7FFF00 D2691E FF7F50 6495ED FFF8DC DC143C 00FFFF 00008B 008B8B  B8860B A9A9A9 006400" + 
    "BDB76B 8B008B 556B2F FF8C00 9932CC 8B0000 E9967A 8FBC8F 483D8B 2F4F4F 00CED1 9400D3 FF1493 00BFFF 696969 1E90FF B22222 FFFAF0 228B22 FF00FF DCDCDC F8F8FF FFD700 DAA520 808080 008000 ADFF2F F0FFF0 " +
    "FF69B4 CD5C5C 4B0082 FFFFF0 F0E68C E6E6FA FFF0F5 7CFC00 FFFACD ADD8E6 F08080 F0FFFF FAFAD2 D3D3D3 90EE90 FFB6C1 FFA07A 20B2AA 87CEFA 778899 B0C4DE FFFFE0 00FF00 32CD32 FAF0E6 FF00FF 800000 66CDAA " +
    "0000CD BA55D3 9370DB 3CB371 7B68EE 00FA9A 48D1CC C71585 191970 F5FFFA FFE4E1 FFE4B5 FFDEAD 000080 FDF5E6 808000 6B8E23 FFA500 FF4500 DA70D6 EEE8AA 98FB98 AFEEEE DB7093 FFEFD5 FFDAB9 CD853F FFC0CB " +
    "DDA0DD B0E0E6 800080 663399 FF0000 BC8F8F 4169E1 8B4513 FA8072 F4A460 2E8B57 FFF5EE A0522D C0C0C0 87CEEB 6A5ACD 708090 FFFAFA 00FF7F 4682B4 D2B48C 008080 D8BFD8 FF6347 40E0D0 EE82EE F5DEB3 FFFFFF F5F5F5 FFFF00 9ACD32";

    names = names.split(" ");
    codes = codes.split(" ");

    let colors = [];

    names.forEach((name, i)=>{
        colors.push({name: name, hex: codes[i], rgb: getRgb(codes[i])});
    });
    
        // <span class="color-color-title">${color.name}</span>
        // <span class="color-code-title">#${color.hex}</span>
    colors.forEach((color) => {
        document.querySelector('#result').innerHTML += `<div class="color-div" style="background-color: ${color.name};">
    <span class="dark-color">This is a dark colored text</span>
    <span class="medium-color">This is a medium light colored text</span>
    <span class="light-color">This is a light colored text</span>
    <input class="color-input" type="text" value="${color.name}">
    <input class="color-input" type="text" value="#${color.hex}">
    <input class="color-input" type="text" value="${color.rgb}">
</div>`;
    });
}