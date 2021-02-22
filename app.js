const countDown = (num) => {
    setTimeout(() => {

        if(num > 0) {
            console.log(num);
            countDown(num - 1);
        } else {
            console.log("Done!");
        }

    }, 1000);

};

countDown(5);