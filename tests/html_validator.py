import requests
import json
import os
import sys
sys.tracebacklimit=0    # Hides ugly traceback stack from terminal

# Collect path and file name to all HTML files in repository
html_files_list = []
for root, dir, files in os.walk('.'):
    for file in files:
        if file.endswith('.html'):
            html_files_list.append(os.path.join(root, file))

# Run through all files through validator and raise exception if any errors is found
for html_file in html_files_list:
    print(f'Analyzing file: {html_file}')
    html_file_object = open(html_file, 'r', encoding="utf-8")
    payload = html_file_object.read()

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
        raise Exception(f'HTML validation failed! {error_count} errors found in {html_file}.')
    else:
        print(f'HTML validation passed: {html_file}')