onmessage = function(e) {
    // alert无法使用
    // if (window.confirm("Do you really want to leave?")) {
    //     window.alert('Bye!');
    // }

    // navigator可以使用
    // console.log(navigator);

    console.log('Worker: Message received from main script');
    console.log(self);


    const result = e.data[0] * e.data[1];
    if (isNaN(result)) {
        postMessage('Please write two numbers');
    } else {
        const workerResult = 'Result: ' + result;
        console.log('Worker: Posting message back to main script');
        postMessage(workerResult);
    }
}

onerror = function(e){
    console.log(e);
}
