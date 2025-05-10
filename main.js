// main.js
import { app, BrowserWindow } from 'electron';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // DEV
//   win.loadURL('http://localhost:3001');

  // PROD (after npm run build)
  
  win.loadFile(path.join(__dirname, 'build', 'index.html'));
}

app.whenReady().then(() => {
    try {
      createWindow();
    } catch (error) {
      console.error('Error in createWindow:', error);
    }
  });
