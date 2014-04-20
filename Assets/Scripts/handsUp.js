#pragma strict

public var handsUp : boolean;
//var translation : float = Time.deltaTime * 10;

function Start () {

}

// function Update () {



// 		if (Input.GetKeyDown (KeyCode.Q)) {
// 			print ("q key was pressed");
// 			// if (transform.position.y < 0.8991899) {
// 			// 	transform.Translate(Vector3.up * Time.deltaTime);
// 			// }
// 			// else {
// 			// 	transform.position.y = 0.8991899;
// 			// }
//  		}
// 		// else if (Input.GetKeyUp ("q")) {
// 		// 	print ("q key was released");
// 		// 	if (transform.position.y > 0) {
// 		// 		transform.Translate(Vector3.down * Time.deltaTime);
// 		// 	}
// 		// 	else {
// 		// 		transform.position.y = 0;
// 		// 	}
// 		// } else {
// 		// 	transform.position.y = 0;
// 		// }
// 	}


function Update () {
		if (Input.GetKeyDown (KeyCode.Space))
			print ("space key was pressed");
	}