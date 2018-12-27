export class ChessUtils {
  private static acceptingUserInput: boolean = true;
  private static userInput: string = "";

  public static initialize(): void {
    process.stdin.on("data", (data) => {
      if (this.acceptingUserInput) {
        this.userInput = data.toString();
        this.acceptingUserInput = false;
      }
    })
  }

  public static getString(): Promise<string> {
    return new Promise((resolve) => {
      this.acceptingUserInput = true;
      setInterval(() => {
        if (this.acceptingUserInput === false) {
          resolve(this.userInput.slice(0, -1));
        }
      }, 1);
    });
  }
}
