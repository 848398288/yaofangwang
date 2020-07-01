$(()=>{
	async function createPublicDom() {
		await new nav_all().init();
		await new seach().init();
		await new nav().init();
		await new toolbar().init();
		await new trusted().init();
		await new footer().init();
	}
	createPublicDom();
	
	
	//轮播图内容
	var mySwiper = new Swiper('.swiper-container', {
		loop: true, // 循环模式选项
		autoplay: {
			delay: 1000,
			stopOnLastSlide: false,
			disableOnInteraction: true
		},
		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
		},
		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	})
	
	//新药品发起请求
	$.post("./server/newdrug.php", function(data) {
		data = data.slice(0, -2);
		data += "]";
		data = JSON.parse(data);
		console.log(data)
		let strHtml = "";
		data.forEach(item => {
			strHtml +=
				`
			<li>
				<a href="list.html">
					<img src="${item.img}" >
					<h4>${item.name}</h4>
					<h5>￥${item.price}</h5>
				</a>
			</li>
			`;
		})
		$(".slideTxtBox .bd").html(strHtml);
	})
	
	
})