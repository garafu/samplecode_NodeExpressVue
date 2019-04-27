// Vue.js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Welcome !'
  }
});

// jQuery
var btnSendOnClick = (event) => {
  $.ajax({
    url: "/api/message",
    method: "GET",
    data: { message: $("#txt-message").val() }
  }).done((data, textStatus, jqXHR) => {
    app.message = data;
  });
};

$(document).ready(() => {
  $("#btn-send").on("click", btnSendOnClick);
  $("form").on("submit", false);
});