import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1920, 'height': 1080})

        try:
            await page.goto('http://localhost:3005', wait_until='networkidle')
            # Wait for loader
            await asyncio.sleep(4)

            # Hero
            await page.screenshot(path='verification/01_hero_v5.png')

            # Scroll to Explorer
            await page.evaluate("document.getElementById('explorer-scene').scrollIntoView()")
            await asyncio.sleep(2)
            await page.screenshot(path='verification/02_explorer_v5.png')

            # Scroll to Portfolio
            await page.evaluate("document.getElementById('portfolio-scene').scrollIntoView()")
            await asyncio.sleep(2)
            await page.screenshot(path='verification/03_portfolio_v5.png')

            # Scroll to Calculator
            await page.evaluate("document.getElementById('calculator-scene').scrollIntoView()")
            await asyncio.sleep(2)
            await page.screenshot(path='verification/04_calculator_v5.png')

            # Scroll to FAQ
            await page.evaluate("document.getElementById('faq-scene').scrollIntoView()")
            await asyncio.sleep(2)
            await page.screenshot(path='verification/05_faq_v5.png')

            # Scroll to Final
            await page.evaluate("document.getElementById('final-scene').scrollIntoView()")
            await asyncio.sleep(2)
            await page.screenshot(path='verification/06_final_v5.png')

        except Exception as e:
            print(f"Error: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
