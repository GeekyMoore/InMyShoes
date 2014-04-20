#pragma strict

private var camerashake : CameraShake;
var addSlowMo : boolean;

function Start () 
{
	camerashake = GameObject.Find("Main Camera").GetComponent(CameraShake);
}

function OnMouseDown () {
	camerashake.CameraShake();

	if(addSlowMo){
		Time.timeScale = 0.3;
	}
}