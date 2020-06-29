<?php
$usesname = $_POST['usesname'];
$link = mysqli_connect('localhost','root','','yaofang');//连接数据库服务器并选择数据库
mysqli_set_charset($link,"utf8");//设置字符集
// if(!$link){
// 	exit("数据库连接失败");
// }else{
// 	echo "数据库连接成功";
// 
$sql = "select * from uses where usesname = ".$usesname;//创建sql语句
$obj = mysqli_query($link,$sql);//处理sql语句
$num = mysqli_num_rows($obj);
echo $num;
?>