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
        activityName: 'FOOTBALL',
        outdoorsRequired: true,
        category: physicalCategoryVar
    },
    {
        activityName: 'YOGA',
        outdoorsRequired: false,
        category: physicalCategoryVar
    },
    {
        activityName: 'SCRABBLE',
        outdoors: false,
        category: mentalCategoryVar
    },
    {
        activityName: 'GAMING',
        outdoors: false,
        category: mentalCategoryVar
    },
    {
        activityName: 'CODING',
        outdoors: false,
        category: mentalCategoryVar
    },
    {
        activityName: 'MEDITATION',
        outdoors: false,
        category: emotionalCategoryVar
    },
    {
        activityName: 'ACTING',
        outdoors: false,
        category: emotionalCategoryVar
    },
    {
        activityName: 'WATCH MOVIE',
        outdoors: false,
        category: emotionalCategoryVar
    },
    {
        activityName: 'PAINTING',
        outdoors: false,
        category: emotionalCategoryVar
    },
    {
        activityName: 'WALK',
        outdoors: true,
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
    },
    {
        emotionName: 'Depressed',
        emotionCategory: emotionalCategoryVar,
        emotionPicked: false
    },
    {
        emotionName: 'Bored',
        emotionCategory: mentalCategoryVar,
        emotionPicked: false
    },
]

testButton = () => {
    alert("I am an alert!");
}

testId = (id) => {
    alert(id);
}


// NOTE: changed so that the button is passed as a parameter
pickEmotion = (doc) => {

    emotion = doc.id;

    emotions.map( currentEmotion => {
        if (currentEmotion.emotionName.includes(emotion)) {
            currentEmotion.emotionPicked = !currentEmotion.emotionPicked

            console.log(currentEmotion)

            // change button color for selected or unselected
            if (currentEmotion.emotionPicked == true) {
                doc.style.background='#599CEB';
                doc.style.color ='white';
            } else {
                doc.style.background='white';
                doc.style.color ='#599CEB';
            }
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
    console.log('reaching near the switch.') // NOTE: this log is never visible because page is immediately launched

    //function should check through the emotions and see if they have been clicked.
    sortMe = [physical, mental, emotional]
    chosenCategory = sortMe.sort((a, b) => b - a);

    if (chosenCategory[0] = physical) {
        saveCategoryAndNewPage('physical')
    } else if (chosenCategory[0] = mental) {
        saveCategoryAndNewPage('mental')
    } else if (chosenCategory[0] = emotional) {
        saveCategoryAndNewPage('emotional')
    } else {
        alert("Select an emotion to continue.")
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
    
    saveUsername(document.getElementById("yourName").value)
    saveLocation(document.getElementById("cityName").value)

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

/*

THIS FUNCTION HAS THE PROBLEM. ONLY WORKS IF THE CHOSEN CATEGORY IS PHYSICAL.

*/

setTasksToChosenCategory = () => {

    var celcius = localStorage.getItem('celciusTemp');

    var outdoorsIsTrueToday = false;

    if (celcius > 12) {
        outdoorsIsTrueToday = true;
    }

    console.log(celcius, outdoorsIsTrueToday)

    // NOTE: final category is the highest ranked category (so 2 physical, 1 emotion will return physical)
    finalCategory = localStorage.getItem('chosenCategory')

    document.getElementById("draggables").innerHTML = "";

    for(i = 0; i < activities.length; i++) {
        currentID = i.toString() 

        // currentActivityButton = document.getElementById("activity" + currentID).innerHTML

            console.log(finalCategory, activities[i].category)

            // if today you can go outside (then everything passes)
            // or if its false and the activity is false (i.e doesn't require going outdoor, then we pass)
            if (outdoorsIsTrueToday | activities[i].outdoorsRequired == outdoorsIsTrueToday) {

                if (activities[i].category == finalCategory) {            
                    // document.getElementById("activity" + currentID).innerHTML = activities[i].activityName;
                    document.getElementById("draggables").innerHTML += `<div class="draggable" draggable="true">${activities[i].activityName}</div>`;
                    
                }    
            }
    }
}