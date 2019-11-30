import * as ex from 'excalibur'
import { remote } from 'electron'
import { Images, Sounds, loader } from './preload'
import { log, updateTitle } from './util'

const [width, height] = remote.getCurrentWindow().getSize()

var game = new ex.Engine({
  displayMode: ex.DisplayMode.Fixed,
  width: width,
  height: height,
  suppressConsoleBootMessage: true,
});
/*
var hello = new ex.Label('why hello there', width / 2, height / 8, 'Segoe UI Light');
hello.color = ex.Color.White;
hello.fontSize = 50;
hello.textAlign = ex.TextAlign.Center;

game.add(hello);
*/

game.start(loader).then(() => {
  updateTitle("Loading...")
  log("\rLoading game resources...")
  for (const spr in Images) {
    log(` - Sprite "${spr}" loaded.`)
  }
  for (const snd in Sounds) {
    Sounds[snd].volume = 0.5
    log(` - Sound "${snd}" loaded.`)
  }
  log("\nGame resources loaded!")
  updateTitle()
})
