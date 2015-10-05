$(document).ready(function() {
	$.getJSON("http://lod.datahub.kr/endpoint/cf?query=PREFIX+schema%3A++<http%3A%2F%2Fschema.org%2F>%0D%0APREFIX+ad%3A++++++<http%3A%2F%2Flod.datahub.kr%2Fdef%2Fad%2F>%0D%0APREFIX+rdfs%3A++++<http%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23>%0D%0APREFIX+cf%3A++++++<http%3A%2F%2Flod.datahub.kr%2Fdef%2Fcf%2F>%0D%0ASELECT+%3Fid+%3Flabel+%3Ftype+%3Fgu+%3Fdong+%3FentryFee+%3Fimg+WHERE+%7B%0D%0A++%3Fid+rdfs%3Alabel+%3Flabel+.%0D%0A++%3Fid+rdf%3Atype+%3FtypeUri+.%0D%0A++%3FtypeUri+schema%3Aname+%3Ftype+.%0D%0A++OPTIONAL+%7B+%0D%0A++++%3Fid+ad%3Agu+%3FguUri+.%0D%0A++++%3FguUri+schema%3Aname+%3Fgu+.%0D%0A++%7D%0D%0A++OPTIONAL+%7B+%0D%0A++++%3Fid+ad%3Adong+%3FdongUri+.%0D%0A++++%3FdongUri+schema%3Aname+%3Fdong+.%0D%0A++%7D%0D%0A++OPTIONAL+%7B+%3Fid+cf%3AentryFee+%3FentryFee+%7D%0D%0A++OPTIONAL+%7B+%3Fid+schema%3Aimage+%3Fimg+%7D%0D%0A%7D%0D%0A&output=json&jsonp=&key=", function (c) {		
		
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

		$("a.exhibit-facet-value-link").each(function(){
			var subject = strip_tags($(this).text());
			$(this).text(subject);
		});

		$("table.exhibit-tabularView-body").each(function(){
		});
	});		
});

function strip_tags (input, allowed) {
	allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
	var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
	return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {        return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
	});
}
$.holdReady(false); 

