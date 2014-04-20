#pragma strict



var deathSound : AudioClip;
 
function OnTriggerEnter (other : Collider) {
 
// destroy all game objects that enter this area
  Destroy(other.gameObject);
  audio.PlayOneShot(deathSound);
  
// load mainMenu on death

Application.LoadLevel("mainMenu");
}


/* var deathSound : AudioClip;
 
function OnTriggerEnter (other : Collider) {
if(other.gameObject.name =="Player"){
//destroys player & plays sound
Destroy(other.gameObject);
    audio.PlayOneShot(deathSound);
    //if dead lose a life and respawn
//    dead= true;
//    PlayerLives.LIVES -=1;
//	    LevelLoadFade.FadeAndLoadLevel(Application.LoadLevel("mainMenu"), Color.red, 2.0);
}
}
*/