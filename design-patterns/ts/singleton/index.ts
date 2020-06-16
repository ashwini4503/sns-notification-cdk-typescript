class Config {
  public data: string;
  private static instance: Config;

  private constructor() {
    this.data = "My config";
  }

  public static getInstance(): Config {
    if (!this.instance) {
      this.instance = new Config();
    }

    return this.instance;
  }
}

const config: Config = Config.getInstance();
const config2: Config = Config.getInstance();
const config3: Config = Config.getInstance();

console.log(config.data);
console.log(config2.data);
console.log(config3.data);
