import requests

URL = "http://validator.w3.org/nu/"

PARAMS = {  'doc': 'https://bradgarropy.com/',
            'out': 'json'}

r = requests.get(url = URL, params = PARAMS)

data = r.json()

data.pop('url', None)

error_count = 0

for message in data['messages']:
    if 'type' in message:
        if message.get('type') == 'error':
            error_count += 1
            print(error_count,message.get('type'))

if error_count > 0:
    raise Exception('Errors found! \n',
                    'Error count:', error_count)
else:
    print("No errors found!")