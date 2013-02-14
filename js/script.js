$(document).ready(function () {
	// Start Ball & Paddle Animation
	$('#ball').bounce({
	    distance: '500px', // distance to move
	    downspeed: 450, // speed to move to ending point
	    upspeed: 200, // speed to return to starting point
	    gravity: 'top', // direction to move object (top or bottom)
	    timer: 700, // delay to repeat bounce (should be minimum of downspeed + upspeed)
	    easingdown: 'jswing', // easing to ending point
	    easingup: 'jswing' // easing back to starting point
	});	
	$('#paddle').bounce({
	    distance: '10px', // distance to move
	    downspeed: 450, // speed to move to ending point
	    upspeed: 200, // speed to return to starting point
	    gravity: 'bottom', // direction to move object (top or bottom)
	    timer: 700, // delay to repeat bounce (should be minimum of downspeed + upspeed)
	    easingdown: 'jswing', // easing to ending point
	    easingup: 'jswing' // easing back to starting point
	});
	
	// Start Tags Input
	$(':text').tagsInput({
		'height':'85px',
		'width':'500px',
		'defaultText':'add +'
	});
	
	// Capture Submit
	$(':submit').click(function(){
		// Create Matchups
		players = shuffle($('#players').val().split(','));
		ousted = [];
		matchups = "<h1>&darr;</h1>";
			// We've got an even number of players.
			for (var i=0;i<4;i++)
			{				
				matchups += "<span class='tag'><span>"+players[i]+"</span></span>";
				if (i == 0 || i == 2)
					matchups += " + ";									  
				if (i == 1)
				{
				  matchups += "<div style='padding:20px'/>";
				}
			}
			$("#matchups").html(matchups);
			if(players.length > 4)
			{
				// Too many players. Someone doesn't get to play. :(
				for (var i=4;i<players.length;i++)
				{
					ousted.push(players[i]);
				}

				if(ousted.length > 1)
				{
					$("#matchups").append("<br/><br/><br/><span class='tag'>" + ousted.slice(0, ousted.length - 1).join('</span> <span class="tag">') + "</span> and <span class='tag'>" + ousted.slice(-1) + "</span> are shit out of luck.");						
				}
				else
				{
					$("#matchups").append("<br/><br/><br/><span class='tag'><span>" + ousted + "</span></span> is shit out of luck.");
				}
			}
	})		
})

function shuffle ( myArray ) {
  var i = myArray.length, j, tempi, tempj;
  if ( i == 0 ) return false;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     tempi = myArray[i];
     tempj = myArray[j];
     myArray[i] = tempj;
     myArray[j] = tempi;
   }
	return myArray;
}