const { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } = require("constants");
const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
const { serialize } = require("v8");

let win;
function createWindow() {
  console.log(__dirname)  
  win = new BrowserWindow({ width: 800, height: 600, webPreferences: {
    contextIsolation: true
  } });
  // load the dist folder from Angular
  win.loadURL(`file://${__dirname}/dist/index.html`)
  
  // The following is optional and will open the DevTools:
  // win.webContents.openDevTools()
  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

// on macOS, closing the window doesn't quit the app
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});