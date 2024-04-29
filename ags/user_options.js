
const userConfigOptions = {
  // For every option, see ~/.config/ags/modules/.configuration/user_options.js
  // (vscode users ctrl+click this: file://./modules/.configuration/user_options.js)
  // (vim users: `:vsp` to split window, move cursor to this path, press `gf`. `Ctrl-w` twice to switch between)
  //   options listed in this file will override the default ones in the above file
  // Here's an example
  "keybinds": {
    "sidebar": {
      "pin": "Ctrl+p",
      "nextTab": "Ctrl+Page_Down",
      "prevTab": "Ctrl+Page_Up",
    },
  },
  "overview": {
    "scale": 0.18 - (0.18 * 0.45), // Relative to screen size
    "numOfRows": 2,
    "numOfCols": 5,
    "wsNumScale": 0.09,
    "wsNumMarginScale": 0.07,
  },
  "weather": {
    "city": "Seoul",
  },
  "workspaces": {
    "shown": 10,
  },
}

export default userConfigOptions;
