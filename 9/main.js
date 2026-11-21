
// This shit's extremely hacky SHUT UP I TRIED OK >:'(
// Edit 2020: I swear I'll rewrite this at some point ok please dont buli

var synth = new Tone.PolySynth(4, Tone.Synth).toMaster();

function chord(a, b, c, d) {
	synth.triggerAttackRelease([a, b, c, d], "4n");
}

function prog(a, b, c, d, e, time){
	synth.triggerAttackRelease(a, "2n");

	window.setTimeout(function(){
		synth.triggerAttackRelease(b, "2n")
	}, time);

	window.setTimeout(function(){
		synth.triggerAttackRelease(c, "2n")
	}, time*2);

	window.setTimeout(function(){
		synth.triggerAttackRelease(d, "2n")
	}, time*3);

	window.setTimeout(function(){
		synth.triggerAttackRelease(e, "2n")
	}, time*4);
}