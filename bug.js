```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: Setting count to 1 every time useEffect runs
    setCount(1);
  }, []); // Empty dependency array means useEffect runs only once

  return <div>Count: {count}</div>;
}
```