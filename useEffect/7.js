function Profile({ userId }) {
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchAndSetUser(needDetail) {
      const data = await fetchUser(userId, needDetail);
      setUser(data);
    }

    fetchAndSetUser(false);
  }, [userId]);
}


