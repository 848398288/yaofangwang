$(() => {
	new nav().init();
	//正则验证用户名
	$("#usesname").blur(function() {
		let reg = /^[a-zA-Z0-9_]{6,16}$/;
		if (reg.test($.trim($(this).val()))) {
			$(this).css("border", "1px solid #cfcfcf")
			$(this).next().text("").removeClass("msg");
			$.post("server/isReg.php",{usesname:$.trim($("#usesname").val())},function(data){
				if(data != 0){
					$("#usesname").css("border", "1px solid red")
					$("#usesname").next().text("该用户名已经被注册").addClass("msg");
				}else{
					$("#usesname").css("border", "1px solid #cfcfcf")
					$("#usesname").next().text("").removeClass("msg");
				}
			},"json")
		} else {
			$(this).css("border", "1px solid red")
			$(this).next().text("该用户名格式有误").addClass("msg");
			
		}
		
	})

	//正则验证密码
	$("#password").blur(function() {
		let reg = /^(\w){6,20}$/;
		if (reg.test($.trim($(this).val()))) {
			$(this).css("border", "1px solid #cfcfcf")
			$(this).next().text("").removeClass("msg");
		} else {
			$(this).css("border", "1px solid red")
			$(this).next().text("该密码格式有误").addClass("msg");
		}
	})
	//正则验证密码是否重复
	$("#repeatpass").blur(function() {
		let val = $("#password").val();
		if (val == "") return
		if ($.trim($(this).val()) == $.trim(val)) {
			$(this).css("border", "1px solid #cfcfcf");
			$(this).next().text("").removeClass("msg");
		} else {
			$(this).css("border", "1px solid red")
			$(this).next().text("俩次密码不一致").addClass("msg");
		}
	})
	
	$("#btn").click(function() {
		$("#usesname,#password,#repeatpass").trigger("blur");
		if ($(".msg").length != 0) {
			return;
		}
		if (!$("#checked").is(":checked")) {
			alert("请阅读并同意用户协议！");
			return;
		}
		$.post("server/reg.php",{usesname:$.trim($("#usesname").val()),password:$.trim($("#repeatpass").val())},function(data){
			if(data == 1){
				alert("注册成功");
				window.location.href = "login.html";
			}else{
				alert("注册失败，请重试");
				window.location.href = "register.html";
			}
		},"json")
	})
})
