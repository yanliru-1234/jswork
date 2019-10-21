function sort(method){
        let origin = document.getElementById('origin').value
        let logs
    
        if (method=='bubble'){
            logs = bubbleSort(origin)
        }else if(method=='insert'){
            logs = insertSort(origin)
        }
        showDiv = document.getElementById('Anim')
        logValues = logs.values()
        setTimeout("showLog(logValues,showDiv)",50)
    }