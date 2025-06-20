export default class Color {
  constructor() {
    this.reset = "\x1b[0m";
    this.red = "\x1b[31m";
    this.green = "\x1b[32m";
    this.yellow = "\x1b[33m";
    this.blue = "\x1b[34m";
    this.magenta = "\x1b[35m";
    this.cyan = "\x1b[36m";
    this.gray = "\x1b[37m";
    this.white = "\x1b[97m";
  }

  resetStr(string) {
    return this.reset + string + this.reset;
  }

  redStr(string) {
    return this.red+ string + this.red;
  }

  greenStr(string) {
    return this.green + string + this.green;
  }
}