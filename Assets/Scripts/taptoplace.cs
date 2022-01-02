using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.ARFoundation;
using UnityEngine.XR.ARSubsystems;

[RequireComponent(typeof(ARRaycastManager))]
public class taptoplace : MonoBehaviour
{
    // Start is called before the first frame update

    public GameObject toBeInstantiated;
    // anything we are placing in our room
    private GameObject spawnedObject;
    // object that has been placed on a plane
    private ARRaycastManager _arRaycastManager;
    // vectors from the AR cast    
    private Vector2 touchPosition;

    static List<ARRaycastHit> hits = new List<ARRaycastHit>();



    private void Awake()
    {
        _arRaycastManager = GetComponent<ARRaycastManager>();
        // since we have used the require comonent over here, so we can use the getcomponent function


        //going to use basic tocuh input 

    }

    bool TryGetTouchPosition(out Vector2 touchPosition)
    { 
        if (Input.touchCount > 0) {
            touchPosition = Input.GetTouch(0).position;
            return true;
        }
        touchPosition = default;
        return false;
    }

    // Update is called once per frame
    void Update()
    {
        if (!TryGetTouchPosition(out Vector2 touchPosition)) {
            return;
            // if no touch is detected return null 
        }

        if (_arRaycastManager.Raycast(touchPosition, hits, TrackableType.PlaneWithinPolygon)){
            /* we use the raycast method which takes our touch position, static list of 
                ray hits and a trackable type which is used a physical environement the device can track*/
            var hitPose = hits[0].pose;
            // get the ray hit position (.pose = position) so we are ale to figure out if a spanwed object is already there and if not we instantiate it            
            // will consider limiting the amoutn of objects that can be spawned on a plane at one time

            if (spawnedObject == null) 
            {
                
                spawnedObject = Instantiate(toBeInstantiated, hitPose.position, hitPose.rotation);
                // will need to create an array of objects with a selected attribute so if only if an obj is selected can it be moved.

            }  else {
                spawnedObject.transform.position = hitPose.position;
            } 
            // if an object has been spawned, move the object to the touched area, if not place at object at the touched area
        }

        // goign to use hte raycast method which uses the touch position and takes the hits of the object and
        // a trackable tyoe which is a feature of environment that a device is able to track such as a plane in this case our instantiated plane that is detected by the ar session
        
        // we want to return if we do not detect any touches of the screen
    }
}
