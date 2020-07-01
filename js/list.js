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
		   		<a href="#" class="collect_btn">
		   			<i class="iconfont icon-wodeguanzhu"></i>
		   			<em>收藏</em>
		   		</a>
		   		<a href="details.html?id=${item.id}">
		   			<i class="iconfont icon-yaoshichaxun"></i>
		   			查看商品详情
		   		</a>
		   	</div>
		   </div>`;
		})
		oUl.html(strHtml);
	}, "json")

})
