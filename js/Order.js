// Order Block
(function () {

    let aAdd = document.querySelectorAll(".add");
    let aDown = document.querySelectorAll(".down");
    let aNum = document.querySelectorAll(".num");
    let aPrice = document.querySelectorAll(".price");
    let oTotalNum = document.querySelector(".total-num");
    let oTotalPrice = document.querySelector(".total-price");


    let len = aNum.length; //4


    /* set we get the data from backend */
    let data = [
        {dj: 30, number: 0},
        {dj: 40, number: 0},
        {dj: 35, number: 0},
        {dj: 30, number: 0},
        {dj: 36, number: 0},
        {dj: 30, number: 0},
        {dj: 34, number: 0},
        {dj: 35, number: 0},
    ]

    for (let i = 0; i < len; i++) {
        aAdd[i].onclick = function () {
            //operate database
            data[i].number++;

            //Render the page
            updateView(i)

            //aNum[i].innerHTML = data[i].number;	 //Quantity
            //aPrice[i].innerHTML = data[i].number * data[i].dj; //Subtotal
            //oTotalNum.innerHTML = getTotal().totalNum;
            //oTotalPrice.innerHTML = getTotal().totalPrice;

        };

        aDown[i].onclick = function () {
            // determine the data
            if (!data[i].number) {
                return;
            }
            //operate database
            data[i].number--;
            //Render the page
            updateView(i)

            //aNum[i].innerHTML = data[i].number;	 //Quantity
            //aPrice[i].innerHTML = data[i].number * data[i].dj; //Subtotal
            //oTotalNum.innerHTML = getTotal().totalNum;
            //oTotalPrice.innerHTML = getTotal().totalPrice;

        };
    }

    // get the total quantity and price total
    function getTotal() {
        //quantity : n initialize
        let n = 0;
        //total： p initialize
        let p = 0;
        for (let i = 0; i < len; i++) {
            //quantity addition
            n += data[i].number;
            //sum of subtotal
            p += data[i].number * data[i].dj;
        }
        return {
            totalNum: n,
            totalPrice: p
        }

    }

    function updateView(index) {
        aNum[index].innerHTML = data[index].number;	 //qunality
        aPrice[index].innerHTML = data[index].number * data[index].dj + " $"; //subtotal
        oTotalNum.innerHTML = getTotal().totalNum;
        oTotalPrice.innerHTML = getTotal().totalPrice;
    }
})();


//if(data[i].number > 0){

//	}






