import fs from "fs";
import fse from "fs-extra";
import path from "path";

const fileNames = fs.readdirSync(
  path.join(__dirname, "../static/data/projects")
);
const fileContent = fileNames.map((fileName) =>
  fs.readFileSync(
    path.join(__dirname, "../static/data/projects", fileName),
    "utf8"
  )
);

const projectsObject = fileContent.map((fileContent) => {
  return { ...JSON.parse(fileContent) };
});

const projectsJson = JSON.stringify(projectsObject);

fs.mkdirSync(path.join(__dirname, "../dist/static/data"), { recursive: true });
fs.writeFileSync(
  path.join(__dirname, "../dist/static/data/projects.json"),
  projectsJson
);

fse.copySync(
  path.join(__dirname, "../static/images"),
  path.join(__dirname, "../dist/static/images")
);
