import * as ex from "excalibur"
import { remote } from 'electron'

const [width, height] = remote.getCurrentWindow().getSize()

// Sprites
const baseMinoFile = "../res/mino.png"

// Sounds


// Texture and Sound Objects
const Images: { [key: string]: ex.Texture } = {
  baseMino: new ex.Texture(baseMinoFile)
}

const Sounds: { [key: string]: ex.Sound } = {
  //file: new ex.Sound(soundFile)
}

// Sheets

const loader = new ex.Loader()
const resources = {...Images, ...Sounds}

for (const res in resources) {
  loader.addResource(resources[res]);
}

loader.logoWidth = width
loader.logoHeight = height
loader.suppressPlayButton = true
loader.backgroundColor = "#000000"

export { Images, Sounds, loader };