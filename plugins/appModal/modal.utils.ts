interface CreateElemConfig {
    class?: string;
    text?: string;
    attr?: [string, string]
}

export const createElem = (nodeName: string, config?:CreateElemConfig) => {
    const node = document.createElement(nodeName)
    if (config) {
        if (config.class) node.classList.add(config.class)
        if (config.text) node.innerText = config.text
        if (config.attr) node.setAttribute(config.attr[0], config.attr[1])
    } 
    return node
}