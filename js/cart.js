$(() => {
	// 渲染页面
	async function createPublicDom() {
		await new nav_all().init();
		await new seach().init();
		await new nav().init();
		await new toolbar().init();
		await new trusted().init();
		await new footer().init();
		await isLogin();
	}
	createPublicDom();


	$(".pullDown").css("display", "none");
	$(".nav-all").hover(function() {
		$(".pullDown").css("display", "block");
	}, function() {
		$(".pullDown").css("display", "none");
	})

	let uses_id = Cookie.getItem("usesname") || "1";
	new Promise(function(res,rej){
		$.post("server/selectCartData.php", {
			"uses_id": uses_id
		}, function(data) {
			let num = 0;//记录一下总数
			if (data == "") {
				$(".cart_content").html("您还未登录哦！请先<a href='login.html'>登录</a>")
			} else {
				let arr = [];
				data.forEach(item => {
					let result = arr.filter((ele) => ele.store == item.shop);
					if (result.length == 0) {
						arr.push({
							store: item.shop,
							goods: []
						});
					}
				})
		
				/* 把所有的数据依次加入到对象中去 */
				data.forEach(item => {
					arr.forEach(ele => {
						if (ele.store == item.shop) {
							ele.goods.push(item);
						}
					})
				})
				let htmlStr = "";
				arr.forEach(function(item){
					let dom = "";
					htmlStr += `<div class="imfor_box">
						<div class="tit_3">
							<input type="checkbox" name="checkShop" class="titCheck" />
							${item.store}
							<span>自营</span>
						</div>
						`;
					item.goods.forEach(function(item){
						num += item.num*1;
						htmlStr += `
							<div class="goods_line">
								<div class="goods_item clear_fix">
									<div class="check">
										<input type="checkbox" />
									</div>
									<div class="goods">
										<dl>
											<dt>
												<img src="${item.img}">
											</dt>
											<dd>
												<span>${item.title}</span>
												<strong>${item.specs}</strong>
											</dd>
										</dl>
									</div>
						
									<div class="pices">
										￥${item.price}
									</div>
						
									<div class="num">
										<span class="reduc">&nbsp;-&nbsp;</span>
										<input type="text" value="${item.num}" class="itxt" minnum="1" onkeyup="this.value=this.value.replace(/\D/g,'')"
										 onafterpaste="this.value=this.value.replace(/\D/g,'')">
										<span class="add">&nbsp;+</span>
										<u style = "display:none">${item.cart_id}</u>
									</div>
									
									<div class="totle">${((item.num *1) * (item.price * 1)).toFixed(2)}</div>
									<div class="available">有货</div>
									<a class="del">删除</a>
								</div>
							</div>
						`;
					})
					htmlStr += `</div>`;
				})
				$("#a").html(htmlStr);
				$("#allGnum").text(num);
			}
			res("");
			
		}, "json")
	}).then(function(){
		addEvent();
	})
	
	
	
	function addEvent(){
		//绑定全选按钮
		$(".all").click(function(){
			let arr = $("#a").find("input[type = checkbox]")
			arr.prop("checked",true);
			let allNum = 0;
			let allPeice = 0;
			$("#a").find(".itxt").each(function(index,item){
				allNum += item.value *1;
			})
			$("#a").find(".totle").each(function(index,item){
				allPeice += item.innerText * 1;
			})
			$("#number").text(allNum);
			$("#sunum").text(allPeice.toFixed(2));
			if(!$(this).prop("checked")){
				arr.prop("checked",false);
				$("#number").text(0)
				$("#sunum").text(0.00);
			}
		})
		
		//绑定店铺按钮
		$(".titCheck").click(function(){
			$(this).parent().siblings().find("input[type = checkbox]").prop("checked",true);
			if(!$(this).prop("checked")){
				$(this).parent().siblings().find("input[type = checkbox]").prop("checked",false);
			}
			total();
		})
		
		//绑定单个按钮
		$(".goods_line").find("input[type = checkbox]").click(function(){
			total();
			let falg = true;
			let arr =  $(this).parents(".imfor_box").children(".goods_line").find("input[type = checkbox]");
			arr.each(function(index,item){
				if(!$(item).prop("checked")){
					falg = false;
				}
			})
			if(falg){
				$(this).parents(".imfor_box").children(".tit_3").find("input[type = checkbox]").prop("checked",true);
			}else{
				$(this).parents(".imfor_box").children(".tit_3").find("input[type = checkbox]").prop("checked",false);
			}
		})
		
		
		//绑定上下按钮
		$(".reduc").click(function(){
			let num = $(this).next().val()*1-1;
			let id = $(this).next().next().next().text();
			if(num == 0)return;
			$.post("server/cartPrev.php",{"id":id,"num":num},()=>{
				$(this).next().val(num);
				let danjia = $.trim($(this).parent().prev().text()).split("￥")[1];
				$(this).parent().next().text(((danjia*1) * num).toFixed(2));
				if($(this).parent().siblings(".check").children().prop("checked")){
					total();
				}
			})
		})
		$(".add").click(function(){
			let num = $(this).prev().val()*1+1;
			let id = $(this).next().text();
			$.post("server/cartPrev.php",{"id":id,"num":num},()=>{
				$(this).prev().val(num);
				let danjia = $.trim($(this).parent().prev().text()).split("￥")[1];
				$(this).parent().next().text(((danjia*1) * num).toFixed(2));
				if($(this).parent().siblings(".check").children().prop("checked")){
					total();
				}
			})
		})
		
		// 绑定删除方法
		$(".del").click(function(){
			let id = $(this).siblings(".num").children("u").text();
			$.post("server/delCart.php",{"id":id},function(data){
				if(data == 1){
					alert("删除成功");
					location = location;
				}else{
					alert("删除失败");
					location = location;
				}
			})
		})
		
		//付款的方法
		$(".cart_btn").click(function(){
			alert("尚未开通付款功能，请随便逛逛")
		})
	}
	
	
	
	// 计算总价的方法
	function total(){
		let allNum = 0;
		let allPrice = 0;
		$(".goods_line").find("input[type = checkbox]").each(function(){
			if($(this).prop("checked")){
				let price = $.trim($(this).parent().next().next().next().next().text())*1
				let num = $.trim($(this).parent().next().next().next().find(".itxt").val())*1;
				allNum += num;
				allPrice += price;
			}
		});
		$("#number").text(allNum)
		$("#sunum").text(allPrice.toFixed(2));
	}
	
	
	
})