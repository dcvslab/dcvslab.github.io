    audio = document.getElementById("audio")
    document.getElementById("track").innerHTML = tracks[0]; nsorig = "01"
    function checkTrack(url) {
      var http = new XMLHttpRequest();
      http.open('HEAD', url, false);
      http.send();
      if (http.status != 404) {
        //nothing
      } else {
        tracklink = "http://dcvslab.github.io/music/mp3/" + anum + "/01.mp3";
        document.getElementById("track").innerHTML = tracks[0]; nsorig = "01"
      }
    }
    function next() {
      nsparse = parseInt(nsorig);
      nsnum = nsparse + 1;
      nsnums = nsnum.toString();
      if (nsnums.length > 1) 
        { ns = nsnums; nsorig = ns} 
      else { ns = "0" + nsnums; nsorig = ns
      }
      document.getElementById("track").innerHTML = tracks[nsnum - 1];
      tracklink = "http://dcvslab.github.io/music/mp3/" + anum + "/" + ns + ".mp3"
      checkTrack(tracklink)
      setTimeout(function() { $("#audiocontainer").append("<audio autoplay id='audio'><source src='" + tracklink + "' type='audio/mpeg'></audio>"); },1000)
    }
    function skip() {
      next(); $("#audio").remove();
     }
    function advance() {
      if (document.getElementById("audio").ended == true) { 
        next(); $("#audio").remove(); 
	    } else { 
        if (document.getElementById("audio").ended !== "undefined") { }
      } 
    }
    function playTrack() {
      tnum = prompt("enter... \n'track' for list of tracks \ntrack number (1-" + ttnum + ") to play track \n'random' for a random track");
      if (parseInt(tnum) <= ttnum) {
        nsorig = tnum - 1; skip();
      } else {
        if (tnum == "random") {
          nsorig = Math.floor(Math.random() * ttnum); skip() 
        } else {
	  if (tnum == "track") {
	    alert(tracks);
	  } else {
            alert("invalid input")
        }
      }
    }}   
    setInterval(function() { advance(); }, 1000);