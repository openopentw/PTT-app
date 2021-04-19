const getPort = require('get-port')
const path = require('path')

let pyProc = null
let pyPort = null

const createPyProc = async () => {
  pyPort = await getPort()
  // pyPort = 5187
  console.log(`Using port number: ${pyPort}`)
  let args = ['-p', pyPort, '--static', 'build', '--database', '', '-r']

  // let script = path.join(__dirname, 'PTT-web-backend', 'main.py')
  // pyProc = require('child_process').spawn('python', [script, ...args])
  let script = path.join(__dirname, 'dist','main', 'main.exe')
  pyProc = require('child_process').execFile(script, args)

  if (pyProc != null) {
    console.log('child process success')
    // pyProc.stdout.on('data', (data) => {
    //   console.log(`stdout: ${data}`);
    // })
    // pyProc.stderr.on('data', (data) => {
    //   console.log(`stderr: ${data}`);
    // })
  }
}

const exitPyProc = () => {
  pyProc.kill()
  pyProc = null
  pyPort = null
}

const {app, BrowserWindow} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences:{
      nodeIntegration: true,
      contextIsolation: false,
    }}
  )
  win.setMenuBarVisibility(false)

  // win.loadFile('index.html')
  win.loadURL(`http://localhost:${pyPort}`);

  // win.webContents.openDevTools()

  win.webContents.on('new-window', function(e, url) {
    e.preventDefault();
    require('electron').shell.openExternal(url);
  });

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', async () => {await createPyProc(); createWindow();})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

// app.on('ready', createPyProc)
app.on('will-quit', exitPyProc)
