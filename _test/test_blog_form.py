import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class TestGoogleForm(unittest.TestCase):
    def setUp(self):
        """Set up the WebDriver."""
        self.driver = webdriver.Chrome()  # Ensure ChromeDriver is installed and in PATH
        self.driver.maximize_window()

    def test_fill_google_form(self):
        """Test case for filling out the Google Form."""
        driver = self.driver

        
        driver.get("http://localhost:4000/create-blog")

        # Switch to the iframe containing the Google Form
        iframe = driver.find_element(By.TAG_NAME, "iframe")
        driver.switch_to.frame(iframe)

        # Wait for the form to load
        wait = WebDriverWait(driver, 10)

        # Fill out the "Title" question
        title_field = wait.until(
            EC.presence_of_element_located((By.CSS_SELECTOR, 'input[aria-labelledby="i1 i4"]'))
        )
        title_field.send_keys("Sample Title")

        # Fill out the "Content" question
        content_field = wait.until(
            EC.presence_of_element_located((By.CSS_SELECTOR, 'textarea[aria-labelledby="i6 i9"]'))
        )
        content_field.send_keys("This is a test content for the Google Form.")

        # Submit the form
        submit_button = wait.until(
            EC.element_to_be_clickable((By.XPATH, '//span[contains(@class, "NPEfkd") and text()="Submit"]'))
        )
        submit_button.click()

        # Verify submission
        success_message = wait.until(
            EC.presence_of_element_located((By.XPATH, '//div[contains(@class, "vHW8K") and text()="Your response has been recorded."]'))
        )
        self.assertTrue(success_message.is_displayed(), "Form submission failed!")

    def tearDown(self):
        """Tear down the WebDriver."""
        self.driver.quit()


if __name__ == "__main__":
    unittest.main()
