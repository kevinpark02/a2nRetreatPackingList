const packingListTemplate = {
    regularList: {
        multiplier: [
            'shirt(s)',
            'pair of pants',
            'pair of underwear',
            'pair of socks'
        ],
        nonMultiplier: [
            'tooth brush',
            'toothpaste',
            'floss',
            'raincoat (optional)',
            'winter coat (optional)',
            'clothes for water activities (optional)',
            'Bible',
            'ipad/journal',
            'ipencil/pen',
            'water bottle'
        ]
    },
    retreatSiteOther: [
        'towel',
        'sleeping bag'
    ],
    yesSports: [
        'sports shoes',
        'sports shirts',
        'sports shorts',
        'sports socks'
    ]
}


const orangeBtn = document.getElementById('orange-btn')

orangeBtn.onclick = function() {
    let packingList = []
    const numDays = document.getElementById('numOfDays').value
    const retreatSiteOther = document.getElementById('lodging').value
    const sports = document.getElementById('sports').value
    
    const multipleItems = packingListTemplate.regularList.multiplier
    multipleItems.forEach(item => {
        const formattedItem = numDays + ' ' + item
        packingList.push(formattedItem)
    })

    const singleItems = packingListTemplate.regularList.nonMultiplier
    packingList = [...packingList, ...singleItems]

    if (sports === 'yesSports') {
        packingList = [...packingList, ...packingListTemplate.yesSports]
    }

    if (retreatSiteOther === 'retreatSiteOther') {
        packingList = [...packingList, ...packingListTemplate.retreatSiteOther]
    }

    console.log(packingList)
}