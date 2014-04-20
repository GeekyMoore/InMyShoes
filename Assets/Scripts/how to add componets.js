#pragma strict

var doorOpen : boolean;

function Start () {

	gameObject.AddComponent(BoxCollider);
	var rb = gameObject.AddComponent(Rigidbody);
	rb.useGravity = false;
	
	rb.constraints = 
	RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationZ | RigidbodyConstraints.FreezePosition;

}

function FixedUpdate () {

	

}