#pragma strict

var doorOpen : boolean;
var speed : float;
private var swingDirection : Vector3;

function Start () {

	

}

function FixedUpdate () {

	if(doorOpen) {
	
		swingDirection = Vector3.up;	
	
	} else {
	
		swingDirection = -Vector3.up;
	
	}
	
	
	
	rigidbody.AddTorque (swingDirection * speed);

}

function TriggerDoor () {

	doorOpen = !doorOpen;

}