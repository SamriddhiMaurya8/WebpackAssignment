
const fs = require('fs');
const path = require('path');
const uglifyJS = require('uglify-js');

function displayHelp() {
  console.log(`

Bundle is a script that concatenates multiple JavaScript files into a single bundled file.

Usage:

bundle <options> [list of source JavaScript files]

Options:

--minify    : Removes unnecessary characters from JavaScript source code without altering its functionality
--out <path>: Specifies the path of the output bundled file
  `);
}

function bundleFiles(files, outputPath, minify = false) {
  let bundledContent = '';

  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    bundledContent += content + '\n';
  });

  if (minify) {
    const minifiedResult = uglifyJS.minify(bundledContent);
    if (minifiedResult.error) {
      console.error('Error during minification:', minifiedResult.error);
      return;
    }
    bundledContent = minifiedResult.code;
  }

  fs.writeFileSync(outputPath, bundledContent, 'utf-8');
  console.log(`Bundled file written to ${outputPath}`);
}


const args = process.argv.slice(2);

if (args.length === 0 || args.includes('--help')) {
  displayHelp();
} else {
  let minify = false;
  let outputPath = 'bundle.js';
  const files = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--minify') {
      minify = true;
    } else if (args[i] === '--out') {
      outputPath = args[i + 1];
      i++;
    } else {
      files.push(args[i]);
    }
  }

  if (files.length === 0) {
    console.log('Error: No source files provided.');
    displayHelp();
  } else {
    bundleFiles(files, outputPath, minify);
  }
}
