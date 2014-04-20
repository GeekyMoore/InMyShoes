#pragma strict

var speed : float = 1.3;
var offset : float = 0;


var elevatorMover : Transform;


 

function OnMouseDown(){

	Debug.Log ("This button works!");
	//while (elevatorMover.position.y < transform.position.y+offset)
		//elevatorMover.position.y += speed;
		//yield WaitForSeconds(0.0001);
		
		
	elevatorMover.localPosition.y = -8.75;
		
		

}