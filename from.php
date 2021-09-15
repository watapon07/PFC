<?php
//POSTデータ受け取り
$v1 = $_POST['v1'];
$v2 = $_POST['v2'];

//計算式
$lean = $v1 * $v2;

//返り値
header("Content-type: application/json; charset=UTF-8");
echo json_encode($lean);
?>