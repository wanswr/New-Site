from playwright.sync_api import sync_playwright
import time
import os

def run_v4():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Ensure verification directory exists
        os.makedirs("verification", exist_ok=True)

        print("Navigating to http://localhost:3005...")
        page.goto("http://localhost:3005")

        # Wait for loader
        print("Waiting for loader...")
        time.sleep(5)

        # Capture Hero
        print("Capturing Hero...")
        page.screenshot(path="verification/01_hero_v4.png")

        # Scroll to Explorer
        print("Capturing Explorer...")
        page.evaluate("document.getElementById('explorer-scene').scrollIntoView()")
        time.sleep(1)
        page.screenshot(path="verification/02_explorer_v4.png")

        # Scroll to Portfolio
        print("Capturing Portfolio...")
        page.evaluate("document.getElementById('portfolio-scene').scrollIntoView()")
        time.sleep(1)
        page.screenshot(path="verification/03_portfolio_v4.png")

        # Scroll to Calculator
        print("Capturing Calculator...")
        page.evaluate("document.getElementById('calculator-scene').scrollIntoView()")
        time.sleep(1)
        page.screenshot(path="verification/04_calculator_v4.png")

        browser.close()
        print("Done.")

if __name__ == "__main__":
    run_v4()
