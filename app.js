var music = new BandJS();

music.setTimeSignature(4,4);
music.setTempo(116);

var lefthand = music.createInstrument('square');
var righthand = music.createInstrument('square');

lefthand.note('quarter', 'C4')
.note('quarter', 'D4')
.note('quarter', 'E4')
.note('quarter', 'F4')

righthand.note('quarter', 'E5')
.note('quarter', 'F5')
.note('quarter', 'C3')
.note('quarter', 'D4')

var player = music.finish();
player.play();
