<?php
header("Content-type:text/html; charset=utf8");
$cart_id = $_POST["id"];
$num = $_POST['num'];
$link = mysqli_connect("localhost","root","","yaofang");//连接并选择数据库
mysqli_set_charset($link,"utf8");//设置字符集
$sql = "UPDATE `cart` SET num = '$num' where cart_id = '$cart_id'";//创建sql语句
$obj = mysqli_query($link,$sql);//处理sql语句
?>