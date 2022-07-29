// https://calculator.swiftutors.com/price-earnings-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const priceEarningsRatioRadio = document.getElementById('priceEarningsRatioRadio');
const marketPricePerEquityShareRadio = document.getElementById('marketPricePerEquityShareRadio');
const earningsPerShareRadio = document.getElementById('earningsPerShareRadio');

let priceEarningsRatio;
let marketPricePerEquityShare = v1;
let earningsPerShare = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

priceEarningsRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Market Price Per Equity Share';
  variable2.textContent = 'Earnings Per Share';
  marketPricePerEquityShare = v1;
  earningsPerShare = v2;
  result.textContent = '';
});

marketPricePerEquityShareRadio.addEventListener('click', function() {
  variable1.textContent = 'Price Earnings Ratio';
  variable2.textContent = 'Earnings Per Share';
  priceEarningsRatio = v1;
  earningsPerShare = v2;
  result.textContent = '';
});

earningsPerShareRadio.addEventListener('click', function() {
  variable1.textContent = 'Price Earnings Ratio';
  variable2.textContent = 'Market Price Per Equity Share';
  priceEarningsRatio = v1;
  marketPricePerEquityShare = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(priceEarningsRatioRadio.checked)
    result.textContent = `Price Earnings Ratio = ${computePriceEarningsRatio().toFixed(2)}`;

  else if(marketPricePerEquityShareRadio.checked)
    result.textContent = `Market Price Per Equity Share = ${computeMarketPricePerEquityShare().toFixed(2)}`;

  else if(earningsPerShareRadio.checked)
    result.textContent = `Earnings Per Share = ${computeEarningsPerShare().toFixed(2)}`;
})

// calculation

function computePriceEarningsRatio() {
  return Number(marketPricePerEquityShare.value) / Number(earningsPerShare.value);
}

function computeMarketPricePerEquityShare() {
  return Number(priceEarningsRatio.value) * Number(earningsPerShare.value);
}

function computeEarningsPerShare() {
  return Number(marketPricePerEquityShare.value) / Number(priceEarningsRatio.value);
}