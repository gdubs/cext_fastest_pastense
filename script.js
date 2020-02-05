switchToPastTense(document.body)

function switchToPastTense(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(switchToPastTense)
    }else if (element.nodeType === Text.TEXT_NODE){
        if(element.textContent.match(/(^|\s)is(?=\s|$)/gi)){
            const newElement = document.createElement('span')
            newElement.innerHTML = element.textContent.replace(/(^|\s)is(?=\s|$)/gi, '<span class="pop_it"> was</span>')
            element.replaceWith(newElement)
        }
        // element.textContent = element.textContent.replace(/(^|\s)is(?=\s|$)/gi, ' was')
    }
}