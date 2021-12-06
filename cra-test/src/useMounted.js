import { useEffect, useState } from "react";

export default function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

// useBlockIfNotLogin()
// useBlockUnsavedChange(desc)
// useEffectIfLoginuser(callback, deps)
// useLocalStorage(key, initialalue) => [value, setValue]
