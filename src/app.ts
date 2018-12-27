import { Board } from "./board";
import { ChessUtils } from "./chessUtils";
ChessUtils.initialize();

const board = new Board();


const run = async () => {
  const userInput = await ChessUtils.getString();
  console.log(userInput);

  process.exit();
}

run();