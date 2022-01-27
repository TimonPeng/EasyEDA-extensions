import prettier from "prettier";

import { mkdirIfNotExists, request, writeFile } from "./utils";

(async () => {
  const version = "6.4.31";
  const docsUrl = `https://easyeda.com/editor/${version}/js/main.min.js`;
  const body = await request(docsUrl);

  // prettier
  const options = await prettier.resolveConfig("./.prettierrc");
  const code = prettier.format(body, options);

  mkdirIfNotExists("./dist");
  writeFile("./dist/editor.js", code);
})();
