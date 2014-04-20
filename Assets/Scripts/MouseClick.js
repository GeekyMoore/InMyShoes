#pragma strict

function Start () {

	Screen.lockCursor = true;

}

function Update () {
	if (Input.GetButtonDown ("Fire1")) {
		// Construct a ray from the current mouse coordinates
		var ray : Ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		var hit : RaycastHit;
		
		// This ray detects the object
		if (Physics.Raycast (ray, hit, 5)) {
			var obj = hit.collider.gameObject;
		
			if (obj.CompareTag("Doorway")){
				obj.SendMessage ("TriggerDoor");
			}
		
			if (obj.CompareTag("Item")){
				var item = obj.GetComponent(ItemInfo);
				print (item.itemName);
			}
		}
		
	}

}

