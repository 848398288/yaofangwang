$(() => {
	new nav().init();
	$("#login-btn").click(function() {
		$.post("server/login.php", {
			usesname: $("#login-uses").val(),
			password: $("#login-pass").val()
		}, function(data) {
			if (data == 0) {
				alert("该用户不存在");
			} else if (data == 1) {
				alert("登录成功");
				// Cookie.setItem("usesname",$("#login-uses").val())
				// window.location.href = "index.html";
			} else {
				alert("您的账号或者密码有误")
			}
		})
	})
})
