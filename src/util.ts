import { remote } from 'electron'

export const log = (msg: string) => {
  process.stdout.write(`${msg}\n`)
}

export const updateTitle = (subtitle?: string) => {
  const window = remote.getCurrentWindow()
  const prefix = "Tetris Test WIP"

  const res = (subtitle === undefined || subtitle.length < 1)
    ? `${prefix}`
    : `${prefix} | ${subtitle}`

  window.setTitle(res)
}