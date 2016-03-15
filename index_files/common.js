// cette fonction genere l'objet XMLHttpRequest
function getHTTPObject() {
	var xmlhttp;

	if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
		try {
			xmlhttp = new XMLHttpRequest();
		} catch (e) {
			xmlhttp = false;
		}
	}
	return xmlhttp;
}
var http = getHTTPObject();


// gebi()
function gebi(a) {
	return document.getElementById(a);
}



// fonction qui remplace toutes les options d'un menu SELECT par des valeurs issues d'un array
// info : a[n] = array('14','Belgique')  ==>  <option value="14">Belgique</option>
function array_into_select(a,sel) {
	// primo, on supprime toutes les options existantes, sauf la premiere (c'est pourquoi i commence à 1)
	opt = sel.options;
	for (var i=1; i < opt.length; i++) {
		opt[i] = null;
		i--;
	}
	// deuzio on crée les nouvelles options
	for (new_opt in a) {
		opt[opt.length] = new Option(a[new_opt][1], a[new_opt][0], false, false);
	}
}


// cette fonction javascript donne la valeur d'un champ select
function select_value(sel,what) {
	sidx = sel.selectedIndex;
	if (what == 'value') return sel.options[sidx].value;
	if (what == 'text')  return sel.options[sidx].text;
}
