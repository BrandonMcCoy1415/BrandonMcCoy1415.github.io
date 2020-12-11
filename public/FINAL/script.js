//so what we want to do is match the movies to the answers, this is basically pseudo code rn
//if the movie has the actors in it, choose that movie



//mood - filter the genre
//if the mood is happy - comedy, action, drama, sci-fi, musical, family
//gloomy - comedy, action, adventure, romance, sci-fi, musical, family
//anxiety - comedy, action, adventure, musical, family
//relaxed - documentary, romance, drama
//bored - action, comedy, horror, thriller, sci-fi
//combo - no filter for genre


//for age of watchers - filter the rating
//babies - G
//little kids - G
//preteens - PG
//teens - G, PG, PG-13
//adults, G, PG, PG-13, R


//language filter by language

//decade of movie - filter by year
//50s - movies from 1950-1959
//60s - movies from 1960-1969
//70s - movies from 1970-1979
//80s - movies from 1980-1989
//90s - movies from 1990-1999
//2000s - movies from 2000-2009
//2010s - movies from 2010-2019
//2020s - movies from 2020


//Does this function work?
/* 
function getSelectedCheckboxValues(id) {
    const checkboxes = document.querySelectorAll(`input[id="${id}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    console.log(values);
    return values;
} */

var myGenre = [];

function getCheckedBoxes(chkboxName) {
    var checkboxes = document.getElementsByName(chkboxName);
    var checkboxesChecked = [];
    // loop over them all
    for (var i=0; i<checkboxes.length; i++) {
       // And stick the checked ones onto an array...
       if (checkboxes[i].checked) {
          checkboxesChecked.push(checkboxes[i]);
       }
    }
    // I'm assuming they are expected to only select one option considering we have the "Combo" option right? - BM
    // I also could not figure out how to call the function from an external script so this function is copied directly into the Quiz2 html - BM
    if (checkboxesChecked[0].id == "Happy") {
        localStorage.setItem("Genre", "Comedy, Action, Drama, Sci-Fi, Musical, Family") 
    }else if (checkboxesChecked[0].id =="Gloomy") {
        localStorage.setItem("Genre", "comedy, action, adventure, romance, sci-fi, musical, family" )
    }else if(checkboxesChecked[0].id == "Anxious"){
        localStorage.setItem("Genre", "comedy, action, adventure, musical, family" )
    }else if(checkboxesChecked[0].id == "Relaxed"){
        localStorage.setItem("Genre", "documentary, romance, drama" )
    }else if(checkboxesChecked[0].id == "Bored"){
        localStorage.setItem("Genre", "action, comedy, horror, thriller, sci-fi" )
    }else if(checkboxesChecked[0].id == "Combo"){
        
    }
  }
  
  // Call as
  console.log(myGenre)


/*const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
    alert(getSelectedCheckboxValues('color'));
}); */