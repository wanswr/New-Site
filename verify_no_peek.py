import asyncio
from playwright.async_api import async_playwright
import os

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1920, 'height': 1080})

        # Start dev server
        process = await asyncio.create_subprocess_exec(
            'npm', 'run', 'dev', '--', '--hostname', '0.0.0.0',
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE
        )

        await asyncio.sleep(5)  # Wait for server

        try:
            await page.goto('http://localhost:3000')
            await page.wait_for_load_state('networkidle')
            await asyncio.sleep(2) # Hydration

            # Take screenshot of the Hero (should be clean)
            await page.screenshot(path='verification/no_peek_hero.png')

            # Scroll a bit and check
            await page.evaluate("window.scrollTo(0, 500)")
            await asyncio.sleep(1)
            await page.screenshot(path='verification/no_peek_transition.png')

        finally:
            process.terminate()
            await browser.close()

if __name__ == '__main__':
    if not os.path.exists('verification'):
        os.makedirs('verification')
    asyncio.run(run())
