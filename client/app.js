$(document).ready(() => {
  $("#btnSubmit").on("click", () => {
    $.ajax({
      type: "GET",
      url: "/api/test",
      dataType: "json",
    }).then((res) => console.log(res));
  });
  $("#btnSubmit2").on("click", () => {
    $.ajax({
      type: "GET",
      url: "/api/test2",
      dataType: "json",
    }).then((res) => console.log(res));
  });
  $("#btnSubmit3").on("click", () => {
    $.ajax({
      type: "GET",
      url: "/api/test3",
      dataType: "json",
    }).then((res) => {
      $("#btn").html(res.data);
    });
  });
});
