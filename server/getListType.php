<?php
header("Content-type:text/html; charset=utf8");
$type = urldecode($_POST["type"]);
$link = mysqli_connect("localhost","root","","yaofang");//连接并选择数据库
mysqli_set_charset($link,"utf8");//设置字符集
$sql = "select * from list where type = '$type'";
$obj = mysqli_query($link,$sql);
$arr = [];
while ($res = mysqli_fetch_assoc($obj)) {
 $arr[] = $res;
}
$json = json_encode($arr);
echo $json;
?>