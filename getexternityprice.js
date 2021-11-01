var url = "https://deep-index.moralis.io/api/v2/erc20/0x8c883ab3509206014cdf97ff66c70738a7e2afc4/price?chain=bsc";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("X-API-Key", "P0kLxT336wnytygCysvwxTIYxi1pd0el2yDPfZwnMd29iYIMtmxeWGH49n20MyJ5");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
var json = JSON.parse(xhr.responseText);
document.getElementById('ExternityPrice').innerHTML = json.usdPrice;
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};
xhr.send();