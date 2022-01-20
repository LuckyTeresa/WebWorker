var num_workers = 10;
var items_per_worker = 1000000;


var result = 0;
var pending_workers = num_workers;
for (var i = 0; i < num_workers; i += 1) {
    var worker = new Worker('core.js');
    // 向子worker发送起始和终止值
    worker.postMessage(i * items_per_worker);
    worker.postMessage((i + 1) * items_per_worker);
    // 子worker计算完会发送结果到父worker并关闭自身
    worker.onmessage = storeResult;
}

function storeResult(event) {
    result += event.data;
    pending_workers -= 1;
    if (pending_workers <= 0)
        postMessage(result);
}