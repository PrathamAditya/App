import yfinance
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "API For Stock info"
@app.route("/<name>")
def get_stock(name):
    return yfinance.Ticker(name).info

if __name__ == "__main__":
    app.run(debug=True)