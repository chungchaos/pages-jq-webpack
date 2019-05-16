
import $ from "jquery";
import "./css/style.min.css";
import "./css/common.css";
const entryJson = require("./entry.json");

$(() => {
    $("html").css("font-size","16px");
    for (let k in entryJson){
        $("body").append("<a style='padding-left:3rem;font-size: 1rem;line-height: 1rem;display: block' href='"+entryJson[k]+"'>"+entryJson[k]+"</a></br>");
    }
});

