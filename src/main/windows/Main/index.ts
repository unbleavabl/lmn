import { BrowserWindow } from 'electron'
import { join } from 'path'

import { ENVIRONMENT } from 'shared/constants'
import { createWindow } from 'main/factories'
import { displayName } from '~/package.json'

import fs from 'fs'

export async function MainWindow() {
  const window = createWindow({
    id: 'main',
    title: displayName,
    fullscreen: true,
    alwaysOnTop: true,
    autoHideMenuBar: true,
    webPreferences: {
      webSecurity: false,
    },
  })

  window.webContents.on('did-finish-load', () => {
    if (ENVIRONMENT.IS_DEV) {
      window.webContents.openDevTools({ mode: 'detach' })
    }

    window.show()
  })

  window.on('close', () =>
    BrowserWindow.getAllWindows().forEach((window) => window.destroy())
  )

  return window
}
