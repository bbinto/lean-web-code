// Function for DCOPT Variable

/* +-------------------------------------------------
   |  DCOPT handler
   +------------------------------------------------- */		
var _dcopt_data           = new Array();    // internal data
var _dcopt_html           = new Array();    // external html
var _dcopt_data_functions = new Array();    // internal functions


/* +-------------------------------------------------
	|  fctDcopt()
	|    processes all declared dcopt
	+------------------------------------------------- */		
function fctDcopt() {
	var params = (arguments.length) ? arguments[0] : {};
	
	// for each dcopt
	//----------------------
	for (var type in _dcopt_html) {

		if ( typeof(_dcopt_html[type]) == "function" ) continue;
		
		var html = _dcopt_html[type];

		// div
		//----------------------
		var div = document.createElement('div');
		div.setAttribute('id', 'dcopt_'+type);
		document.body.appendChild(div);
		
		
		// specific function
		//----------------------
		if (typeof(_dcopt_data_functions[type]) == 'function') {
		    _dcopt_data_functions[type](params);
		}

		// append content
		//----------------------
		document.getElementById('dcopt_'+type).innerHTML = html;
	}

	return false;
}
