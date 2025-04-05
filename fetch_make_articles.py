import requests
from bs4 import BeautifulSoup

url = "https://makezine.com/author/fritslyneborg/"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# Find articles
articles = soup.find_all('article', class_='post')

for article in articles:
    title_element = article.find('h2', class_='post-title')
    if title_element and title_element.a:
        title = title_element.a.text.strip()
        link = title_element.a.get('href')
        date_element = article.find('time', class_='post-date')
        date = date_element.text.strip() if date_element else "Unknown date"
        print(f"Title: {title}")
        print(f"URL: {link}")
        print(f"Date: {date}")
        print("---")
