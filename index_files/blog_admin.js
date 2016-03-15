function box_show_admin(i) {
	$('box_admin_'+i).style.display = 'block';
}

function box_hide_admin(i) {
	$('box_admin_'+i).style.display = 'none';
}


function box_kill(i) {
	$("box_"+i).style.display = 'none';
	pars = 'toto=titi&tutu=tata';
	myAjax = new Ajax.Request(
			'/box/delete/'+i,
			{
				method: 'get', 
				parameters: pars,
				onComplete: do_nothing
			});
}

// renome
function box_rename(i) {
	pars = 'toto=titi&tutu=tata';
	myAjax = new Ajax.Request(
			'/box/get_title/'+i,
			{
				method: 'get', 
				parameters: pars,
				onComplete: box_rename_2
			});
	wid = i;
}
function box_rename_2(req) {
	resp = req.responseText;
	$('widget_content_'+wid).innerHTML = resp;
}

// box up : pour remonter un widget (surtout utile quand le widget du dessus est trop long)
function box_up(i) {
	var thisLI = $('box_'+i);
	var parentUL = thisLI.parentNode;
	var bigbrotherLI = thisLI.previousSibling;
	if (bigbrotherLI != null) {
		parentUL.removeChild(thisLI);
		parentUL.insertBefore(thisLI,bigbrotherLI);
		// on sauvegarde le resultat
		col_save();
	}
}






// configure a widget
function box_conf(i) {
	
}


function col_save() {
	// 1er colonne
	boxids = '';
	boxes = $('boxlist').getElementsByTagName('li');
	for (i=0;i < boxes.length ;i++) {
		boxids += '|'+boxes[i].id.slice(4);
	}
	boxids = boxids.slice(1);
	// 2eme colonne
	box2ids = '';
	boxes2 = $('boxlist2').getElementsByTagName('li');
	for (i=0;i < boxes2.length ;i++) {
		box2ids += '|'+boxes2[i].id.slice(4);
	}
	box2ids = box2ids.slice(1);
	// send request to /boxes/reorder/1|2|3|4|5/1|2|3|4|5  (col1/col2)
	pars = 'toto=titi&tutu=tata';
	myAjax = new Ajax.Request(
			'/box/reorder/'+boxids+'/'+box2ids, 
			{
				method: 'get', 
				parameters: pars,
				onComplete: do_nothing
			});
//	alert(boxids);
}


// used for example by col_save() ou box_kill() who send an info without needing any reply
function do_nothing(req) {
	resp = req.responseText;
	if (resp == 'RELOAD') {
		window.location.reload();
	} else {
		if (resp != 'ok') alert(resp);
	}
}

function show_z2(url) {
//	$('page').style.opacity = .5;
	$('body_z2').style.display = 'block';
	pars = 'toto=titi&tutu=tata';
	var myAjax = new Ajax.Updater(
		{success: 'z2_content'}, 
		url,
		{
			method: 'get', 
			parameters: pars,
			evalScripts: false,
		//	onFailure: reportError
		});
//	Effect.Appear($('z2_box'));
	$('z2_box').style.display='block';
	$('z2_box').style.opacity='1';
}

function hide_z2() {
	Effect.Fade($('z2_box'));
	$('body_z2').style.display = 'none';
//	$('page').style.opacity = 1;
}



function widget_add(widget_name) {
	// we read the value of col
	if ($('which_col_2').checked) {
		col = 2;
		boxlist_name = 'boxlist2';
	} else {
		col = 1;
		boxlist_name = 'boxlist';
	}
	// xmlhttp call
	// send request to /box/insert/(1||2)/widget_name	
	pars = 'toto=titi&tutu=tata';
	myAjax = new Ajax.Request(
			'/box/insert/'+col+'/'+widget_name, 
			{
				method: 'get', 
				parameters: pars,
				onComplete: widget_add_2
			});
	
	// hide widget list
	$('body_z2').style.display = 'none';
	// Effect.Fade('body_z2');
	$('page').style.opacity = 1;
}

function widget_add_2(req) {
	resp = req.responseText;
	if (resp == 'RELOAD')
		window.location.reload();
	if (resp != 'ok') {
		new Insertion.Bottom(boxlist_name,resp);
		Sortable.destroy(boxlist_name);
		Sortable.create(boxlist_name,{handle:'handle',onUpdate:col_save});
	}
}

Sortable.create("boxlist",{handle:'handle',onUpdate:col_save});
Sortable.create("boxlist2",{handle:'handle',onUpdate:col_save});

function skin_col(skin) {
	// 
	// document
}


function happy_selector_onchange(id) {

	if ( $F(id+'_select') == 'Autre ...' ) {
		$(id+'_input').style.display = "inline";
		$(id+'_input').disabled = "";
	} else {
		$(id+'_input').style.display = "none";
		$(id+'_input').disabled = "disabled";
	}
	
}

function select_filter() {
	select_id = this.id.slice(14);
	options = $(select_id).getElementsByTagName('option');
	for(i=0;i<options.length;i++) {
		if (options[i].innerHTML.indexOf(this.value) == -1) {
			options[i].style.display = 'none';
		} else {
			options[i].style.display = 'block';
		}
	}
//	alert(options[0].innerHTML);
}