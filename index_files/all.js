function hide_them_all() {
	if (Element.visible($('open_account')))
			Effect.BlindUp($('open_account'));
	if (Element.visible($('login_form')))
			Effect.BlindUp($('login_form'));
	if (Element.visible($('forgot_pwd')))
			Effect.Fade($('forgot_pwd'));

}

function show_one(aaa) {
	if (Element.visible($(aaa))) {
		hide_them_all();
	} else {
		hide_them_all();
		if (aaa) Effect.BlindDown($(aaa));
	}
}


function new_name_blur() {
	var val = $('new_name').value;
	if (val == '') return;
	
	pars = 'inc=user_ajax_check_name&name='+$F('new_name');
	myAjax = new Ajax.Request(
			'/', 
			{
				method: 'get', 
				parameters: pars,
				onComplete: new_name_check
			});
//	alert(val);
}
function new_name_check(req) {
	resp = req.responseText;
	if (resp == 'ok') {
		return;
	} else {
		alert(resp);
		$('new_name').focus();
	}
}



// $('new_name').onblur = new_name_blur;
