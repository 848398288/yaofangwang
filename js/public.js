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
						<em>我的关注</em>
					</div>
					<div class="browse">
						<i class="iconfont icon-zuijinliulan"></i>
						<em>最近流浪</em>
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
			</div>
		</div>`
		);
		$("body").append(toolbar);
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
						<a href="">请登录</a>
					</li>
					<li>
						<a href="">注册</a>
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
		$("body").append(nav);
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
				<a href="#">
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
		$("body").append(nav);
	}
}
class nav_all {
	constructor() {}
	init() {
		this.createDom();
	}
	createDom() {
		let nav = $(
			`<div class="header-wrapper w clear_fix">
			<div class="nav-all">
				<a href="#">
					全部商品分类
				</a>
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
			
		</div>`
		);
		$("body").append(nav);
	}
}
