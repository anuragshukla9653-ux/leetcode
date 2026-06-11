var maxProfit = function ( prices ) {
    let maxProfit = 0;
    let minPrice = prices[0];
    for ( let i = 1; i < prices.length; i++ ) {

        minPrice = Math.min ( minPrice, prices[i] );

        maxProfit = Math.max (
            maxProfit,
            prices[i] - minPrice
        );
    }
    return ( maxProfit );
};

console.log(maxProfit([7,1,5,3,6,4]));

// Run time error// 

// var maxProfit = function(prices) {
//     let map = []
//     for (let i = 0; i < prices.length; i++) {
//         for(let j = i+1; j < prices.length; j++) {
//             let diff = prices[j] - prices[i]

//             if (diff > 0) {
//                 map.push(diff)
//             }
//         }
//     }

//     if (map.length === 0) {
//         return 0
//     }

//     let profit = Math.max(...map)
//     return (profit)
// };


// Time limit exceeded//

// var maxProfit = function(prices) {
//     let maxProfit = 0;
//     for (let i = 0; i < prices.length; i++) {
//         for(let j = i+1; j < prices.length; j++) {

//             let profit = prices[j] - prices[i];

//             if ( profit > maxProfit) {
//                 maxProfit = profit;
//             }
//         }
//     }
//     return (maxProfit);
// };