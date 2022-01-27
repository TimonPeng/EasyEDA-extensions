import fs from "fs";
import got from "got";

export function mkdirIfNotExists(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

export function writeFile(fileName: string, context: any) {
  fs.writeFileSync(fileName, context);
}

export async function request(url: string) {
  const response = await got(url, { retry: 0 });
  const { body } = response;

  return body;
}
