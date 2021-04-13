chrome.contextMenus.create({
    title: '使用百度搜索"%s"', // %s表示选中的文字
    contexts: ['selection'], 
    onclick: function(params)
    {
        chrome.tabs.create({url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(params.selectionText)});
    }
});

chrome.contextMenus.create({
    title: '使用Google搜索"%s"', 
    contexts: ['selection'], 
    onclick: function(params)
    {
        chrome.tabs.create({url: 'https://www.google.com/search?q=' + encodeURI(params.selectionText)});
    }
});

chrome.contextMenus.create({
    title: '使用Bing搜索"%s"', 
    contexts: ['selection'], 
    onclick: function(params)
    {
        chrome.tabs.create({url: 'https://cn.bing.com/search?q=' + encodeURI(params.selectionText)});
    }
});

chrome.contextMenus.create({
    title: '使用v2ex搜索"%s"', 
    contexts: ['selection'], 
    onclick: function(params)
    {
        chrome.tabs.create({url: 'https://www.google.com/search?q=site:v2ex.com/t%20' + encodeURI(params.selectionText)});
    }
});

chrome.contextMenus.create({
    title: '使用StackOverflow搜索"%s"', 
    contexts: ['selection'], 
    onclick: function(params)
    {
        chrome.tabs.create({url: 'https://stackoverflow.com/questions/tagged/' + encodeURI(params.selectionText)});
    }
});