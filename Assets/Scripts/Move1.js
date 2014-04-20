#pragma strict

//var score : int;

var speed : float = 5.0;
private var dTime : float;
var guiTextComponent : GUIText;

var currentScore : int = 0;
var endScore : int = 5;

var scoreGUI : GUIText;
var victoryGUI : GUIText;

function Start () {

	victoryGUI.enabled = false;


}

function Update () {

	dTime = Time.deltaTime;
	
	transform.position.x += Input.GetAxis("Horizontal") * dTime * speed;
	transform.position.z += Input.GetAxis("Vertical") * dTime * speed;

}

function FixedUpdate () {

	rigidbody.AddForce (Vector3.up * 10);

}


function OnTriggerEnter (other : Collider) {
	
	if (other.CompareTag ("EndGoal")) {
		
		currentScore = currentScore + 1;
		scoreGUI.text = "Score: " + currentScore;
		
		if (currentScore >= endScore) {
			//print ("Victory");
			victoryGUI.enabled = true;
		}
	}
}