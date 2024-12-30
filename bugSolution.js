```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Set count to 1 only once on initial render
    // Use a flag to ensure count is only set once
    let isInitialRender = true;
    if (isInitialRender){
        setCount(1);
        isInitialRender = false;
    }
  }, []);

  return <div>Count: {count}</div>;
}
```