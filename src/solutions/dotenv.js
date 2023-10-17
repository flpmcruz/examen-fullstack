import fs from "node:fs";

export const config = (path = ".env") => {
  try {
    if (!fs.existsSync(path)) return;
    const data = fs.readFileSync(path, "utf8").split("\r\n");
    data.forEach((element) => {
      let [key, value] = element.split("=");

      if (value.startsWith('"')) {
        value = value.slice(1, -1);
      }
      process.env[key] = String(value);
    });
  } catch (error) {
    console.log(error);
  }
};
