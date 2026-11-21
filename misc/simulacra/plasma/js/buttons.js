
$( ".minimize" ).on({
	"mouseover" : function() {
    	this.src = 'i/buttons/minimize_hover.png';
	},
	"mouseout" : function() {
    	this.src='i/buttons/minimize.png';
	}
});


$( ".maximize" ).on({
	"mouseover" : function() {
    	this.src = 'i/buttons/maximize_hover.png';
	},
	"mouseout" : function() {
    	this.src='i/buttons/maximize.png';
	}
});


$( ".close" ).on({
	"mouseover" : function() {
    	this.src = 'i/buttons/close_hover.png';
	},
	"mouseout" : function() {
    	this.src='i/buttons/close.png';
	}
});

$( ".arrow" ).on({
	"mouseover" : function() {
    	this.src = 'i/menu/apps/arrow_hover.png';
	},
	"mouseout" : function() {
    	this.src='i/menu/apps/arrow.png';
	}
});