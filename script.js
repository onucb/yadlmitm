$notification.post("Обнаружен трек","","Нажмите, чтобы скачать трек с id "+$request.url.replace(/(.*track-id=|&.*)/g, ""),"shortcuts://run-shortcut?name=yadlmitm&input=text&text="+$request.url)

console.log("shortcuts://run-shortcut?name=yadlmitm&input=text&text="+$request.url)
