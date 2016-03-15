function smile1(a) {
	document.write('&nbsp;<a href="" onclick="set_smile(\''+a+'\');return false;"><img src="http://www.'+domain+'/img/smileys/msn/'+a+'.gif" alt="'+a+'" /></a>');
}

function show_smiles() {
	document.getElementById('smileys').style.display = 'block';
}

function set_smile(a) {
	document.getElementById('smileys').style.display = 'none';
	document.getElementById('smiley_img').src = 'http://www.'+domain+'/img/smileys/msn/'+a+'.gif';
	document.getElementById('post_smiley').value = a;
}

function write_smiles() {
	smile1('regular_smile');
	smile1('wink_smile');
	smile1('sad_smile');
	smile1('angry_smile');
	smile1('omg_smile');
	smile1('shades_smile');
	smile1('teeth_smile');
	smile1('confused_smile');
	smile1('cry_smile');
	smile1('embaressed_smile');
	smile1('tounge_smile');
	smile1('whatchutalkingabout_smile');
	smile1('angel_smile');
	smile1('devil_smile');
	smile1('cake');
	smile1('envelope');
	smile1('heart');
	smile1('broken_heart');
	smile1('kiss');
	smile1('lightbulb');
	smile1('thumbs_down');
	smile1('thumbs_up');
}
