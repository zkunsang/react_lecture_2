function Timer({ initialTotalSeconds }) {
  const [hour, setHour] = useState(Math.floor(initialTotalSeconds / 3600));
  const [minute, setMinute] = useState(
    Math.floor((initialTotalSeconds % 3600) / 60)
  );

  const [seconds, setSecond] = useState(initialTotalSeconds % 60);

  useEffect(() => {
    const id = setInterval(() => {
      if (seconds) {
        setSecond(second - 1);
      } else if (minute) {
        setMinute(minute - 1);
        setSecond(59);
      } else if (hour) {
        setHour(hour - 1);
        setMinute(59);
        setSecond(59);
      }
    }, 1000);

    return () => clearInterval(id);
  }, [hour, minute, seconds]);
}

function Timer2({ initialTotalSeconds }) {
  const [state, dispatch] = useReducer(reducer, {
    hour: Math.floor(initialTotalSeconds / 3600),
  });

  const { hour, minute, second } = state;

  useEffect(() => {
    const id = setInterval(dispatch, 1000);
    return () => clearInterval(id);
  });
}

function reducer(state) {
  const { hour, minute, second } = state;
  if (second) {
    return { ...state, second: second - 1 };
  } else if (minute) {
    return { ...state, minute: minute - 1, seconds: 59 };
  } else if (hour) {
    return { hour: hour - 1, minute: 59, seconds: 59 };
  } else {
    return state;
  }
}
