$(document).ready(function() {
	$.getJSON("http://lod.datahub.kr/endpoint/kch?query=PREFIX+schema%3A++%3Chttp%3A%2F%2Fschema.org%2F%3E%0D%0APREFIX+ad%3A++++++%3Chttp%3A%2F%2Flod.datahub.kr%2Fdef%2Fad%2F%3E%0D%0APREFIX+rdfs%3A++++%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dcterms%3A++++%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+foaf%3A++++%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0A%0D%0ASELECT+%3Fid+%3Flabel+%3Ftype+%3Fdo+%3Fsi+%3Fgun+%3Fgu+%3Fdong+%3Ftemporal+WHERE+%7B%0D%0A++%3Fid+rdfs%3Alabel+%3Flabel+.%0D%0A++%3Fid+rdf%3Atype+%3Ftype+.%0D%0A++OPTIONAL+%7B+%0D%0A++++%3Fid+ad%3Ado+%3FdoUri+.%0D%0A++++%3FdoUri+schema%3Aname+%3Fdo+.%0D%0A++%7D%0D%0A++OPTIONAL+%7B+%0D%0A++++%3Fid+ad%3Asi+%3FsiUri+.%0D%0A++++%3FsiUri+schema%3Aname+%3Fsi+.%0D%0A++%7D%0D%0A++OPTIONAL+%7B+%0D%0A++++%3Fid+ad%3Agun+%3FgunUri+.%0D%0A++++%3FgunUri+schema%3Aname+%3Fgun+.%0D%0A++%7D%0D%0A++OPTIONAL+%7B+%0D%0A++++%3Fid+ad%3Agu+%3FguUri+.%0D%0A++++%3FguUri+schema%3Aname+%3Fgu+.%0D%0A++%7D%0D%0A++OPTIONAL+%7B+%0D%0A++++%3Fid+ad%3Adong+%3FdongUri+.%0D%0A++++%3FdongUri+schema%3Aname+%3Fdong+.%0D%0A%0D%0A++%7D%0D%0A++OPTIONAL+%7B+%3Fid+dcterms%3Atemporal+%3Ftemporal+%7D%0D%0A%7D+LIMIT+10000&output=json&jsonp=&key=", function (c) {		
		
		var i, j, object, key;
		var result = c;
		var input = {
			items : [],
			types : {},
			properties : {}
		};

		for(i = 0; i < result.results.bindings.length; i++) {
			object = result.results.bindings[i];
			var temp = {};
			for(j = 0; j < result.head.vars.length; j++) {
				key = result.head.vars[j];
				if(object[key] != null) {
					temp[key] = object[key].value;
					console.log(object[key].value);
				}
				else {
					temp[key] = null;
				}
			}
			input.items.push(temp);
		}

		var c = input;
/*
		var head = c.head.vars;
		var hLength = head.length;

		var body = c.results.bindings;
		var bLength = body.length;
		console.log(c);
		var result = "{ \"items\" : [";
		for(var i=0; i<bLength; i++){
			result += "{";
			for(var j=0; j<hLength; j++){
				var v = body[i];
				result += "\"" + head[j] + "\" : \"" + v[head[j]].value
				if(j < hLength -1)
					result += "\",";
				else
					result += "\"";
				console.log(v[head[j]].value);
			}
			if(i < bLength-1)
				result += "},";
			else
				result += "} ] }";
		}
		console.log(result);
		c = JSON.parse(result);
		console.log(c);
*/
/*
		var b = [];
		$.each(c.properties, function (a) {
			b.push(a);
		});
		var d = $.map(b, function (a) {
			return "." + a;
		}).join(","), e = b.join(","), f = $.map(b, function () {
			return "list";
		}).join(",");
		$(".loading").empty();
//		$(".exhibit-content").append($(document.createElement("div")).attr("ex:role", "exhibit-viewPanel").append($(document.createElement("div")).attr("ex:role", "exhibit-view").attr("ex:viewClass", "Exhibit.TabularView").attr("ex:label", "Table").attr("ex:columns", d).attr("ex:columnLabels", e).attr("ex:columnFormats", f).attr("ex:sortColumn", "0").attr("ex:sortAscending", "false")));
//		$.each(c.properties, function (a) {
//			console.log(a);
//			$(".exhibit-options").append($(document.createElement("div")).attr("id", a + "-facet").attr("ex:role", "exhibit-facet").attr("ex:expression", "." + a).attr("ex:facetLabel", a))
//		});
*/
		window.database = Exhibit.Database.create();
		window.database.loadData(c);
		window.exhibit = Exhibit.create();
		window.exhibit.configureFromDOM()
	});		
});

function strip_tags (input, allowed) {
	allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
	var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
	return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {        return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
	});
}
