<?php
header("Content-type:text/html; charset=utf8");
$id = urldecode($_POST["id"]);
$link = mysqli_connect("localhost","root","","yaofang");//连接并选择数据库
mysqli_set_charset($link,"utf8");//设置字符集
$sql = "select * from list where id = '$id'";
$obj = mysqli_query($link,$sql);
$res = mysqli_fetch_assoc($obj);
$json = json_encode($res);
echo $json;
?>