/* Image w/ description tooltip v2.0
* Created: April 23rd, 2010. This notice must stay intact for usage 
* Author: Dynamic Drive at http://www.dynamicdrive.com/
* Visit http://www.dynamicdrive.com/ for full source code
*/


var ddimgtooltip={

	tiparray:function(){
		var tooltips=[]
		//define each tooltip below: tooltip[inc]=['path_to_image', 'optional desc', optional_CSS_object]
		//For desc parameter, backslash any special characters inside your text such as apotrophes ('). Example: "I\'m the king of the world"
		//For CSS object, follow the syntax: {property1:"cssvalue1", property2:"cssvalue2", etc}

		tooltips[0]=["","Casos Activos: 14.219 <br /> Población en situación de pobreza: 590 <br /> Defunciones: 540  <br /> Plan paso a paso: Fase 2 <br/> Población vacunada 1º dosis: 197.130  <br /> Población vacunada 2º dosis: 169.402", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[1]=["","Casos Activos: 25.703 <br /> Población en situación de pobreza: 28.323 <br /> Defunciones: 626  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 102.418  <br /> Población vacunada 2º dosis: 84.460", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[2]=["","Casos Activos: 53.853 <br /> Población en situación de pobreza: 41.472 <br /> Defunciones: 1.213  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 192.593  <br /> Población vacunada 2º dosis: 159.665", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[3]=["","Casos Activos: 7.024 <br /> Población en situación de pobreza: 2.963 <br /> Defunciones: 133  <br /> Plan paso a paso: Fase 2 <br/> Población vacunada 1º dosis: 69.561  <br /> Población vacunada 2º dosis: 57.274", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[4]=["","Casos Activos: 34.198 <br /> Población en situación de pobreza: 13.562 <br /> Defunciones: 919  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 205.192  <br /> Población vacunada 2º dosis: 173.820", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[5]=["","Casos Activos: 23.138 <br /> Población en situación de pobreza: 10.630 <br /> Defunciones: 523  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 94.743  <br /> Población vacunada 2º dosis: 78.329", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[6]=["","Casos Activos: 21.390 <br /> Población en situación de pobreza: 18.884 <br /> Defunciones: 435  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 100.313  <br /> Población vacunada 2º dosis: 83.298", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[7]=["","Casos Activos: 16.983 <br /> Población en situación de pobreza: 11.993 <br /> Defunciones: 303  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 81.190  <br /> Población vacunada 2º dosis: 63.112", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[8]=["","Casos Activos: 31.206 <br /> Población en situación de pobreza: 16.511 <br /> Defunciones: 932  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 183.127  <br /> Población vacunada 2º dosis: 156.416", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[9]=["","Casos Activos: 19.543 <br /> Población en situación de pobreza: 25.004 <br /> Defunciones: 548  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 54.809  <br /> Población vacunada 2º dosis: 44.891", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[10]=["","Casos Activos: 3.902 <br /> Población en situación de pobreza: 85 <br /> Defunciones: 103  <br /> Plan paso a paso: Fase 2 <br/> Población vacunada 1º dosis: 79.181  <br /> Población vacunada 2º dosis: 68.841", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[11]=["","Casos Activos: 7.434 <br /> Población en situación de pobreza: 5.526 <br /> Defunciones: 231  <br /> Plan paso a paso: Fase 2 <br/> Población vacunada 1º dosis: 54.085  <br /> Población vacunada 2º dosis: 44.113", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[12]=["","Casos Activos: 6129 <br /> Población en situación de pobreza: 5.254 <br /> Defunciones: 170  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 34.503  <br /> Población vacunada 2º dosis: 28.801", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[13]=["","Casos Activos: 5.537 <br /> Población en situación de pobreza: 5.566<br /> Defunciones: 99  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 32.754  <br /> Población vacunada 2º dosis: 26.767", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[14]=["","Casos Activos: 2.394 <br /> Población en situación de pobreza: 1.246 <br /> Defunciones: 54  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 15.181  <br /> Población vacunada 2º dosis: 12.278", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[15]=["","Casos Activos: 1.325 <br /> Población en situación de pobreza: 1.091 <br /> Defunciones: 60 <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 10.300  <br /> Población vacunada 2º dosis: 8.437", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[16]=["","Casos Activos: 5.214 <br /> Población en situación de pobreza: 928 <br /> Defunciones: 147  <br /> Plan paso a paso: Fase 2 <br/> Población vacunada 1º dosis: 81.302  <br /> Población vacunada 2º dosis: 68.436", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[17]=["","Casos Activos: 7.378 <br /> Población en situación de pobreza: 568 <br /> Defunciones: 265  <br /> Plan paso a paso: Fase 2 <br/> Población vacunada 1º dosis: 145.292  <br /> Población vacunada 2º dosis: 125.048", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[18]=["","Casos Activos: 7.477 <br /> Población en situación de pobreza: 5.948 <br /> Defunciones: 244  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 41.156  <br /> Población vacunada 2º dosis: 35.058", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[19]=["","Casos Activos: 15.170 <br /> Población en situación de pobreza: 15.600 <br /> Defunciones: 420  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 61.913  <br /> Población vacunada 2º dosis: 51.709", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[20]=["","Casos Activos: 8.520 <br /> Población en situación de pobreza: 6.620 <br /> Defunciones: 354  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 38.646  <br /> Población vacunada 2º dosis: 31.920", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[21]=["","Casos Activos: 8.345 <br /> Población en situación de pobreza: 3.813 <br /> Defunciones: 291  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 35.687  <br /> Población vacunada 2º dosis: 29.034", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[22]=["","Casos Activos: 13.354 <br /> Población en situación de pobreza: 8.528 <br /> Defunciones: 275  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 62.696  <br /> Población vacunada 2º dosis: 52.204", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[23]=["","Casos Activos: 12.729 <br /> Población en situación de pobreza: 1.874 <br /> Defunciones: 479  <br /> Plan paso a paso: Fase 2 <br/> Población vacunada 1º dosis: 122.503  <br /> Población vacunada 2º dosis: 100.175", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[24]=["","Casos Activos: 10.355 <br /> Población en situación de pobreza: 13.562 <br /> Defunciones: 271  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 60.342  <br /> Población vacunada 2º dosis: 50.299", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[25]=["","Casos Activos: 18.276 <br /> Población en situación de pobreza: 5.445 <br /> Defunciones: 395  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 51.012  <br /> Población vacunada 2º dosis: 41.823", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[26]=["","Casos Activos: 13.357 <br /> Población en situación de pobreza: 8.753 <br /> Defunciones: 436  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 45.608  <br /> Población vacunada 2º dosis: 35.715", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[27]=["","Casos Activos: 10.104 <br /> Población en situación de pobreza: 5.582 <br /> Defunciones: 256  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 47.988  <br /> Población vacunada 2º dosis: 38.860", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[28]=["","Casos Activos: 9.887 <br /> Población en situación de pobreza: 4.914 <br /> Defunciones: 283  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 45.789  <br /> Población vacunada 2º dosis: 38.653", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[29]=["","Casos Activos: 12.750 <br /> Población en situación de pobreza: 5.595 <br /> Defunciones: 347  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 56.379  <br /> Población vacunada 2º dosis: 46.859", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[30]=["","Casos Activos: 14.908 <br /> Población en situación de pobreza: 10.892 <br /> Defunciones: 491  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 73.749  <br /> Población vacunada 2º dosis: 58.940", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[31]=["","Casos Activos: 9.010 <br /> Población en situación de pobreza: 6.273 <br /> Defunciones: 368  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 41.686  <br /> Población vacunada 2º dosis: 35.214", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[32]=["","Casos Activos: 32.608 <br /> Población en situación de pobreza: 16.584 <br /> Defunciones: 500  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 212.391  <br /> Población vacunada 2º dosis: 177.088", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[33]=["","Casos Activos: 11.545 <br /> Población en situación de pobreza: 5.182 <br /> Defunciones: 316  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 60.260  <br /> Población vacunada 2º dosis: 51.358", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[34]=["","Casos Activos: 12.050 <br /> Población en situación de pobreza: 4.071 <br /> Defunciones: 298  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 53.118  <br /> Población vacunada 2º dosis: 43.550", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[35]=["","Casos Activos: 11.461 <br /> Población en situación de pobreza: 8.524 <br /> Defunciones: 405  <br /> Plan paso a paso: Fase 2 <br/> Población vacunada 1º dosis: 57.287  <br /> Población vacunada 2º dosis: 47.518", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		tooltips[36]=["","Casos Activos: 11.394 <br /> Población en situación de pobreza: 9.395 <br /> Defunciones: 432  <br /> Plan paso a paso: Fase 1 <br/> Población vacunada 1º dosis: 63.753  <br /> Población vacunada 2º dosis: 50.594", {background:"#e2e2e2", color:"#545351", border:"2px grey", width: "260", height: "160"}]
		return tooltips //do not remove/change this line
	}(),

	tooltipoffsets: [20, -30], //additional x and y offset from mouse cursor for tooltips

	//***** NO NEED TO EDIT BEYOND HERE

	tipprefix: 'imgtip', //tooltip ID prefixes

	createtip:function($, tipid, tipinfo){
		if ($('#'+tipid).length==0){ //if this tooltip doesn't exist yet
			return $('<div id="' + tipid + '" class="ddimgtooltip" />').html(
				'<div style="text-align:center"><img src="' + tipinfo[0] + '" /></div>'
				+ ((tipinfo[1])? '<div style="text-align:left; margin-top:5px">'+tipinfo[1]+'</div>' : '')
				)
			.css(tipinfo[2] || {})
			.appendTo(document.body)
		}
		return null
	},

	positiontooltip:function($, $tooltip, e){
		var x=e.pageX+this.tooltipoffsets[0], y=e.pageY+this.tooltipoffsets[1]
		var tipw=$tooltip.outerWidth(), tiph=$tooltip.outerHeight(), 
		x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(ddimgtooltip.tooltipoffsets[0]*2) : x
		y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
		$tooltip.css({left:x, top:y})
	},
	
	showbox:function($, $tooltip, e){
		$tooltip.show()
		this.positiontooltip($, $tooltip, e)
	},

	hidebox:function($, $tooltip){
		$tooltip.hide()
	},


	init:function(targetselector){
		jQuery(document).ready(function($){
			var tiparray=ddimgtooltip.tiparray
			var $targets=$(targetselector)
			if ($targets.length==0)
				return
			var tipids=[]
			$targets.each(function(){
				var $target=$(this)
				$target.attr('rel').match(/\[(\d+)\]/) //match d of attribute rel="imgtip[d]"
				var tipsuffix=parseInt(RegExp.$1) //get d as integer
				var tipid=this._tipid=ddimgtooltip.tipprefix+tipsuffix //construct this tip's ID value and remember it
				var $tooltip=ddimgtooltip.createtip($, tipid, tiparray[tipsuffix])
				$target.mouseenter(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.showbox($, $tooltip, e)
				})
				$target.mouseleave(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.hidebox($, $tooltip)
				})
				$target.mousemove(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.positiontooltip($, $tooltip, e)
				})
				if ($tooltip){ //add mouseenter to this tooltip (only if event hasn't already been added)
					$tooltip.mouseenter(function(){
						ddimgtooltip.hidebox($, $(this))
					})
				}
			})

		}) //end dom ready
	}
}

//ddimgtooltip.init("targetElementSelector")
ddimgtooltip.init("*[rel^=imgtip]")