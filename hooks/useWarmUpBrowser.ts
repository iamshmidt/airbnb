import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';

export const useWarmUpBrowser = () => {
  useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

//
// The useWarmUpBrowser custom hook you've provided uses React's useEffect hook to interact with the expo-web-browser library, specifically for warming up and cooling down the web browser. Here's a breakdown of its functionality and purpose:

// expo-web-browser Library
// expo-web-browser provides access to the system's web browser and allows for more control over the browser session. It's part of the Expo ecosystem, which is a framework and platform for universal React applications.
// Warming Up the Browser
// WebBrowser.warmUpAsync(): This function is called when the hook is first used by a component. "Warming up" the browser is a performance optimization used in mobile development. It essentially preloads the browser in the background, making it faster to launch when needed. This can improve user experience by reducing load times when the browser is actually presented to the user.
// Cooling Down the Browser
// WebBrowser.coolDownAsync(): This function is called when the component using the hook is unmounted or the effect needs to be cleaned up. "Cooling down" reverses the warming up process, freeing up the resources that were being used to keep the browser ready in the background.
// useEffect Hook