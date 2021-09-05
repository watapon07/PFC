

$(function () {
  $("#calculation").on("click", function (event) {
    let v1 = $("#height").val(); //身長代入
    let v2 = $("#weight").val();　//体重代入
    //ここからajax
    $.ajax({
      type: "post",
      url: "form.php",
      data: {"v1": v1, "v2":v2},
      datatype: "json"
    })
      .then(
        data => $('#lean').append(data),
        error => alert('読み込み失敗')
      )
  })
});