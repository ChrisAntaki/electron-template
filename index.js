const { app, BrowserWindow, screen } = require("electron");

try {
  // Reload browser windows on changes.
  require("electron-reload")(__dirname);
} catch (err) {
  // No problem.
}

app.whenReady().then(() => {
  // Create the browser window.
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
    icon: __dirname + "/images/logo.ico",
  });

  // and load the HTML of the app.
  win.loadFile("html/index.html");
});
