<?php
header("Content-type:text/html; charset=utf8");
$sort = $_POST["sort"];
$link = mysqli_connect("localhost","root","","yaofang");//连接并选择数据库
mysqli_set_charset($link,"utf8");//设置字符集
$sql = "SELECT * FROM `list` ORDER BY `list`.`price` $sort";
$obj = mysqli_query($link,$sql);
$res = mysqli_fetch_all($obj);
$json = json_encode($res);
echo $json;
?>