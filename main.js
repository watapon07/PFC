

$(function () {
  $("#calculation").on("click", function (event) {
    let v1 = $("#height").val(); //身長代入
    let v2 = $("#weight").val();　//体重代入
    //ここからajax
    $.ajax({
      type: "post",
      url: "from.php",
      data: { "v1": v1, "v2": v2 },
      datatype: "json",
    })
      .then(
        //通信成功時
        function (data) {
          $("#lean").append(data);
        },
        //失敗時
        function () {
          alert("読み込みに失敗しました。");
        });
  });
});