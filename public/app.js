function add_to_cart(id) {
    var key = 'product_' + id;
    var x = window.localStorage.getItem(key); //Первый раз x=NULL 
    x = x * 1 + 1; //NULL*1=0 
    window.localStorage.setItem(key, x);
    alert('In your cart:' + cart_get_number_of_items(key));
}

function foo() {
    alert('Hello ther!');
}

function cart_get_number_of_items() {
    var cnt = 0;
    for (var i = 0; i < window.localStorage.length; i++) {
        var key = window.localStorage.key(i);
        var value = window.localStorage.getItem(key);
        if (key.indexOf('product_') == 0) {
            cnt = cnt + value * 1;
        }

    }
    return cnt;
}