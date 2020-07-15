// Discount = ((listingPrice - sellingPrice) / listingPrice)) * 100


var sellingPrice = 100;
var listingPrice = 200;

var discount = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log((Math.round(discount)) + "% off");

console.log(typeof discount);

var checking = listingPrice > sellingPrice;

console.log(typeof checking);

console.log(checking);

// operator precedence is ** > * > / > + > - .