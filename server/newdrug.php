<?php
$link = mysqli_connect('localhost','root','','yaofang');//连接数据库服务器并选择数据库
mysqli_set_charset($link,"utf8");//设置字符集
// if(!$link){
// 	exit("数据库连接失败");
// }else{
// 	echo "数据库连接成功";
// 
$sql = "select * from newdrug";//创建sql语句
$obj = mysqli_query($link,$sql);//处理sql语句
$str = "[";
while($res = mysqli_fetch_assoc($obj)){
	$str .= json_encode($res,true);
	$str .= ",";
}
$str .= "]";
echo $str;
?>