import json as _json
import urllib.request as _request
import urllib.error as _error

class Response:
    def __init__(self, status_code, text, headers=None):
        self.status_code = status_code
        self.text = text
        self.headers = headers or {}
        
    def json(self):
        return _json.loads(self.text)
        
    def raise_for_status(self):
        if self.status_code >= 400:
            raise Exception(f"HTTP Error {self.status_code}: {self.text}")

def post(url, json=None, headers=None, timeout=10):
    headers = headers or {}
    data = None
    if json is not None:
        data = _json.dumps(json).encode('utf-8')
        if 'Content-Type' not in headers:
            headers['Content-Type'] = 'application/json'
            
    req = _request.Request(url, data=data, headers=headers, method='POST')
    try:
        with _request.urlopen(req, timeout=timeout) as response:
            return Response(response.status, response.read().decode('utf-8'), response.headers)
    except _error.HTTPError as e:
        return Response(e.code, e.read().decode('utf-8'), e.headers)
    except Exception as e:
        raise
