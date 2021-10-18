/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var survey_options = document.getElementById("survey_options");
var add_more_fields = document.getElementById("add_more_fields");
var remove_fields = document.getElementById("remove_fields");

add_more_fields.onclick = function() {
  var newField = document.createElement("input");
  newField.setAttribute("type", "text");
  newField.setAttribute("name", "survey_options[]");
  newField.setAttribute("class", "ft");
  newField.setAttribute("siz", "50");
  newField.setAttribute("placeholder", "Part Number");
  survey_options.appendChild(newField);
  var newField = document.createElement("input");
  newField.setAttribute("type", "text");
  newField.setAttribute("name", "survey_options[]");
  newField.setAttribute("class", "ft");
  newField.setAttribute("siz", "50");
  newField.setAttribute("placeholder", "Brand / Quantity ");
  survey_options.appendChild(newField);
};

remove_fields.onclick = function() {
  var input_tags = survey_options.getElementsByTagName("input");
  if (input_tags.length > 2) {
    survey_options.removeChild(input_tags() - 1);
  }
};
