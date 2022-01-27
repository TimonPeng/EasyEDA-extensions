import cheerio from "cheerio";
import prettier from "prettier";

import { request, writeFile } from "./utils";

(async () => {
  // const docsUrl = "https://docs.easyeda.com/en/API/3-API-List/index.html";
  const docsUrl = "https://docs.lceda.cn/cn/API/3-API-List/index.html";
  const body = await request(docsUrl);
  const $ = cheerio.load(body);

  let codes = "// for testing declarations only\n";
  codes += `/* ================= from: ${docsUrl} ================= */\n`;

  $("pre").each(function () {
    let code = $(this).text();

    // hardcode fix
    code = code.replace(/\t/g, "");
    code = code.replace("source: json", "source: {}");
    code = code.replace('"net": "GND""shape": "ELLIPSE"', '"net": "GND", "shape": "ELLIPSE"}');
    code = code.replace("@example", "");

    codes += `${code}\n`;
  });

  // https://github.com/dillonHe/EasyEDA-Documents/tree/master/API/example
  const gitRawUrl = "https://raw.githubusercontent.com/dillonHe/EasyEDA-Documents/master/API/example";
  const files = [
    // "/modifyTrackVia.js",
    // "/theme/main.js",
    // "/schematicShapes.js"
  ];
  for (const fileName of files) {
    const url = `${gitRawUrl}${fileName}`;
    const file = await request(url);

    codes += `\n/* ================= from: ${url} ================= */\n${file}\n`;
  }

  // prettier
  const options = await prettier.resolveConfig("./.prettierrc");
  codes = prettier.format(codes, options);

  writeFile("./src/example.test.ts", codes);
})();
