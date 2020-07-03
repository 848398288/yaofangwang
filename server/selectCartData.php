<?php
header("Content-type:text/html; charset=utf8");
$uses_id = $_POST["uses_id"];
$link = mysqli_connect("localhost","root","","yaofang");//连接并选择数据库
mysqli_set_charset($link,"utf8");//设置字符集
$sql = "SELECT cart.*,list.title,list.img,list.price,list.type,list.shop,list.specs FROM cart , list WHERE cart.list_id = list.list_id and uses_id = $uses_id";//创建sql语句
$obj = mysqli_query($link,$sql);//处理sql语句
$num = mysqli_num_rows($obj);
$res = mysqli_fetch_all($obj,MYSQLI_ASSOC);
echo json_encode($res,true);
?>
