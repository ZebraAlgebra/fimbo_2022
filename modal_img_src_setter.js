"use strict";

var pic1 = document.getElementsByClassName('question_sheet_pic')[0];
var pic2 = document.getElementsByClassName('location_sheet_pic')[0];
var pic3 = document.getElementsByClassName('relation_sheet_pic')[0];

pic1.src = get_imgur_link(player_guide_pictures["question_sheet"][current_path]);
pic2.src = get_imgur_link(player_guide_pictures["location_sheet"]);
pic3.src = get_imgur_link(player_guide_pictures["relation_sheet"]);

function get_imgur_link(pic_file_ending) {
    return "https://i.imgur.com/" + pic_file_ending;
}