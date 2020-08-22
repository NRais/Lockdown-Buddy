physicalCategoryVar = 'physical'
mentalCategoryVar = 'mental'
emotionalCategoryVar = 'emotional'

activities = [
    {
        activityName: 'Running',
        outdoorsRequired: true,
        category: physicalCategoryVar 
    },
    {
        activityName: 'Basketball',
        outdoorsRequired: true,
        category: physicalCategoryVar
    },
    {
        activityName: 'Scrabble',
        outdoors: false,
        category: mentalCategoryVar
    },
    {
        activityName: 'Meditation',
        outdoors: false,
        category: emotionalCategoryVar
    }        
]

emotions = [
    {
        emotionName: 'Energetic',
        emotionCategory: physicalCategoryVar,
        emotionPicked: false
    },
    {
        emotionName: 'Smart',
        emotionCategory: mentalCategoryVar,
        emotionPicked: false
    },
    {
        emotionName: 'Wild',
        emotionCategory: emotionalCategoryVar,
        emotionPicked: false
    },
    {
        emotionName: 'Jittery',
        emotionCategory: physicalCategoryVar,
        emotionPicked: false
    }
]

testButton = () => {
    alert("I am an alert!");
}

testId = (id) => {
    alert(id);
}


pickEmotion = (emotion) => {
    emotions.map( currentEmotion => {
        if (currentEmotion.emotionName.includes(emotion)) {
            currentEmotion.emotionPicked = !currentEmotion.emotionPicked
            console.log(currentEmotion)
        }       
    })
}

chooseCategory = () => {
    physicalCategory = 0;
    mentalCategory = 0;
    emotionalCategory = 0;

    emotions.map( currentEmotion => {
        if (currentEmotion.emotionCategory.includes(physicalCategoryVar)) {
            if (currentEmotion.emotionPicked == true) {
                physicalCategory = physicalCategory + 1;
            }
        } else if (currentEmotion.emotionCategory.includes(mentalCategoryVar)) {
            if (currentEmotion.emotionPicked == true) {
                mentalCategory = mentalCategory + 1;
            }
        } else if (currentEmotion.emotionCategory.includes(emotionalCategoryVar)) {
            if (currentEmotion.emotionPicked == true) {
                emotionalCategory = emotionalCategory + 1;
            }
        } 
    })

    // console.log('Physical: ' + physicalCategory)
    // console.log('Mental: ' + mentalCategory)
    // console.log('Emotional: ' + emotionalCategory)

    chooseEmotionsPicked(physicalCategory, mentalCategory, emotionalCategory)
}

chooseEmotionsPicked = (physical, mental, emotional) => {
    //function should check through the emotions and see if they have been clicked.
    sortMe = [physical, mental, emotional]
    chosenCategory = sortMe.sort((a, b) => b - a);
    console.log(chosenCategory)
    if (chosenCategory[0] = physical) {
        saveCategoryAndNewPage('physical')
    } else if (chosenCategory[0] = mental) {
        saveCategoryAndNewPage('mental')
    } else if (chosenCategory[0] = emotional) {
        saveCategoryAndNewPage('emotional')
    } else {
        alert("Something went wrong.")
    }

}

listChosenCategory = () => {

    finalCategory = localStorage.getItem('chosenCategory')

    activities.map( currentActivity => {
        if (currentActivity.category == finalCategory) {
            console.log("You should try " + currentActivity.activityName + " sometime!")            
        } else {
            return null
        }
    })
}

saveCategoryAndNewPage = (category) => {
    localStorage.setItem('chosenCategory', category)
    window.location.href = 'categoryTestFrameTwo.html'
}

testChosenCategory = () => {
    console.log('Reaching the final test.')
    finalCategory = localStorage.getItem('chosenCategory')

    console.log(finalCategory)
}






