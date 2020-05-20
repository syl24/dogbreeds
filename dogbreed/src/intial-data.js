
var temp = {
    "message": {
        "affenpinscher": [],
        "african": [],
        "airedale": [],
        "akita": [],
        "appenzeller": [],
        "basenji": [],
        "beagle": [],
        "bluetick": [],
        "borzoi": [],
        "bouvier": [],
        "boxer": [],
        "brabancon": [],
        "briard": [],
        "bulldog": [
            "boston",
            "english",
            "french"
        ],
        "bullterrier": [
            "staffordshire"
        ],
        "cairn": [],
        "cattledog": [
            "australian"
        ],
        "chihuahua": [],
        "chow": [],
        "clumber": [],
        "cockapoo": [],
        "collie": [
            "border"
        ],
        "coonhound": [],
        "corgi": [
            "cardigan"
        ],
        "cotondetulear": [],
        "dachshund": [],
        "dalmatian": [],
        "dane": [
            "great"
        ],
        "deerhound": [
            "scottish"
        ],
        "dhole": [],
        "dingo": [],
        "doberman": [],
        "elkhound": [
            "norwegian"
        ],
        "entlebucher": [],
        "eskimo": [],
        "frise": [
            "bichon"
        ],
        "germanshepherd": [],
        "greyhound": [
            "italian"
        ],
        "groenendael": [],
        "hound": [
            "afghan",
            "basset",
            "blood",
            "english",
            "ibizan",
            "walker"
        ],
        "husky": [],
        "keeshond": [],
        "kelpie": [],
        "komondor": [],
        "kuvasz": [],
        "labrador": [],
        "leonberg": [],
        "lhasa": [],
        "malamute": [],
        "malinois": [],
        "maltese": [],
        "mastiff": [
            "bull",
            "english",
            "tibetan"
        ],
        "mexicanhairless": [],
        "mix": [],
        "mountain": [
            "bernese",
            "swiss"
        ],
        "newfoundland": [],
        "otterhound": [],
        "papillon": [],
        "pekinese": [],
        "pembroke": [],
        "pinscher": [
            "miniature"
        ],
        "pointer": [
            "german",
            "germanlonghair"
        ],
        "pomeranian": [],
        "poodle": [
            "miniature",
            "standard",
            "toy"
        ],
        "pug": [],
        "puggle": [],
        "pyrenees": [],
        "redbone": [],
        "retriever": [
            "chesapeake",
            "curly",
            "flatcoated",
            "golden"
        ],
        "ridgeback": [
            "rhodesian"
        ],
        "rottweiler": [],
        "saluki": [],
        "samoyed": [],
        "schipperke": [],
        "schnauzer": [
            "giant",
            "miniature"
        ],
        "setter": [
            "english",
            "gordon",
            "irish"
        ],
        "sheepdog": [
            "english",
            "shetland"
        ],
        "shiba": [],
        "shihtzu": [],
        "spaniel": [
            "blenheim",
            "brittany",
            "cocker",
            "irish",
            "japanese",
            "sussex",
            "welsh"
        ],
        "springer": [
            "english"
        ],
        "stbernard": [],
        "terrier": [
            "american",
            "australian",
            "bedlington",
            "border",
            "dandie",
            "fox",
            "irish",
            "kerryblue",
            "lakeland",
            "norfolk",
            "norwich",
            "patterdale",
            "russell",
            "scottish",
            "sealyham",
            "silky",
            "tibetan",
            "toy",
            "westhighland",
            "wheaten",
            "yorkshire"
        ],
        "vizsla": [],
        "weimaraner": [],
        "whippet": [],
        "wolfhound": [
            "irish"
        ]
    },
    "status": "success"
};

var arr = temp.message; //to be replaced with live data
var breedsAfterCall = []; //holds a list of breeds AND subBreeds
var newdog;
for (var item in arr) {
    if (arr[item].length > 0) {
        for (var i = 0; i < arr[item].length; i++) {
            newdog = {
                id: arr[item][i] + ' ' + item,
                content: arr[item][i] + ' ' +  item
            }
            breedsAfterCall.push(newdog);
        }
    } else {
        newdog = {
            id: item,
            content: item
        }
        breedsAfterCall.push(newdog);
    }
}
var shuffledBreeds = shuffle(breedsAfterCall);
// for (var item in breedsAfterCall){
//     shuffledBreeds.push(item);
// }

console.log(shuffledBreeds);


function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}




const initalData = {
    dogs: {
        'dog-1': { id: 'dog-1', content: (shuffledBreeds[0].content)},
        'dog-2': { id: 'dog-2', content: (shuffledBreeds[1].content)},
        'dog-3': { id: 'dog-3', content: (shuffledBreeds[2].content)},
        'dog-4': { id: 'dog-4', content: (shuffledBreeds[3].content)},
        'dog-5': { id: 'dog-5', content: (shuffledBreeds[4].content)},
        'dog-6': { id: 'dog-6', content: (shuffledBreeds[5].content)},
        'dog-7': { id: 'dog-7', content: (shuffledBreeds[6].content)},
        'dog-8': { id: 'dog-8', content: (shuffledBreeds[7].content)},
        'dog-9': { id: 'dog-9', content: (shuffledBreeds[8].content)},
        'dog-10': { id: 'dog-10', content: (shuffledBreeds[9].content)},

        'dog-11': { id: 'dog-11', content: (shuffledBreeds[10].content)},
        'dog-12': { id: 'dog-12', content: (shuffledBreeds[11].content)},
        'dog-13': { id: 'dog-13', content: (shuffledBreeds[12].content)},
        'dog-14': { id: 'dog-14', content: (shuffledBreeds[13].content)},
        'dog-15': { id: 'dog-15', content: (shuffledBreeds[14].content)},
        'dog-16': { id: 'dog-16', content: (shuffledBreeds[15].content)},
        'dog-17': { id: 'dog-17', content: (shuffledBreeds[16].content)},
        'dog-18': { id: 'dog-18', content: (shuffledBreeds[17].content)},
        'dog-19': { id: 'dog-19', content: (shuffledBreeds[18].content)},
        'dog-20': { id: 'dog-20', content: (shuffledBreeds[19].content)},
    },

    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Good Boys',
            dogIds: ['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5', 'dog-6', 'dog-7', 'dog-8', 'dog-9', 'dog-10']
        },

        'column-2': {
            id: 'column-2',
            title: 'Bad Dogs',
            dogIds: ['dog-11', 'dog-12', 'dog-13', 'dog-14', 'dog-15', 'dog-16', 'dog-17', 'dog-18', 'dog-19', 'dog-20']
        }
    },
    columnOrder: ['column-1', 'column-2']    
}
export default initalData;