let bool = true;
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

	$(".list-left>ul>li>h3").click(function() {
		if (bool) {
			let iDom = $(this).children()[0];
			$(iDom).removeClass("icon-sanjiaoxing");
			$(iDom).addClass("icon-sanjiaoxing1");
			let ulDom = $(this).nextAll().height();
			$(this).nextAll().css({
				"display": "block",
				"height": "0",
				"overflow": "hidden"
			});
			$(this).nextAll().animate({
				"height": ulDom + "px"
			}, 500);
			bool = false;
		} else {
			let iDom = $(this).children()[0];
			$(iDom).removeClass("icon-sanjiaoxing1")
			$(iDom).addClass("icon-sanjiaoxing");
			$(this).nextAll().css({
				"display": "none"
			});
			bool = true;
		}

	});
	new Promise(function(res,rej){
		$.post("server/getListType.php",{"type":window.location.search.split("?type=")[1]}, function(data) {
			let oUl = $(".cla_drug_border");
			let strHtml = "";
			data.forEach(function(item) {
				strHtml +=
					`
			<div class="drug_item">
			   <div class="drug_item_img">
			   		<a href="#"><img src="${item.img}" ></a>
			   		
			   	</div>
			   	<i>￥${item.price}</i>
			   	<a href="#">${item.title}</a>
			   	<span>${item.specs}</span>
			   	<span>${item.shop}</span>
			   	<div class="drug_action">
			   		<a href="javascript:void(0);" class="collect_btn">
			   			<i class="iconfont icon-wodeguanzhu"></i>
			   			<em>收藏</em>
			   		</a>
					<b style="display:none">${item.list_id}</b>
			   		<a href="details.html?id=${item.list_id}">
			   			<i class="iconfont icon-yaoshichaxun"></i>
			   			查看商品详情
			   		</a>
			   	</div>
			   </div>`;
			})
			oUl.html(strHtml);
			b();
			
			$(".defu li").click(function(){
				$(this).addClass("back").siblings("li").removeClass("back");
				if(this.id == "low"){
					$.post("server/sort.php",{"type":window.location.search.split("?type=")[1],"sort":"ASC"},function(data){
						let oUl = $(".cla_drug_border");
						let str = "";
						data.forEach(function(item) {
							str +=
								`
						<div class="drug_item">
						   <div class="drug_item_img">
						   		<a href="#"><img src="${item[2]}" ></a>
						   		
						   	</div>
						   	<i>￥${item[3]}</i>
						   	<a href="#">${item[4]}</a>
						   	<span>${item[5]}</span>
						   	<span>${item[6]}</span>
						   	<div class="drug_action">
						   		<a href="javascript:void(0);" class="collect_btn">
						   			<i class="iconfont icon-wodeguanzhu"></i>
						   			<em>收藏</em>
						   		</a>
								<b style="display:none">${item[0]}</b>
						   		<a href="details.html?id=${item[0]}">
						   			<i class="iconfont icon-yaoshichaxun"></i>
						   			查看商品详情
						   		</a>
						   	</div>
						   </div>`;
						})
						oUl.html(str);
						b();
					addCollectEvent();
					},"json")
				}else{
					$.post("server/sort.php",{"type":window.location.search.split("?type=")[1],"sort":"DESC"},function(data){
						let oUl = $(".cla_drug_border");
						console.log(oUl);
						let str = "";
						data.forEach(function(item) {
						console.log(item)
							str +=
								`
						<div class="drug_item">
						   <div class="drug_item_img">
						   		<a href="#"><img src="${item[2]}" ></a>
						   		
						   	</div>
						   	<i>￥${item[3]}</i>
						   	<a href="#">${item[4]}</a>
						   	<span>${item[5]}</span>
						   	<span>${item[6]}</span>
						   	<div class="drug_action">
						   		<a href="javascript:void(0);" class="collect_btn">
						   			<i class="iconfont icon-wodeguanzhu"></i>
						   			<em>收藏</em>
						   		</a>
								<b style="display:none">${item[0]}</b>
						   		<a href="details.html?id=${item[0]}">
						   			<i class="iconfont icon-yaoshichaxun"></i>
						   			查看商品详情
						   		</a>
						   	</div>
						   </div>`;
						})
						oUl.html(str);
						b();
						addCollectEvent();
					},"json")
				}
			})
			
			
			
			res("fsdf");
		}, "json")
	}).then(function(data){
		addCollectEvent();
		
	})
	
	
	function addCollectEvent(){
		$(".collect_btn").click(function(){
		let box = JSON.parse(localStorage.getItem("data")) || []; //创建一个数组来装加入购物车的数据
			let img = $(this).parent().siblings(".drug_item_img").find("img")[0].src;
			let title = $(this).parent().siblings("a").text();
			let price = $(this).parent().siblings("i").text();
			let id = $(this).next().text();
			let obj = {};
			obj.id = id;
			obj.img = img;
			obj.title = title;
			obj.price = price;
			let bool =  isAdd(box,id);
			console.log(bool)
			if(bool){
				box.push(obj);
				localStorage.setItem("data", JSON.stringify(box));
				alert("收藏成功");
				$(this).addClass("collect_btn_active").children("i").addClass("collect_i_active").next().text("已收藏");
				a();
			}else{
				$(this).removeClass("collect_btn_active").children("i").removeClass("collect_i_active").next().text("收藏");
				let boxa = JSON.parse(localStorage.getItem("data")) || []; //创建一个数组来装加入购物车的数据
				localStorage.removeItem("data")
				let id = $(this).next().text();
				let res = boxa.filter(function(item){
					return item.id != id
				})
				console.log(22)
				localStorage.setItem("data", JSON.stringify(res));
				a();
			}
		})
		
	}
	
	//处理收藏按钮高亮
	function b(){
		let id = $(".drug_item b").each(function(index,item){
			let id = item.innerText;
			let data = localStorage.getItem("data") || [];
			let res = JSON.parse(data);
			res.forEach((item) =>{
				if(item.id == id){
					$(this).prev().addClass("collect_btn_active").children("i").addClass("collect_i_active").next().text("已收藏");
				}
			})
			
		})
	}
	
	
	//判断是否添加到缓存里
	function isAdd(arr,id){
		for (let i = 0; i < arr.length; i++) {
			if(arr[i].id == id){
				return false;
			}
		}
		return true;
	}
})
