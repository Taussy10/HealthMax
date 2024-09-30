import { CommonActions , createNavigationContainerRef , StackActions } from "@react-navigation/native";

// createNavigationContainerRef: It creates a reference{hand that do something} to the NavigationContainer, 
// allowing you to programmatically access and manipulate the navigation state,
// such as knowing which screen is currently active or navigating to a different screen.



export const navigationRef = createNavigationContainerRef()

// learn in js navigationRef.isReady() then what is this is it method
// what is navigationRef is it object and is ready
// acc to my info: navigationRef is a object that has many key values pair and is ready is function that has some code to execute



export async function navigate(routeName: string, params?: object) {
    // Check if the NavigationContainer is mounted and ready to handle navigation actions
    // mounted means:  it means that the navigation system is fully set up and ready to handle navigation
    //  actions like moving between screens.

    if (navigationRef.isReady()) {
        // Dispatch a navigate action to move to the specified screen (routeName) with optional parameters (params)
        navigationRef.dispatch(CommonActions.navigate(routeName, params));
        // CommonActions.navigate is a predefined action for navigating to a screen
    }
}

// Reset all: use for loggin screeen when user completes all then steps then he will redirect to home and when he backs then there will be no log in screen 

export async function resetAndNavigate(routeName: string, params?: object) {
    // Check if the NavigationContainer is mounted and ready to handle navigation actions
    // mounted means:  it means that the navigation system is fully set up and ready to handle navigation
    //  actions like moving between screens.
    if (navigationRef.isReady()) {
        // Dispatch a navigate action to move to the specified screen (routeName) with optional parameters (params)
        navigationRef.dispatch(CommonActions.reset({
            index: 0, //first screen after navigation 
            routes: [{name: routeName}] // the new stack have only one screen 
        } ));
        // CommonActions.navigate is a predefined action for navigating to a screen
    }
}
