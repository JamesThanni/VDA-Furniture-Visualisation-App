// Navigator.js
import { createNavigationContainerRef } from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef()

/**
 * It navigates to a screen if the navigationRef is ready 
 * to handle navigation actions
 * @param name - The name of the route to navigate to.
 * @param params - {
 */
export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}