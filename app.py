import requests;
url='https://crex.com/cricket-live-score/ms-vs-rj-41st-match-madhya-pradesh-t20-league-2026-match-updates-123Z'
response = requests.get(url)
print(response.text)