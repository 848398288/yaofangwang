<?php
header("Content-type:text/html; charset=utf8");
$uses_id = $_POST["uses_id"];
$list_id = $_POST["list_id"];
$link = mysqli_connect("localhost","root","","yaofang");//连接并选择数据库
mysqli_set_charset($link,"utf8");//设置字符集
$sql = "select * from cart where uses_id = '$uses_id' and list_id = $list_id";//创建sql语句
$obj = mysqli_query($link,$sql);//处理sql语句
$num = mysqli_num_rows($obj);
echo $num;
?>