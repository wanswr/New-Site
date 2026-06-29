import asyncio
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1920, 'height': 1080})

        # 1. Load and check Loader
        await page.goto('http://localhost:3004')
        print("Checking Loader...")
        await page.screenshot(path='/home/jules/verification/01_loader.png')

        # 2. Wait for Hero
        await asyncio.sleep(7)
        print("Checking Hero...")
        await page.screenshot(path='/home/jules/verification/02_hero.png')

        # 3. Scroll to Explorer
        await page.evaluate("window.scrollTo(0, window.innerHeight * 2.5)")
        await asyncio.sleep(2)
        print("Checking Explorer...")
        await page.screenshot(path='/home/jules/verification/03_explorer.png')

        # 4. Scroll to Portfolio
        await page.evaluate("window.scrollTo(0, window.innerHeight * 6)")
        await asyncio.sleep(2)
        print("Checking Portfolio...")
        await page.screenshot(path='/home/jules/verification/04_portfolio.png')

        # 5. Scroll to Calculator
        await page.evaluate("window.scrollTo(0, window.innerHeight * 10)")
        await asyncio.sleep(2)
        print("Checking Calculator...")
        await page.screenshot(path='/home/jules/verification/05_calculator.png')

        # 6. Scroll to Final
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await asyncio.sleep(2)
        print("Checking Final...")
        await page.screenshot(path='/home/jules/verification/06_final.png')

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
