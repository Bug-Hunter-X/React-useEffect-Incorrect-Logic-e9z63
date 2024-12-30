# React useEffect Incorrect Logic

This repository demonstrates a common error in React's `useEffect` hook where an empty dependency array leads to unintended behavior. The bug is in setting state of the count every time the component is rendered with an empty dependency array.  The solution shows how to properly handle updating the state in `useEffect`.