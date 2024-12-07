import os
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Base URL for the application
BASE_URL = "http://localhost:4000"

@pytest.fixture(scope="function")
def driver():
    """
    Fixture to initialize and quit the WebDriver.
    """
    driver = webdriver.Chrome()  # Ensure chromedriver is in PATH
    driver.implicitly_wait(10)  
    yield driver
    driver.quit()


def test_title_input_updates_preview(driver):
    driver.get(f"{BASE_URL}/create-blog")

    # Locate and toggle the preview section
    preview_btn = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.ID, "preview-btn"))
    )
    preview_btn.click()  # Ensure the preview section is visible
    blog_preview = driver.find_element(By.CLASS_NAME, "blog-preview")
    
    # Wait for the preview section to be visible
    WebDriverWait(driver, 5).until(
        lambda d: blog_preview.is_displayed(),
        message="Blog preview section did not show after clicking preview button"
    )

    # Locate title input and preview elements
    title_input = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.ID, "title"))
    )
    preview_title = driver.find_element(By.ID, "preview-title")

    # Test data
    test_title = "Test Blog Title"

    # Enter title, clear input first, and validate the preview updates
    title_input.clear()  # Clear the existing text if any
    title_input.send_keys(test_title)

    # Wait for the preview to update with the new title
    WebDriverWait(driver, 5).until(
        lambda d: preview_title.text == test_title,
        message=f"Title preview did not update correctly. Expected: '{test_title}', but got: '{preview_title.text}'"
    )

    # Assertion to confirm title preview is updated
    assert preview_title.text == test_title, f"Expected '{test_title}', but got '{preview_title.text}'"




def test_content_input_updates_preview(driver):
    driver.get(f"{BASE_URL}/create-blog")

    # Locate and toggle the preview section
    preview_btn = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.ID, "preview-btn"))
    )
    preview_btn.click()  # Ensure the preview section is visible
    blog_preview = driver.find_element(By.CLASS_NAME, "blog-preview")
    WebDriverWait(driver, 5).until(
        lambda d: blog_preview.is_displayed(),
        message="Blog preview section did not show after clicking preview button"
    )

    # Locate content input and preview elements
    content_input = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.ID, "content"))
    )
    preview_content = driver.find_element(By.ID, "preview-content")

    # Test data
    test_content = "This is a test blog content."

    # Clear the input field, enter content, and validate the preview updates
    content_input.clear()
    content_input.send_keys(test_content)

    # Wait for the preview content to update
    WebDriverWait(driver, 5).until(
        lambda d: preview_content.text == test_content,
        message="Content preview did not update correctly"
    )

    # Assertion to check if the content preview updates correctly
    assert preview_content.text == test_content, f"Expected '{test_content}', but got '{preview_content.text}'"


def test_image_upload_and_preview(driver):
    driver.get(f"{BASE_URL}/create-blog")

    # Locate image input and preview elements
    image_input = driver.find_element(By.ID, "image")
    image_preview = driver.find_element(By.ID, "image-preview")

    # Test image path
    image_path = os.path.abspath("_test/test-image.jpg")  # Replace with actual path
    if not os.path.exists(image_path):
        raise FileNotFoundError(f"Test image not found at {image_path}")

    # Upload image and validate the preview
    image_input.send_keys(image_path)
    WebDriverWait(driver, 5).until(
        lambda d: image_preview.is_displayed(),
        message="Image preview did not appear after upload"
    )
    assert image_preview.is_displayed(), "Image preview did not appear after upload"


def test_preview_toggle(driver):
    driver.get(f"{BASE_URL}/create-blog")

    # Locate preview button and blog preview section
    preview_btn = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.ID, "preview-btn"))
    )
    blog_preview = driver.find_element(By.CLASS_NAME, "blog-preview")

    # Toggle preview section
    preview_btn.click()
    WebDriverWait(driver, 5).until(
        lambda d: blog_preview.is_displayed(),
        message="Blog preview section did not show after clicking preview button"
    )
    assert blog_preview.is_displayed(), "Blog preview section did not show after clicking preview button"

    # Hide preview section and verify
    preview_btn.click()
    WebDriverWait(driver, 5).until(
        lambda d: not blog_preview.is_displayed(),
        message="Blog preview section did not hide after clicking preview button again"
    )
    assert not blog_preview.is_displayed(), "Blog preview section did not hide after clicking preview button again"
