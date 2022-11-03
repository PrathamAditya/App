import yfinance
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "API For Stock info"
@app.route("/<name>&&start_date=<start_date>&&end_date=<end_date>")
def get_stock(name,start_date,end_date):
    startDate=""
    endDate = end_date
    if start_date == "none":
        startDate = str(int(startDate[:4])-1) + startDate[4:]
    else:
         startDate = start_date
    fulldata=yfinance.Ticker(name).info
    price=(yfinance.Ticker(name).history(start=startDate,end=endDate))
    print(price.to_json())
    data={"name":fulldata["shortName"],"info":fulldata["longBusinessSummary"],"price":price.to_json()}

    return data

if __name__ == "__main__":
    app.run(debug=True,port=3001)