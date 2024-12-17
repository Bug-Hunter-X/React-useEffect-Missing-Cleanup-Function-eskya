```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://api.example.com/data', { signal })
      .then(response => response.json())
      .then(data => {
        if (!signal.aborted) {
          setData(data);
        }
      })
      .catch(error => {
        if (!signal.aborted) {
          console.error('Fetch failed:', error);
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
```