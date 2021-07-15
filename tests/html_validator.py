import requests
import json
from pprint import pprint

html_file = open('../index.html', 'r', encoding="utf8")
payload = html_file.read()

URL = "http://validator.w3.org/nu/?out=json&level=error"

HEADERS = { 'Content-Type': 'text/html; charset=utf-8',
            'parser': 'html5'}

response = requests.post(
                        url = URL,
                        headers = HEADERS,
                        files=payload)

data = json.loads(response.text)
pprint(data)

error_count = len(data['messages'])
print('Error count:', error_count)

if error_count > 0:
    raise Exception('Errors found! {} errors found.'.format(error_count))
else:
    print("No errors found!")