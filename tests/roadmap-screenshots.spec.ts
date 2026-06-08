import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { test } from '@playwright/test'

const outputDir = path.join(process.cwd(), '.screenshots', 'generated')

test.use({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 1,
})

test.beforeAll(async () => {
  await mkdir(outputDir, { recursive: true })
})

for (let slide = 1; slide <= 10; slide += 1) {
  test(`captures roadmap slide ${slide}`, async ({ page }) => {
    await page.goto(`http://localhost:3030/${slide}`)
    await page.waitForLoadState('networkidle')
    await page.addStyleTag({
      content: `
        .slidev-nav,
        .slidev-goto-dialog,
        .slidev-notification {
          display: none !important;
        }
      `,
    })
    await page.waitForTimeout(1600)

    await page.screenshot({
      path: path.join(outputDir, `${String(slide).padStart(2, '0')}.png`),
      fullPage: false,
    })
  })
}
