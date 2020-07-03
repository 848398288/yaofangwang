<?php
header("Content-type:text/html; charset=utf8");
$uses_id = $_POST["uses_id"];
$list_id = $_POST["list_id"];
$bool = $_POST["bool"];
$link = mysqli_connect("localhost","root","","yaofang");//连接并选择数据库
mysqli_set_charset($link,"utf8");//设置字符集
if($bool == 1){
	$sql = "INSERT INTO cart(uses_id, list_id,num) VALUES ('$uses_id','$list_id',1)";
	$obj = mysqli_query($link,$sql);
	if($obj){
		echo 1;
	}
}else{
	$sql = "UPDATE `cart` SET `num`= num+1 where uses_id = '$uses_id' and list_id = '$list_id'";
	$obj = mysqli_query($link,$sql);
	if($obj){
		echo 2;
	}
}

?>