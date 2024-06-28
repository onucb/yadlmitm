$notification.post("Обнаружен трек","","Нажмите, чтобы скачать трек с id "+$request.url.replace(/(.*track-id=|&.*)/g, ""),"shortcuts://run-shortcut?name=Я.музыка загрузчик&input=text&text="+$request.url)

console.log("shortcuts://run-shortcut?name=Я.музыка загрузчик&input=text&text="+$request.url)
