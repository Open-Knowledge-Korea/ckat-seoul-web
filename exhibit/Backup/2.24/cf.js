var popupStatus = 0;

//$(document).on("click", '#cThumbnail', function(e) {
function getInfo(object) {
	var id = $(object).attr('ex:itemid');

	console.log($(object).attr('ex:itemid'));
		$.getJSON("http://lod.datahub.kr/endpoint/cf?query=DESCRIBE+<"+id+">&output=json&jsonp=&key=", function (c) {	
		var i, j, item;
		var result = c;
		var html = "";
		var cFlag = 0;
		var title = "";
		var keys = Object.keys(result[id]);
		html += "<table class=\"table table-striped\">";
		html += "<table>";
		html += "<tr><th width=\"30%\">Label</th><th width=\"70%\">Value</th></tr>";
		for(i = 0; i < keys.length; i++) {
			for(var k=0; k < prefix.length; k++){
				if(keys[i].indexOf(prefix[k].string) != -1){
					html += "<tr><td><a href=\"" + keys[i] + "\" >" + prefix[k].value + "</a></td><td>";	
					cFlag = 1;
				}				
			}
			if(cFlag == 1)
				cFlag = 0;
			else
				html += "<tr><td><a href=\"" + keys[i] + "\">" + keys[i] + "</a></td><td>";

			for(j = 0; j < result[id][keys[i]].length; j++) {
				if(keys[i].indexOf("label") != -1)
					title += "<a href=\"" + id + "\" target=\"blank\">" +  result[id][keys[i]][j].value + "</a><br>";
				if(result[id][keys[i]][j].value.indexOf("http") != -1){
					html += "<a href=\"" + result[id][keys[i]][j].value + "\" target=\"blank\">" + result[id][keys[i]][j].value + "</a><br>";
				}
				else
					html += result[id][keys[i]][j].value + "<br>";
			}
			html += "</td></tr>";
		}			
		html += "</table>";
		$("#info-label").empty();
		$("#info-label").append(title);
		$(".modal-body > p").empty();
		$(".modal-body > p").append(html);
		$("#info-content").modal("show");
	});
}
//});
/*
$(document).ready(function() {
	$.getJSON("./ch_data.json", function (c) {		

		window.database = Exhibit.Database.create();
		window.database.loadData(c);
		window.exhibit = Exhibit.create();
		window.exhibit.configureFromDOM();
	});		
});
*/
function strip_tags (input, allowed) {
	allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
	var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
	return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {        return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
	});
}
$.holdReady(false); 

