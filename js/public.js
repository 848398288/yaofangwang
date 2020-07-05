//判断用户是否登录
function isLogin() {
	if (Cookie.getItem("usesname") != undefined) {
		$("#head-nav .nav").children().eq(0).html(`<span>欢迎你&nbsp;&nbsp;&nbsp;&nbsp;${Cookie.getItem("usesname")}</span>`);
		$("#head-nav .nav").children().eq(1).html(`<span>注销</span>`);
		$("#head-nav .nav").children().eq(1).children().eq(0).css({
			"color": "red",
			"margin-left": "10px"
		});
		$("#head-nav .nav").children().eq(1).children().eq(0).click(function() {
			Cookie.removeItem("usesname");
			alert("注销成功");
			window.location.reload();
		})
	}
}

function a() {
	let data = localStorage.getItem("data") || [];
	$(".tr_c_pan").html("请先进行收藏");
	if (data == "") {
		return
	}
	let res = JSON.parse(data);
	res.reverse();
	let browsingHtml = ""
	res.forEach(function(item) {
		browsingHtml +=
			`
				<dl class="clear_fix">
					<dt>${item.title}</dt>
					<dd>
						<img src="${item.img}" >
						<span>
							<b>${item.price}</b>
							<em>查看详情</em>
						</span>
					</dd>
				</dl>
				`;
	})
	$(".tr_c_pan").html(browsingHtml);
}


// 头部的信任区块类
class trusted {
	constructor() {
		this.flag = true;
	}
	init() {
		this.createDom();
		this.addEvent();
	}
	createDom() {
		let trusted = $(
			`<div class="trusted-box">
			<div class="trusted">
				<div class="trusted-l">
					<i class="iconfont icon-shouquan"></i>
					<span>该网站已经认证联盟认证为可信网站，请放心访问 </span>
				</div>
				<div class="trusted-r">
					<a href="#">了解详情&gt;</a>
					<img src="img/trusted-1.png" class="float_r">
				</div>
				
			</div>
			<ul>
				<li>
					<i class="iconfont icon-zhengque"></i>
					<span>网站安全检测</span>
				</li>
				<li>
					<i class="iconfont icon-zhengque"></i>
					<span>身份证明信息</span>
				</li>
				<li>
					<i class="iconfont icon-zhengque"></i>
					<span>ICP备案审查</span>
				</li>
				<li>
					<i class="iconfont icon-zhengque"></i>
					<span>工商登记信息</span>
				</li>
				<li>
					<i class="iconfont icon-zhengque"></i>
					<span>业务资质许可</span>
				</li>
			</ul>
		</div>
		<div class="trusted-toggle">
			<img src="img/trusted_hide.png">
			<img src="img/trusted_show.png">
		</div>`
		);
		$("body").prepend(trusted);
	}
	addEvent() {
		let self = this;
		$(".trusted-toggle").click(function() {
			if (self.flag) {
				$(this).children().eq(0).css("display", "none");
				$(this).children().eq(1).css("display", "block");
				$(".trusted-box").css("display", "none");
				self.flag = false;
			} else {
				$(this).children().eq(1).css("display", "none");
				$(this).children().eq(0).css("display", "block");
				$(".trusted-box").css("display", "block");
				self.flag = true;
			}
		})
	}
}
// 公共右侧菜单栏
class toolbar {
	constructor() {}
	init() {
		this.createDom();
		this.addEvent();
		this.renderingUl();
	}
	createDom() {
		let toolbar = $(
			`<div class="toolbar">
			<div class="tool-left">
				<div class="tool-tab">
					<div class="myUse">
						<i class="iconfont icon-yonghu"></i>
						<em>我的账户</em>
					</div>
					<div class="demand">
						<i class="iconfont icon-qingdan"></i>
						<p>需求清单</p>
						<span class="cart_num">0</span>
					</div>
					<div class="follow">
						<i class="iconfont icon-wodeguanzhu"></i>
						<em>我的收藏</em>
					</div>
					<div class="browse">
						<i class="iconfont icon-zuijinliulan"></i>
						<em>最近浏览</em>
					</div>
					<div class="kefu">
						<i class="iconfont icon-kefu"></i>
						<em>客服</em>
					</div>
					<div class="healthy">
						<i class="iconfont icon-jiankangshequ"></i>
						<em>健康社区</em>
					</div>
					<div class="disease">
						<i class="iconfont icon-jibing"></i>
						<em>疾病频道</em>
					</div>
				</div>
				<div class="tool-footer">
					<div class="top">
						<i class="iconfont icon-arrow-up"></i>
						<em>顶部</em>
					</div>
					<div class="code">
						<i class="iconfont icon-qrcode1"></i>
						<u>
							<dl>
								<dt>访问Wap站</dt>
								<dd>
									<img src="img/code.jpg" >
								</dd>
							</dl>
						</u>
					</div>
					<div class="feedback">
						<i class="iconfont icon-iconfk"></i>
						<em>反馈</em>
					</div>
				</div>
			</div>
			<div class="tool-right">
				
				<div class="tr_my">
					<h2 class="title">
						<i class="iconfont icon-yonghu"></i>
						我的账户
						<i class="iconfont icon-cha float_r" style="margin-right: 30px;"></i>
					</h2>
					<p>
						<em id="myUses">231312</em>
						<span>您好，欢迎您！！</span>
					</p>
				</div>
				
				<div class="tr_cart">
					<h2 class="title">
						<i class="iconfont icon-danju-zhengque"></i>
						我的购物车
						<i class="iconfont icon-cha float_r" style="margin-right: 30px;"></i>
					</h2>
					<div class="tr_c_con">
						
					</div>
					
					<div class="count">
						<span>
							<i id="count_num"></i>
							件商品
							<b>共计：<em id="count_price"></em></b>
							
						</span>
						<a href="cart.html" class="confirm_btn1">下一步</a>
					</div>
				</div>
				
			
				
				<div class="tr_panel">
					<h2 class="title">
						<i class="iconfont icon-danju-zhengque"></i>
						最近浏览
						<i class="iconfont icon-cha float_r" style="margin-right: 30px;"></i>
					</h2>
					<div class="tr_c_pan">
						
						
					</div>
				</div>
			</div>
		</div>`
		);
		$("body").append(toolbar);
	}

	addEvent() {
		$(".tool-tab div:lt(3)").click(function() {
			let index = $(this).index();
			$($(".tool-right").children()[index]).css("display", "block").siblings().css("display", "none");
			$($($(".toolbar").addClass("posi").children().children()[0]).children()[index]).css("background", "red").siblings()
				.css("background", "");
		})
		$(".icon-cha").click(function() {
			$($(this).parentsUntil(".toolbar").parent()[0]).removeClass("posi");
			$(".tool-tab").children().css("background", "")

		})
		$(".tool-footer .top").click(
			function() {
				$("html,body").animate({
					"scrollTop": '0px'
				}, 500)
			}
		);
	}

	renderingUl() {
		//渲染我的用户列表
		if (Cookie.getItem("usesname") != undefined) {
			$("#myUses").text(Cookie.getItem("usesname"));
			$("#myUses").css({
				"color": "red",
				"font-size": "20px"
			})
		} else {
			$(".tr_my p").html("您还未登录，点击去<a href='login.html'>登录</a>")
		}

		//渲染购物车列表
		let uses_id = Cookie.getItem("usesname") || "1";
		$.post("server/selectCartData.php", {
			"uses_id": uses_id
		}, function(data) {
			if (data == "") {
				$(".tr_c_con").html("您还未登录哦！请先<a href='login.html'>登录</a>")
			} else {
				let strHtml = "";
				let num = 0;
				let price = 0;
				data.forEach(item => {
					strHtml +=
						`<dl class="clear_fix">
							<dt><img src="${item.img}" ></dt>
							<dd>
								<span>
									${item.title}
								</span>
								<strong>
									￥${item.price}
									<i>×${item.num}</i>
								</strong>
							</dd>
						</dl>`;
					num += item.num * 1;
					price += (item.num * 1) * (item.price * 1);
				})
				$(".tr_c_con").html(strHtml);
				$("#count_num").text(num);
				$("#count_price").text(price.toFixed(2));
				$(".demand .cart_num").text(data.length)
			}
		}, "json")

		//渲染最近浏览
		a();
	}
}


// 导航列表
class nav {
	constructor() {}
	init() {
		let p = new Promise((res, rej) => {
			this.createDom();
			res("");
		}).then((data) => {
			this.addEvent();
		})
	}
	createDom() {
		let nav = $(
			`<div id="head-nav">
			<div class="w  clear_fix">
				<ul class="nav clear_fix">
					<li>
						<a href="login.html">请登录</a>
					</li>
					<li>
						<a href="register.html">注册</a>
					</li>
					<li class="show">
						<strong>我的药房网<i class="iconfont icon-icon"></i></strong>
						<div class="nav-a hide">
							<a href="#">我的清单</a>
							<a href="#">我的优惠券</a>
							<a href="#">我的留言</a>
							<a href="#">我的帖子</a>
						</div>
					</li>
					<li>
						<a href="">
							<i class="iconfont icon-danju-zhengque"></i>
							需求清单
						</a>
					</li>
					<li class="show">
						<strong><i class="iconfont icon-shouji"></i>手机版<i class="iconfont icon-icon"></i></strong>
						<div class="nav-code hide">
							<dl>
								<dt>访问Wap站</dt>
								<dd><img src="img/code.jpg"></dd>
							</dl>
						</div>
					</li>
					<li class="show">
						<strong>网站导航<i class="iconfont icon-icon"></i></strong>
						<div class="nav-list hide">
							<dl class="two">
								<dt>热门专区</dt>
								<dd>
									<a href="#">重大疾病</a>
									<a href="#">情趣商城</a>
									<a href="#">&nbsp;</a>
									<a href="#">慢性疾病 </a>
									<a href="#">特产商城</a>
									<a href="#">&nbsp;</a>
									<a href="#">常见疾病</a>
									<a href="#">宁草堂</a>
									<a href="#">&nbsp;</a>
									<a href="#">健康商城</a>
									<a href="#">健康社区</a>
									<a href="#">&nbsp;</a>
									<a href="#">体检商城</a>
									<a href="#">&nbsp;</a>
									<a href="#">&nbsp;</a>
								</dd>
							</dl>
							<dl class="two">
								<dt>特色频道</dt>
								<dd>
									<a href="#">男科疾病</a>
									<a href="#">消化不良</a>
									<a href="#">浅部真菌</a>
									<a href="#">盖平频道</a>
									<a href="#">过敏频道</a>
									<a href="#">乳腺癌频道</a>
									<a href="#">备孕频道</a>
									<a href="#">肝癌频道</a>
									<a href="#">肾癌频道</a>
									<a href="#">少儿频道</a>
									<a href="#">肠癌频道</a>
									<a href="#">胃癌频道</a>
									<a href="#">高血压频道</a>
									<a href="#">白血病频道</a>
									<a href="#">渐冻人频道</a>
								</dd>
							</dl>
							<dl class="last">
								<dt>健康服务</dt>
								<dd>
									<a href="#">药师咨询</a>
									<a href="#">在线问诊</a>
									<a href="#">健康资讯</a>
									<a href="#">寻医问药 </a>
									<a href="#">信息服务</a>
								</dd>
							</dl>
						</div>
					</li>
					<li>
						<div class="swiper">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<i class="iconfont icon-diqiu"></i>食品药品投诉举报热线：12331
								</div>
								<div class="swiper-slide">
									<i class="iconfont icon-diqiu"></i>互联网药品信息服务资格证书：（京）-经营性-2018-0221
								</div>
								<div class="swiper-slide">
									<i class="iconfont icon-diqiu"></i>互联网药品交易服务资格证书：京C20160005
								</div>
								<div class="swiper-slide">
									<i class="iconfont icon-diqiu"></i>互联网药品交易服务资格证书：京C20160005
								</div>
								<div class="swiper-slide">
									<i class="iconfont icon-diqiu"></i>京丰食药监械经营许20150100号
								</div>
								<div class="swiper-slide">
									<i class="iconfont icon-diqiu"></i>京丰食药监械经营备20150159号
								</div>
								<div class="swiper-slide">
									<i class="iconfont icon-diqiu"></i>增值电信业务经营许可证：京B2-20180434
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>`
		);
		$("body").prepend(nav);
	}
	addEvent() {
		new Swiper('.swiper', {
			direction: 'vertical', // 垂直切换选项
			loop: true, // 循环模式选项
			autoplay: {
				delay: 1500,
			}
		})
	}
}
class seach {
	constructor() {}
	init() {
		this.createDom();
	}
	createDom() {
		let nav = $(
			`<div class="head-search w clear_fix">
			<div class="head-logo">
				<a href="index.html">
					<img src="img/logo_1.png">
				</a>
			</div>

			<div class="mod-seach">
				<form action="#" method="get">
					<input type="text" class="text-seach" value="冬瓜荷叶茶" onblur="if(this.value=='') this.value='冬瓜荷叶茶';" onfocus="if(this.value=='冬瓜荷叶茶') this.value='';">
					<input type="submit" id="" name="" value="搜索" class="btn-seach" />
				</form>
				<div class="a-seach">
					<a href="#">桔贝合剂</a>
					<a href="#">感冒灵颗粒</a>
					<a href="#">肤痔清软膏</a>
					<a href="#">爱乐维</a>
					<a href="#">五子衍宗丸</a>
				</div>
			</div>


			<div class="phone">
				<li>
					<i class="iconfont icon-dianhua"></i>
					<span>客户投诉电话<strong>400-650-9988</strong></span>
				</li>
				<li>
					<i class="iconfont icon-kefu"></i>
					<span>欢迎使用<strong>在线客服</strong></span>
				</li>
			</div>
		</div>`
		);
		$("body").prepend(nav);
	}
}
class nav_all {
	constructor() {}
	init() {
		this.createDom();
		this.addEvent();
	}
	createDom() {
		let nav = $(
			`
			<div id="head-wrap">
				<div class="header-wrapper w clear_fix">
					<div class="nav-all">
						<a href="#">
							全部商品分类
						</a>
						<div class="pullDown">
							<ul>
								<li>
									<i class="iconfont icon-yaoping"></i>
									<a href="#">重大疾病</a>丶
									<a href="#">肿瘤</a>丶
									<a href="#">肺癌</a>
								</li>
								<li>
									<i class="iconfont icon-yao"></i>
									<a href="#">新药特药</a>丶
									<a href="#">血液</a>丶
									<a href="#">罕见病</a>
								</li>
								<li>
									<i class="iconfont icon-manxingjibing"></i>
									<a href="#">慢性疾病</a>丶
									<a href="#">三高</a>丶
									<a href="#">男性健康</a>
								</li>
								<li>
									<i class="iconfont icon-jiatingchangbei"></i>
									<a href="#">家庭常备</a>丶
									<a href="#">妇科</a>丶
									<a href="#">儿科</a>
								</li>
								<li>
									<i class="iconfont icon-zhongyike"></i>
									<a href="#">中医养生</a>丶
									<a href="#">草药</a>丶
									<a href="#">参茸礼品</a>
								</li>
								<li>
									<i class="iconfont icon-yingyangbaojian"></i>
									<a href="#">医疗器械</a>丶
									<a href="#">康复</a>丶
									<a href="#">血压监测</a>
								</li>
								<li>
									<i class="iconfont icon-jiankang-"></i>
									<a href="#">营养保健</a>丶
									<a href="#">减肥</a>丶
									<a href="#">亚健康</a>
								</li>
								<li>
									<i class="iconfont icon-jiankangfuwu"></i>
									<a href="#">健康超市</a>丶
									<a href="#">母婴</a>丶
									<a href="#">化妆品</a>
								</li>
								<li>
									<i class="iconfont icon-gehu-yinxingyanjing"></i>
									<a href="#">健康服务</a>丶
									<a href="#">挂号</a>丶
									<a href="#">每康卡</a>
								</li>
								<li>
									<i class="iconfont icon-yaoping"></i>
									<a href="#">隐形眼镜</a>丶
									<a href="#">美瞳</a>丶
									<a href="#">护理液</a>
								</li>
							</ul>
						</div>
			
						<div class="yMenuListCon">
							<div class="menu-box">
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">肿瘤</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html?type=1">流行性感冒药</a>
										<a href="list.html?type=1">流行性感冒药</a>
										<a href="list.html?type=1">流行性感冒药</a>
										<a href="list.html?type=1">流行性感冒药</a>
										<a href="list.html?type=1">流行性感冒药</a>
										<a href="list.html?type=1">流行性感冒药</a>
										<a href="list.html?type=1">流行性感冒药</a>
										<a href="list.html?type=1">流行性感冒药</a>
										<a href="list.html?type=1">流行性感冒药</a>
										<a href="list.html?type=1">流行性感冒药</a>
										<a href="list.html?type=1">流行性感冒药</a>
										<a href="list.html?type=1">流行性感冒药</a>
										<a href="list.html?type=1">流行性感冒药</a>
										<a href="list.html?type=1">流行性感冒药</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">调节免疫力</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html?type=2">性功能障碍</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">器官移植</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">抗排异药物</a>
									</dd>
								</dl>
							</div>
			
							<div class="menu-box">
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">慢性病</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">艾滋病</a>
										<a href="list.html">皮肤疾病</a>
										<a href="list.html">甲亢</a>
										<a href="list.html">其他慢性病</a>
										<a href="list.html">糖尿病</a>
										<a href="list.html">心脑血管</a>
										<a href="list.html">风湿骨痛</a>
										<a href="list.html">肺纤维化</a>
										<a href="list.html">肾脏病</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">罕见病</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">地中海贫血</a>
										<a href="list.html">肺动脉高压</a>
										<a href="list.html">肢端肥大症</a>
										<a href="list.html">骨溶解骨痛</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">血液疾病</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">其他血液疾病</a>
										<a href="list.html">血友病</a>
										<a href="list.html">高磷血症</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">肝部疾病</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">肝病</a>
									</dd>
								</dl>
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">神经系统</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">运动神经元疾病</a>
									</dd>
								</dl>
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">其他病症类</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">子宫内膜异位症</a>
									</dd>
								</dl>
							</div>
			
							<div class="menu-box">
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">男科用药</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">性功能障碍</a>
										<a href="list.html">前列腺疾病</a>
										<a href="list.html">补肾壮阳药</a>
										<a href="list.html">滋阴补肾药</a>
										<a href="list.html">雄激素补充</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">精神科用药</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">抑郁症用药</a>
										<a href="list.html">精神分裂症用药</a>
										<a href="list.html">神经衰弱用药</a>
										<a href="list.html">睡眠障碍用药</a>
										<a href="list.html">多动症用药</a>
										<a href="list.html">焦虑症用药</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">心脑血管用药</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">高血压用药</a>
										<a href="list.html">高血脂用药</a>
										<a href="list.html">心脏及冠脉疾病</a>
										<a href="list.html">脑血管疾病</a>
										<a href="list.html">中风偏瘫类</a>
										<a href="list.html">心脑血管疾病辅助药</a>
										<a href="list.html">静脉曲张</a>
										<a href="list.html">动脉闭塞</a>
										<a href="list.html">血液类疾病</a>
										<a href="list.html">眩晕症</a>
										<a href="list.html">脉管炎</a>
										<a href="list.html">肺心病</a>
										<a href="list.html">心力衰竭</a>
										<a href="list.html">预防血栓药</a>
										<a href="list.html">改善微循环</a>
										<a href="list.html">低血压用药</a>
										<a href="list.html">造影剂</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">糖尿病类</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">抑</a>
										<a href="list.html">口服降糖药</a>
										<a href="list.html">注射降糖药</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">肝胆胰类</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">乙肝用药</a>
										<a href="list.html">肝炎用药</a>
										<a href="list.html">胆囊炎</a>
										<a href="list.html">胆结石</a>
										<a href="list.html">舒肝理气类</a>
										<a href="list.html">降转氨酶</a>
										<a href="list.html">脂肪肝</a>
										<a href="list.html">肝病辅助治疗</a>
										<a href="list.html">肝炎辅助治疗</a>
										<a href="list.html">肝损伤</a>
										<a href="list.html">黄疸及黄疸性肝炎</a>
										<a href="list.html">肝癌辅助治疗</a>
										<a href="list.html">胰腺炎/癌</a>
										<a href="list.html">胰腺外分泌不足</a>
										<a href="list.html">酒精性肝病</a>
										<a href="list.html">肝功能衰退</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">泌尿科用药</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">尿路感染用药</a>
										<a href="list.html">肾炎用药</a>
										<a href="list.html">肾结石用药</a>
										<a href="list.html">尿路结石用药</a>
										<a href="list.html">膀胱炎用药</a>
										<a href="list.html">肾病综合症</a>
										<a href="list.html">水肿</a>
										<a href="list.html">肾衰竭</a>
										<a href="list.html">尿崩症</a>
										<a href="list.html">尿毒症</a>
										<a href="list.html">辅助利尿</a>
									</dd>
								</dl>
			
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">神经系统用药</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">头痛用药</a>
										<a href="list.html">眩晕</a>
										<a href="list.html">记忆减退</a>
										<a href="list.html">老年性痴呆</a>
										<a href="list.html">面瘫癫痫</a>
										<a href="list.html">帕金森</a>
										<a href="list.html">帕金森辅助治疗</a>
										<a href="list.html">周围神经病变</a>
										<a href="list.html">植物神经紊乱</a>
										<a href="list.html">晕动症（晕车船）</a>
										<a href="list.html">焦虑症（应在精神科用药二级分类）</a>
										<a href="list.html">神经性疼痛</a>
										<a href="list.html">肌肉无力萎缩</a>
										<a href="list.html">神经性呕吐</a>
										<a href="list.html">神经炎</a>
										<a href="list.html">酒精中毒</a>
										<a href="list.html">麻醉用药</a>
										<a href="list.html">神经系统其他用药</a>
									</dd>
								</dl>
			
			
							</div>
			
			
							<div class="menu-box">
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">肿瘤</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">其他病症</a>
										<a href="list.html">肝癌</a>
										<a href="list.html">骨髓瘤</a>
										<a href="list.html">胃癌</a>
										<a href="list.html">肺癌</a>
										<a href="list.html">肾癌</a>
										<a href="list.html">前列腺癌</a>
										<a href="list.html">肿瘤病辅助</a>
										<a href="list.html">乳腺癌</a>
										<a href="list.html">卵巢癌</a>
										<a href="list.html">淋巴肿瘤</a>
										<a href="list.html">食道癌</a>
										<a href="list.html">细胞瘤</a>
										<a href="list.html">肾脏病</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">调节免疫力</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">免疫调节药物</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">器官移植</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">抗排异药物</a>
									</dd>
								</dl>
							</div>
			
							<div class="menu-box">
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">慢性病</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">艾滋病</a>
										<a href="list.html">皮肤疾病</a>
										<a href="list.html">甲亢</a>
										<a href="list.html">其他慢性病</a>
										<a href="list.html">糖尿病</a>
										<a href="list.html">心脑血管</a>
										<a href="list.html">风湿骨痛</a>
										<a href="list.html">肺纤维化</a>
										<a href="list.html">肾脏病</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">罕见病</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">地中海贫血</a>
										<a href="list.html">肺动脉高压</a>
										<a href="list.html">肢端肥大症</a>
										<a href="list.html">骨溶解骨痛</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">血液疾病</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">其他血液疾病</a>
										<a href="list.html">血友病</a>
										<a href="list.html">高磷血症</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">肝部疾病</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">肝病</a>
									</dd>
								</dl>
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">神经系统</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">运动神经元疾病</a>
									</dd>
								</dl>
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">其他病症类</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">子宫内膜异位症</a>
									</dd>
								</dl>
							</div>
			
							<div class="menu-box">
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">男科用药</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">性功能障碍</a>
										<a href="list.html">前列腺疾病</a>
										<a href="list.html">补肾壮阳药</a>
										<a href="list.html">滋阴补肾药</a>
										<a href="list.html">雄激素补充</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">精神科用药</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">抑郁症用药</a>
										<a href="list.html">精神分裂症用药</a>
										<a href="list.html">神经衰弱用药</a>
										<a href="list.html">睡眠障碍用药</a>
										<a href="list.html">多动症用药</a>
										<a href="list.html">焦虑症用药</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">心脑血管用药</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">高血压用药</a>
										<a href="list.html">高血脂用药</a>
										<a href="list.html">心脏及冠脉疾病</a>
										<a href="list.html">脑血管疾病</a>
										<a href="list.html">中风偏瘫类</a>
										<a href="list.html">心脑血管疾病辅助药</a>
										<a href="list.html">静脉曲张</a>
										<a href="list.html">动脉闭塞</a>
										<a href="list.html">血液类疾病</a>
										<a href="list.html">眩晕症</a>
										<a href="list.html">脉管炎</a>
										<a href="list.html">肺心病</a>
										<a href="list.html">心力衰竭</a>
										<a href="list.html">预防血栓药</a>
										<a href="list.html">改善微循环</a>
										<a href="list.html">低血压用药</a>
										<a href="list.html">造影剂</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">糖尿病类</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">抑</a>
										<a href="list.html">口服降糖药</a>
										<a href="list.html">注射降糖药</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">肝胆胰类</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">乙肝用药</a>
										<a href="list.html">肝炎用药</a>
										<a href="list.html">胆囊炎</a>
										<a href="list.html">胆结石</a>
										<a href="list.html">舒肝理气类</a>
										<a href="list.html">降转氨酶</a>
										<a href="list.html">脂肪肝</a>
										<a href="list.html">肝病辅助治疗</a>
										<a href="list.html">肝炎辅助治疗</a>
										<a href="list.html">肝损伤</a>
										<a href="list.html">黄疸及黄疸性肝炎</a>
										<a href="list.html">肝癌辅助治疗</a>
										<a href="list.html">胰腺炎/癌</a>
										<a href="list.html">胰腺外分泌不足</a>
										<a href="list.html">酒精性肝病</a>
										<a href="list.html">肝功能衰退</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">泌尿科用药</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">尿路感染用药</a>
										<a href="list.html">肾炎用药</a>
										<a href="list.html">肾结石用药</a>
										<a href="list.html">尿路结石用药</a>
										<a href="list.html">膀胱炎用药</a>
										<a href="list.html">肾病综合症</a>
										<a href="list.html">水肿</a>
										<a href="list.html">肾衰竭</a>
										<a href="list.html">尿崩症</a>
										<a href="list.html">尿毒症</a>
										<a href="list.html">辅助利尿</a>
									</dd>
								</dl>
			
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">神经系统用药</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">头痛用药</a>
										<a href="list.html">眩晕</a>
										<a href="list.html">记忆减退</a>
										<a href="list.html">老年性痴呆</a>
										<a href="list.html">面瘫癫痫</a>
										<a href="list.html">帕金森</a>
										<a href="list.html">帕金森辅助治疗</a>
										<a href="list.html">周围神经病变</a>
										<a href="list.html">植物神经紊乱</a>
										<a href="list.html">晕动症（晕车船）</a>
										<a href="list.html">焦虑症（应在精神科用药二级分类）</a>
										<a href="list.html">神经性疼痛</a>
										<a href="list.html">肌肉无力萎缩</a>
										<a href="list.html">神经性呕吐</a>
										<a href="list.html">神经炎</a>
										<a href="list.html">酒精中毒</a>
										<a href="list.html">麻醉用药</a>
										<a href="list.html">神经系统其他用药</a>
									</dd>
								</dl>
			
			
							</div>
			
			
							<div class="menu-box">
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">肿瘤</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">其他病症</a>
										<a href="list.html">肝癌</a>
										<a href="list.html">骨髓瘤</a>
										<a href="list.html">胃癌</a>
										<a href="list.html">肺癌</a>
										<a href="list.html">肾癌</a>
										<a href="list.html">前列腺癌</a>
										<a href="list.html">肿瘤病辅助</a>
										<a href="list.html">乳腺癌</a>
										<a href="list.html">卵巢癌</a>
										<a href="list.html">淋巴肿瘤</a>
										<a href="list.html">食道癌</a>
										<a href="list.html">细胞瘤</a>
										<a href="list.html">肾脏病</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">调节免疫力</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">免疫调节药物</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">器官移植</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">抗排异药物</a>
									</dd>
								</dl>
							</div>
			
							<div class="menu-box">
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">慢性病</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">艾滋病</a>
										<a href="list.html">皮肤疾病</a>
										<a href="list.html">甲亢</a>
										<a href="list.html">其他慢性病</a>
										<a href="list.html">糖尿病</a>
										<a href="list.html">心脑血管</a>
										<a href="list.html">风湿骨痛</a>
										<a href="list.html">肺纤维化</a>
										<a href="list.html">肾脏病</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">罕见病</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">地中海贫血</a>
										<a href="list.html">肺动脉高压</a>
										<a href="list.html">肢端肥大症</a>
										<a href="list.html">骨溶解骨痛</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">血液疾病</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">其他血液疾病</a>
										<a href="list.html">血友病</a>
										<a href="list.html">高磷血症</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">肝部疾病</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">肝病</a>
									</dd>
								</dl>
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">神经系统</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">运动神经元疾病</a>
									</dd>
								</dl>
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">其他病症类</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">子宫内膜异位症</a>
									</dd>
								</dl>
							</div>
			
							<div class="menu-box">
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">男科用药</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">性功能障碍</a>
										<a href="list.html">前列腺疾病</a>
										<a href="list.html">补肾壮阳药</a>
										<a href="list.html">滋阴补肾药</a>
										<a href="list.html">雄激素补充</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">精神科用药</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">抑郁症用药</a>
										<a href="list.html">精神分裂症用药</a>
										<a href="list.html">神经衰弱用药</a>
										<a href="list.html">睡眠障碍用药</a>
										<a href="list.html">多动症用药</a>
										<a href="list.html">焦虑症用药</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">心脑血管用药</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">高血压用药</a>
										<a href="list.html">高血脂用药</a>
										<a href="list.html">心脏及冠脉疾病</a>
										<a href="list.html">脑血管疾病</a>
										<a href="list.html">中风偏瘫类</a>
										<a href="list.html">心脑血管疾病辅助药</a>
										<a href="list.html">静脉曲张</a>
										<a href="list.html">动脉闭塞</a>
										<a href="list.html">血液类疾病</a>
										<a href="list.html">眩晕症</a>
										<a href="list.html">脉管炎</a>
										<a href="list.html">肺心病</a>
										<a href="list.html">心力衰竭</a>
										<a href="list.html">预防血栓药</a>
										<a href="list.html">改善微循环</a>
										<a href="list.html">低血压用药</a>
										<a href="list.html">造影剂</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">糖尿病类</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">抑</a>
										<a href="list.html">口服降糖药</a>
										<a href="list.html">注射降糖药</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">肝胆胰类</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">乙肝用药</a>
										<a href="list.html">肝炎用药</a>
										<a href="list.html">胆囊炎</a>
										<a href="list.html">胆结石</a>
										<a href="list.html">舒肝理气类</a>
										<a href="list.html">降转氨酶</a>
										<a href="list.html">脂肪肝</a>
										<a href="list.html">肝病辅助治疗</a>
										<a href="list.html">肝炎辅助治疗</a>
										<a href="list.html">肝损伤</a>
										<a href="list.html">黄疸及黄疸性肝炎</a>
										<a href="list.html">肝癌辅助治疗</a>
										<a href="list.html">胰腺炎/癌</a>
										<a href="list.html">胰腺外分泌不足</a>
										<a href="list.html">酒精性肝病</a>
										<a href="list.html">肝功能衰退</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">泌尿科用药</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">尿路感染用药</a>
										<a href="list.html">肾炎用药</a>
										<a href="list.html">肾结石用药</a>
										<a href="list.html">尿路结石用药</a>
										<a href="list.html">膀胱炎用药</a>
										<a href="list.html">肾病综合症</a>
										<a href="list.html">水肿</a>
										<a href="list.html">肾衰竭</a>
										<a href="list.html">尿崩症</a>
										<a href="list.html">尿毒症</a>
										<a href="list.html">辅助利尿</a>
									</dd>
								</dl>
			
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">神经系统用药</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">头痛用药</a>
										<a href="list.html">眩晕</a>
										<a href="list.html">记忆减退</a>
										<a href="list.html">老年性痴呆</a>
										<a href="list.html">面瘫癫痫</a>
										<a href="list.html">帕金森</a>
										<a href="list.html">帕金森辅助治疗</a>
										<a href="list.html">周围神经病变</a>
										<a href="list.html">植物神经紊乱</a>
										<a href="list.html">晕动症（晕车船）</a>
										<a href="list.html">焦虑症（应在精神科用药二级分类）</a>
										<a href="list.html">神经性疼痛</a>
										<a href="list.html">肌肉无力萎缩</a>
										<a href="list.html">神经性呕吐</a>
										<a href="list.html">神经炎</a>
										<a href="list.html">酒精中毒</a>
										<a href="list.html">麻醉用药</a>
										<a href="list.html">神经系统其他用药</a>
									</dd>
								</dl>
			
			
							</div>
			
							<div class="menu-box">
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">肿瘤</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">其他病症</a>
										<a href="list.html">肝癌</a>
										<a href="list.html">骨髓瘤</a>
										<a href="list.html">胃癌</a>
										<a href="list.html">肺癌</a>
										<a href="list.html">肾癌</a>
										<a href="list.html">前列腺癌</a>
										<a href="list.html">肿瘤病辅助</a>
										<a href="list.html">乳腺癌</a>
										<a href="list.html">卵巢癌</a>
										<a href="list.html">淋巴肿瘤</a>
										<a href="list.html">食道癌</a>
										<a href="list.html">细胞瘤</a>
										<a href="list.html">肾脏病</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">调节免疫力</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">免疫调节药物</a>
									</dd>
								</dl>
			
								<dl class="clear_fix">
									<dt class="clear_fix">
										<a href="list.html">器官移植</a>
										<i class="iconfont icon-arrow-backimg"></i>
									</dt>
									<dd>
										<a href="list.html">抗排异药物</a>
									</dd>
								</dl>
							</div>
			
			
			
						</div>
			
					</div>
					<ul class="clear_fix">
						<li>
							<a href="#">首页</a>
						</li>
						<li>
							<a href="#">新药特药进口药</a>
						</li>
						<li>
							<a href="#">慈善援助</a>
						</li>
						<li>
							<a href="#">慢性疾病</a>
						</li>
						<li>
							<a href="#">常见疾病</a>
						</li>
						<li>
							<a href="#">健康商城</a>
						</li>
					</ul>
			
				</div>
			</div>
		`
		)

		$("body").prepend(nav);
	}
	addEvent() {
		$(".pullDown ul li").hover(function() {
			let index = $(this).index();
			$(".yMenuListCon").css("display", "block");
			$($(".yMenuListCon").children()[index]).css("display", "block");
			$($(".yMenuListCon").children()[index]).hover(function() {
				$(".yMenuListCon").css("display", "block");
				$($(".yMenuListCon").children()[index]).css("display", "block");
			}, function() {
				$(".yMenuListCon").css("display", "none");
				$($(".yMenuListCon").children()[index]).css("display", "none");
			})
		}, function() {
			let index = $(this).index();
			$(".yMenuListCon").css("display", "none");
			$($(".yMenuListCon").children()[index]).css("display", "none");

		})
	}
}
class footer {
	constructor() {}
	init() {
		this.createDom();
	}
	createDom() {
		let footer = $(
			`<div id="footer">
			<div class="foot-top">
				<div class="host">
					<div class="w clear_fix">
						<h2>
							<i class="iconfont icon-dianhua2"></i>
							<span>
								咨询热线：
								<strong>400-650-9988</strong>
							</span>
						</h2>
						<dl>
							<dt>招商热线：</dt>
							<dd>
								<span>雷女士 : 18618373199</span>
								<span>马女士 ：15811299026</span>
							</dd>
						</dl>
					</div>
				</div>
				<div class="foot-link w clear_fix">
					<div class="foot-code">
						<img src="img/footer_code1.jpg" >
						<span>仁和药房网微信订阅号</span>
					</div>
					<dl>
						<dt>购物指南</dt>
						<dd>
							<a href="#">购物流程</a>
							<a href="#">用户协议</a>
							<a href="#">会员介绍</a>
							<a href="#">积分说明</a>
							<a href="#">订单状态</a>
							<a href="#">优惠券</a>
							<a href="#">常见问题</a>
						</dd>
					</dl>
					<dl>
						<dt>配送方式</dt>
						<dd>
							<a href="#">自提说明</a>
							<a href="#">送货上门</a>
						</dd>
					</dl>
					<dl>
						<dt>售后服务</dt>
						<dd>
							<a href="#">接收验货</a>
							<a href="#">退换货政策</a>
							<a href="#">退换货流程</a>
							<a href="#">退款说明</a>
							<a href="#">发票说明</a>
							<a href="#">联系客服</a>
							<a href="#">食品安全制度</a>
						</dd>
					</dl>
					<dl>
						<dt>支付方式</dt>
						<dd>
							<a href="#">货到付款</a>
							<a href="#">在线支付</a>
							<a href="#">银行转帐</a>
							<a href="#">支票付款</a>
							<a href="#">预存消费</a>
						</dd>
					</dl>
					<dl>
						<dt>特色服务</dt>
						<dd>
							<a href="#">用药咨询</a>
							<a href="#">连锁招商</a>
							<a href="#">寻医问药</a>
						</dd>
					</dl>
				</div>
				
			</div>
			
			<div class="foot-bottom w">
				<ul class="clear_fix">
					<li>
						<i class="iconfont icon-zheng"></i>
						正品保障
					</li>
					<li>
						<i class="iconfont icon-shou"></i>
						品牌授权
					</li>
					<li>
						<i class="iconfont icon-zheng1"></i>
						平台认证
					</li>
					<li>
						<i class="iconfont icon-mian"></i>
						天天省钱
					</li>
				</ul>
				
				<div class="foot-nav w">
					<a href="#">首页</a>
					<b></b>
					<a href="#">关于本站</a>
					<b></b>
					<a href="#">荣誉证书</a>
					<b></b>
					<a href="#">媒体报道</a>
					<b></b>
					<a href="#">联系我们</a>
					<b></b>
					<a href="#">人才招聘</a>
					<b></b>
					<a href="#">友情链接</a>
				</div>
				<div class="foot-nav w">
					<a href="#">互联网药品信息服务资格证书：（京）-经营性-2018-0221</a>
					<b></b>
					<a href="#">互联网药品交易服务资格证书：京C20160005</a>
					<b></b>
					<a href="#">京丰食药监械经营许20150100号</a>
					<br>
					<a href="#">京丰食药监械经营备20150159号</a>
					<b></b>
					<a href="#">增值电信业务经营许可证：京B2-20180434</a>
					<b></b>
					<a href="#">食品药品投诉举报热线：12331</a>
					<br>
				</div>
				<p>Copyright©2005-2019 仁和药房网（北京）医药科技有限公司版权所有，并保留所有权利。互联网药品交易服务证：京C20160005号</p>
				<p>京公网安备 11010602100232号    （ICP证、EDI证已二证合一）增值电信业务经营许可证：京B2-20180434 移动版</p>
				
				<div class="foot-img">
					<img src="img/foot-img.jpg" >
				</div>
				
			</div>
		</div>`
		);
		$("body").append(footer);
	}
}
