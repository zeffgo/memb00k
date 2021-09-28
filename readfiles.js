const fs = require("fs");
const process = require("process");
const path = process.argv[2];
const name = path.split('/').pop();

console.log('read dir: ' + path, ' person: ' + name);
const files = fs.readdir(path, function (err, dirFiles) {
  // console.log(dirFiles);
  const output = dirFiles.map(f => `{path: 'assets/images/${name}/${f}', name: '${f}', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},\n`).join('');
  fs.writeFileSync('new_file_names_json.txt', output, 'utf8');
});