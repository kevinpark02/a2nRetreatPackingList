const packingListTemplate = {
    regularList: {
        multiplier: [
            'shirt(s)',
            'pair of pants',
            'pair of underwear',
            'pair of socks'
        ],
        nonMultiplier: [
            'toothbrush',
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

    const checklist = document.getElementById('checklistContainer')
        checklist.style.textAlign = 'left';  // Align checklist container to the left
        checklist.style.display = 'flex';          // Arrange labels in a row
        checklist.style.flexWrap = 'nowrap'; 
        checklist.style.overflowX = 'auto';          // Enable horizontal scrolling
        checklist.style.whiteSpace = 'nowrap';       // Prevent text from wrapping
        checklist.style.justifyContent = 'flex-start';

    packingList.forEach(item => {
        const label = document.createElement('label');
        // Make text black and align to the left
        label.style.color = 'black';     // Set text color to black
        label.style.textAlign = 'left';  // Align label text to the left
        label.style.display = 'inline-flex'; // keeps label and checkbox in same line
        label.style.alignItems = 'flex-start';
    
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = item;
        // checkbox.style.marginRight = '2px'; // Optional: Adds space between checkbox and text

    
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(item));

        checklist.appendChild(label);
    });
    

    console.log(packingList)

    document.getElementById("options").style.display = "none";
    document.getElementById("output").style.display = "block";

}