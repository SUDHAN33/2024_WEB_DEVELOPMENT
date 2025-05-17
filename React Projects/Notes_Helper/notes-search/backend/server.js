const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

const DIRECTORY_PATH = 'C:/FolderTest';

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

app.get('/api/search', (req, res) => {

  
    try {
      const query = req.query.q?.toLowerCase() || '';
  if (!query) return res.json([]);

  const files = getAllFiles(DIRECTORY_PATH);
  const matched = [];

  files.forEach((filePath) => {
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const lines = content.split(/\r?\n/);

      lines.forEach((line, lineIndex) => {
        if (line.toLowerCase().includes(query)) {
          matched.push({
            filePath,
            lineNumber: lineIndex + 1,
            lineText: line,
            match: query,
          });
        }
      });
        } catch (err) {
          console.log("Skipped unreadable files (e.g., binary or locked files)");
        }
      });
      res.json(matched);
    } catch (error) {
      console.error('Error reading files:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
