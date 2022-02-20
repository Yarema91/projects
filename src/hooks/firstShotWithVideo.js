//Создаю элементы по получаемым данным
import React from "react";

export function extractFrame() {
    "use strict";
    
    var video, $output;
    var scale = 0.25;
    
    var initialize = function() {
        $output = $("#output");
        video = $("#video").get(0);
        $("#capture").click(captureImage);                
    };
    
    var captureImage = function() {
        var canvas = document.createElement("canvas");
        canvas.width = video.videoWidth * scale;
        canvas.height = video.videoHeight * scale;
        canvas.getContext('2d')
              .drawImage(video, 0, 0, canvas.width, canvas.height);
    
        var img = document.createElement("img");
        img.src = canvas.toDataURL();
        $output.prepend(img);
    };
    
    $(initialize);    
    }

// var elements;
// for (var i = 0; i < elements.length; i++) {
//     var element = document.createElement("https://www.youtube.com/watch?v=oUFJJNQGwhk");
//     element.src = elements[i].url;
//     element.addEventListener("loadeddata", loadedData);
//     element.addEventListener("timeupdate", timeUpdate);
//     element.addEventListener("ended", timeEnded);
// }
 
// var loadedData = function (e) {
//     var canvas = document.createElement('canvas');
//     canvas.width = 300;
//     canvas.height = 300;
 
//     var context = canvas.getContext('2d');
//     context.drawImage(this, 0, 0, 300, 300); // this в данном случае это мой video
 
//     var dataURL = canvas.toDataURL();
// }
