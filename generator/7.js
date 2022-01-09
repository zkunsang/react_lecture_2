function* minsu() {
  const myMsgList = [
    "hello im minsu",
    "nice to meed you",
    "do you waana see movie tomorrow",
    "dont you have time",
    "how about to-tomorrow",
  ];
  for (const msg of myMsgList) {
    console.log(msg);
    console.log("suzi:", yield msg);
  }
}

function suji() {
  const sugiMsgList = ["", "hello im suji", "nice to meet you to", "..."];

  const gen = minsu();

  for (const msg of sugiMsgList) {
    // console.log("minsu:", gen.next("hello").value);
    console.log("minsu:", gen.next((_) => console.log(_)).value);
  }

  //   for (const msg of sugiMsgList) {
  //     console.log(msg);
  //     console.log("minsu:", gen.next(msg).value);
  //   }
}

suji();
