myiframe_element = document.getElementById("youtube_video_player");
console.log(myiframe_element);
myiframe_element.src = get_youtube_link(video_link_data[current_path][current_level]);

function get_youtube_link(video_file_ending) {
    return "https://www.youtube.com/embed/" + video_file_ending;
}