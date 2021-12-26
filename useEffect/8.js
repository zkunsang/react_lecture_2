function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onClick() {
      setCount(count + 1);
    }

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [count]);
}

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onClick() {
      setCount((prev) => prev + 1);
    }

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  });
}
