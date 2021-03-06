function init() {

    browser.storage.local.get(null, function (result) {
        let name = ''
        let url = ''

        result.searchName ? name = result.searchName : name = 'Google'

        browser.contextMenus.create({
            id: 'context_menus_search',
            title: `Search "%s" on ${name}`,
            contexts: ["selection"],
            onclick: function (info, tab) {

                browser.storage.local.get(null, function (result) {
                    result.queryUrl ? url = result.queryUrl : url = 'https://www.google.com/search?q='
                    browser.tabs.create({
                        url: url + info.selectionText
                    })
                })
            }
        })
    })
}

init()
