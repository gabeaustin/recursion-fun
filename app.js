const countDown = (num, callback) => {
    setTimeout(() => {

        if(num > 0) {
            console.log(num);
            countDown(num - 1, callback);
        } else {
            callback();
        }

    }, 1000);
};

const isDone = () => {
    console.log("Done Ya Rings");
}

countDown(5, isDone); 
// if put parenthesis, like this: isDone(), it invockes the function immediately