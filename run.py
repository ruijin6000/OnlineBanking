"""
Starts the flask server
"""
from flaskbank import app
import sys

if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == '-h':
        app.run(host='0.0.0.0', debug=True)
    else:
        app.run(debug=True)

