# React useEffect Missing Cleanup Function

This repository demonstrates a common error in React's `useEffect` hook: omitting the cleanup function.  The example showcases a component fetching data and how forgetting to return a cleanup function can lead to memory leaks or unexpected behavior.

## Problem

The `useEffect` hook in the provided `bug.js` lacks a return statement for the cleanup function.  This function is crucial for canceling pending asynchronous operations (like network requests or timers) or removing event listeners when the component unmounts, preventing potential memory leaks and unexpected behavior.

## Solution

The corrected code in `bugSolution.js` demonstrates the proper use of the `useEffect` hook, including a cleanup function to cancel the fetch request if the component unmounts before the request completes. This prevents the unnecessary work of processing data that won't be displayed, and prevents potential memory leaks.

## How to Reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the console and component behavior when the component mounts and unmounts to see the memory leaks, and compare with the solved version.