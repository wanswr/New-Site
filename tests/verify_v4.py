import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        try:
            # Check for 3003 port as used in background dev server
            await page.goto("http://localhost:3003", timeout=10000)
            print("Page loaded successfully")

            # Take a screenshot
            await page.screenshot(path="public/audit_screenshot.png")
            print("Screenshot saved to public/audit_screenshot.png")

            # Check for key elements
            title = await page.title()
            print(f"Page title: {title}")

            hero_title = await page.locator("h1").inner_text()
            print(f"Hero title: {hero_title}")

            # Check for the newly added LightingScene
            lighting_scene = await page.locator("#lighting-scene").count()
            print(f"Lighting scene count: {lighting_scene}")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
