

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBczr0bzl36qFAnp5Z-cRVFWS8WW3zjDCQ",
    authDomain: "mysnarf-6698c.firebaseapp.com",
    databaseURL: "https://mysnarf-6698c.firebaseio.com",
    projectId: "mysnarf-6698c",
    storageBucket: "mysnarf-6698c.appspot.com",
    messagingSenderId: "798999193890"
  };

  firebase.initializeApp(config);

var database = firebase.database();

var currentTime = moment();

  database.ref().on("child_added", function(childSnap) {

    var name = childSnap.val().trainTimeKey;
    var going = childSnap.val().destKey;
    var arrival = childSnap.val().firstTrainTimeKey;
    var freq = childSnap.val().frequencyKey;
    // var min = childSnap.val().min;
    // var next = childSnap.val().next;
 
    $("tbody").append("<tr><td>" + name + "</td><td>" + going + "</td><td>" + freq + "</td></tr>");
 });


  $(".submit-btn").on("click", function () {
      //added variable to hold values
      var trainTime = $(".train-time").val();
      console.log(trainTime);
      var destination = $(".destination").val();
      console.log(destination);
      var firstTrainTime = $(".first-train-time").val();
      console.log(firstTrainTime);
      var frequency = $(".frequency").val();
      console.log(frequency);

      // Alert
      alert("Confirmation: Your train time was successfully added!");
     

      var newTrain = {
          trainTimeKey: trainTime,
          destKey: destination,
          firstTrainTimeKey: firstTrainTime,
          frequencyKey: frequency
      }
      //push object in to firebase DB...//pushing object into DB once submitted it is clicked and after we push the object into the DB, we need to display it on to the HTML page. Submit button will be doing a lot. After user clicks on submit what happens next?

      database.ref().push(newTrain)
       //added functionality to clear values
       $(".train-time").val("");
       $(".destination").val("");
       $(".first-train-time").val("");
       $(".frequency").val("");


  })


