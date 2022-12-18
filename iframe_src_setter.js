"use strict";
var myiframe_element = document.getElementById("youtube_video_player");
myiframe_element.src = get_youtube_link(video_link_data[current_path][current_level]);

function get_youtube_link(video_file_ending) {
    return "https://www.youtube-nocookie.com/embed/" + video_file_ending;
}