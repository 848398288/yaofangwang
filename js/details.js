$(() => {
	// 渲染页面
	async function init() {
		await new nav_all().init();
		await new seach().init();
		await new nav().init();
		await new toolbar().init();
		await new footer().init();
		await isLogin();
	}
	init();

	$(".pullDown").css("display", "none");
	$(".nav-all").hover(function() {
		$(".pullDown").css("display", "block");
	}, function() {
		$(".pullDown").css("display", "none");
	})

	$.post("server/getListItem.php", {
		"id": window.location.search.split("?id=")[1]
	}, function(data) {
		let oUl = $(".de_content");
		let strHtml = "";
		strHtml +=
			`
		  <div class="breadcrumb">
		  	<a href="index.html">药房网</a>
		  	<b>&gt;</b>
		  	<a href="#">慢性疾病、三高、男性健康</a>
		  	<b>&gt;</b>
		  	<a href="#">男科用药</a>
		  	<b>&gt;</b>
		  	<a href="index.html" style="color: #1D8BD7;">${data.type == 1 ? "流行性感冒药": "性功能障碍"}</a>
		  </div>
		  <div class="de_con_left">
		  	<div id="preview">
		  		<span>
		  			<img src="${data.img}" >
		  		</span>
		  		<div class="spec-scroll">
		  			<a class="prev"></a>
		  			<a class="next"></a>
		  			<div class="detail_items">
		  				<ul>
		  					<li>
		  						<img src="img/big_1.jpg" >
		  					</li>
		  					<li>
		  						<img src="img/big_1.jpg" >
		  					</li>
		  					<li>
		  						<img src="img/big_1.jpg" >
		  					</li>
		  					<li>
		  						<img src="img/big_1.jpg" >
		  					</li>
		  				</ul>
		  			</div>
		  		</div>
		  	</div>
		  	<div class="comCodCol clear_fix">
		  		<h1>商品编码：<span>${data.list_id}</span></h1>
		  		<h3>
		  			<i class="iconfont icon-wodeguanzhu"></i>
		  			收藏
		  		</h3>
		  	</div>
		  	<p class="desc">
		  		<span>郑重声明：</span>
		  		尊敬的顾客，药房网受各门店委托为其发布药品信息。您的用药需求信息提交后，将由离您较近的药房网门店为您提
		  	</p>
		  </div>
		  
		  <div class="de_con_cen">
		  	<h1>
		  		<img src="img/pr_cen.png" >
		  		<span>[特例]</span>
		  		${data.title}
		  	</h1>
		  	<h3>勃起功能障碍</h3>
		  	<p>${data.specs}</p>
		  	<p>商品编码： ${data.list_id}</p>
		  	<p>批准文号： 国药准字H20020528</p>
		  	<p>生产厂家： <span>${data.shop}</span></p>
		  	<dl class="clear_fix">
		  		<dt>
		  			<span>会  员  价：</span>
		  			<strong>￥${data.price}</strong>
		  		</dt>
		  		<dd>
		  			<em>特例商品：</em>
		  			针对本品不享受优惠券折扣、积分折扣、每康卡不享受97折。
		  		</dd>
		  	</dl>
		  	<button type="button" class="btn1" id="de_btn">加入购物车</button>
		  </div>
		  <div class="de_con_right float_r">
		  	<img src="img/pr_right.png" >
		  </div>
		  `;
		oUl.html(strHtml);
		$("#de_btn").click(addCart)





	}, "json")
	function addCart(){
		//判断用户是否登录
		if(Cookie.getItem("usesname") != undefined){
			//判断商品是否在数据库里面
			let p = new Promise(function(res,rej){
				$.post("server/selectCart.php",{"uses_id":Cookie.getItem("usesname"),"list_id":window.location.search.split("?id=")[1]},function(data){
					// 如果返回来的是0那就说明该数据没有在数据库可以进行插入操作
					if(data == 0){
						res({"uses_id":Cookie.getItem("usesname"),"list_id":window.location.search.split("?id=")[1],"bool":1})
					}else{
						// 如果返回来的不是0那就说明该用户已经将该商品加入到购物车了
						res({"uses_id":Cookie.getItem("usesname"),"list_id":window.location.search.split("?id=")[1],"bool":2});
					}
				})
			})
			p.then(function(data){
				$.post("server/addCast.php",data,function(data){
					if(data ==1){
						alert("该商品已经添加到您的购物车中");
						location=location;
					}else{
						alert("该商品已经在您的购物车中，已将该商品数量加一");
						location=location;
					}
				})
			})
			
		}else{
			alert("请先登录在进行操作");
			window.location.href = "login.html";
		}
		
	}
})
