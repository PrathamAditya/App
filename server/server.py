import yfinance
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "API For Stock info"
@app.route("/<name>&date=<date>")
def get_stock(name,date):
    fulldata=yfinance.Ticker(name).info
    data={"name":fulldata["shortName"],"info":fulldata["longBusinessSummary"]}
    print(fulldata["longBusinessSummary"])
    return data

if __name__ == "__main__":
    app.run(debug=True,port=3001)