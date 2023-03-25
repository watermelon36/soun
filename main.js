var Dog = 0
var Chicken = 0
var Cat = 0
var Cow = 0
Background = 0
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/W2NbiOG-A/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) +1 ;
        random_number_g = Math.floor(Math.random() * 255) +1 ;
        random_number_b = Math.floor(Math.random() * 255) +1 ;
        document.getElementById("result_label").innerHTML = 'Detect voice is of - '+ results[0].label;
        document.getElementById("result_count").innerHTML = 'Detect dog- ' + Dog + ' Detect Cat- '  + Cat +  ' Detect Cow- ' + Cow + ' Detect Chicken- ' + Chicken +  ' Detect Background- '  + Background;
        document.getElementById("result_label").style.color = "rgb("
        + random_number_r+","+random_number_g+","+random_number_r+")";
        img = document.getElementById('animal_image');
       
        if(results[0].label == "bark"){
            img.src = 'dog.png';
            Dog = Dog + 1;
        }else if (results[0].label == "meow"){
            img.src = 'cat.png';
            Cat = Cat + 1;
        }else if (results[0].label == "moo"){
            img.src = 'cow.png';
            Cow = Cow + 1;
        }else if (results[0].label == "chicken"){
            img.src = 'chicken.png';
            Chicken = Chicken + 1;
        }else{
           img.src = 'background.jpeg';
           Background = Background + 1;
        }
    }
}