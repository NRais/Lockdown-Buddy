physicalCategoryVar = 'physical'
mentalCategoryVar = 'mental'
emotionalCategoryVar = 'emotional'

activities = [
    {
        activityName: 'RUNNING',
        outdoorsRequired: true,
        category: physicalCategoryVar 
    },
    {
        activityName: 'BASKETBALL',
        outdoorsRequired: true,
        category: physicalCategoryVar
    },
    {
        activityName: 'SCRABBLE',
        outdoors: false,
        category: mentalCategoryVar
    },
    {
        activityName: 'MEDITATION',
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
    console.log('reaching near the switch.')
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
    
    saveUsername(document.getElementById("cityName").value)
    saveLocation(document.getElementById("locationName").value)

    localStorage.setItem('chosenCategory', category)
    window.location.href = 'frame2.html'
}

testChosenCategory = () => {
    //console.log('Reaching the final test.')
    finalCategory = localStorage.getItem('chosenCategory')

    console.log(finalCategory)
}

saveUsername = (name) => {
    localStorage.setItem('username', name)
}

saveLocation = (yourLocation) => {
    localStorage.setItem('yourLocation', yourLocation)
}

testSavedNameAndLocation = () => {
    name = localStorage.getItem('username')
    yourLocation = localStorage.getItem('yourLocation')
    console.log("You are " + name + " and you are at " + yourLocation + " this location!")
}

testChosenCategory = () => {
    console.log(chosenCategory)
}

setTasksToChosenCategory = () => {
    finalCategory = localStorage.getItem('chosenCategory')
    console.log(finalCategory)

    for(i = 0; i < activities.length; i++){
        currentID = i.toString() 

        currentActivityButton = document.getElementById("activity" + currentID).innerHTML

        if (currentActivityButton != null) {

            if (activities[i].category == finalCategory) {
                document.getElementById("activity" + currentID).innerHTML = activities[i].activityName;  
            } else {
                return;
            }     
        } else {
            return;
        }     

    }
}




