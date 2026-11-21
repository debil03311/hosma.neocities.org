

//
//	Word lists
//

var verbs = [
	 'Galloping'
	,'Crying'
	,'Enlightening'
	,'Darkening'  
	,'Fly'
	,'Rise'
	,'Reflects'
	,'Climb'
	,'Burn'   
	,'Redeem'
	,'Power'
	,'Guide'
	,'Standing'
	,'Blazing'
	,'Reaching'
	,'Searching'
];

var adverbs = [
	 'triumphantly'
	,'quickly'
	,'eternally'
	,'brightly'
	,'vengefully'
	,'courageously'
	,'defiantly'
	,'gracefully'
	,'solemnly'
	,'viciously'
	,'sorrowfully'
	,'bravely'
	,'mysteriously'
	,'violently'
	,'franatically'
	,'wildly'
];

var prepositions = [
	 'through'
	,'into'
	,'above'
	,'beneath'
	,'beyond'
	,'amongst'
	,'below'
	,'under'
	,'in'
	,'against'
	,'within'
	,'inside'
	,'before'
	,'outside'
];

var adjectives = [
	 'snowy'
	,'shining'
	,'glowing'
	,'ancient'
	,'rising'
	,'crystal'
	,'fantastical'
	,'soulful'
	,'aggressive'
	,'courageous'
	,'defiant'
	,'bloody'
	,'cloudy'
	,'graceful'
	,'misty'
	,'icy'
];

var nouns = [
	 'moonlight'
	,'darkness'
	,'defendors'
	,'wings'
	,'light'
	,'fields'
	,'destiny'
	,'sun'
	,'heavens'
	,'souls'
	,'sunlight'
	,'battlecry'
	,'night'
	,'skies'
	,'dream'
	,'clouds'
];

var nouns2 = [
	 'path'
	,'ice'
	,'mountains'
	,'plains'
	,'hearts'
	,'stars'
	,'fire'
	,'lands'
	,'abyss'
];

var yn = [ 0, 1 ];


//
//	Stuff that happens
//

function rand( list ) {
	var randList = list[ Math.floor(Math.random() * list.length) ];
	return ' ' + randList;
}

function gen() {

	var n2 = yn[ Math.floor(Math.random() * yn.length) ];

	if ( n2 == 0 ) {
		$( '#lyrics' ).append( 
			'<p>' + rand(verbs) + rand(adverbs) + rand(prepositions) + rand(adjectives) + rand(nouns) + '</p>'
		);
	} else if ( n2 == 1 ) {
		$( '#lyrics' ).append( 
			'<p>' + rand(verbs) + rand(adverbs) + rand(prepositions) + rand(adjectives) + rand(nouns) + rand(nouns2) + '</p>'
		);
	}

}


// Constantly scroll lyrics down

setInterval(function(){
	$("#lyrics").scrollTop($("#lyrics")[0].scrollHeight);
}, 1);