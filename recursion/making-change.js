//Given an input x, write a function to determine the minimum number of coins required to make exact change

var coins = [25, 10, 5, 1];

function change(x, coins) {
    if (x == 0) { // if there is no change then return 0
        return 0;
    }

    var min = x;// there are

    coins.forEach(function(coin, i) {
        if (x - coin >= 0) {
            var c = change(x - coin, coins);

            if (min > c + 1) {
                min = c + 1;
            }
        }
    });
    return min;

    // for (var i = 0, count = coins.length; i < count; i++) {
    //     if (x - coins[i] >= 0) {
    //         var c = change(x - coins[i], coins);

    //         if (min > c + 1) {
    //             min = c + 1;
    //         }
    //     }
    // }
    // return min;
}


change(32, coins);