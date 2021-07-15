import requests
import json

html_file = open('index.html', 'r', encoding="utf-8")
payload = html_file.read()

URL = "http://validator.w3.org/nu/?out=json&level=error"

HEADERS = { 'Content-Type': 'text/html; charset=utf-8',
            'parser': 'html5'}

response = requests.post(
                        url = URL,
                        headers = HEADERS,
                        data=payload.encode('utf-8'))

data = json.loads(response.text)

error_count = len(data['messages'])

if error_count > 0:
    raise Exception('HTML syntax errors found! {} errors found.'.format(error_count))
else:
    print("No HTML syntax errors found!")