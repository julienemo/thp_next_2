// preparation methods 
// generate a random integer
const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

// generate the 6 winning numbers
const getWinningNumbers = () => {
  let winningNumbers = [];
  for(let i = 0; i < 6; ++i) {
    winningNumbers.push(getRandomIntInclusive(1, 99));
  }
  return winningNumbers
}

// check any oneshot input is empty, 
// if empty, show indication
const checkNoEmpty = (fieldToCheck, indicationToShow) => {
  let content = fieldToCheck.val().length
  if (content == 0 ) {
    $('.indication').addClass('d-none');
    indicationToShow.removeClass('d-none');
    return false;
  } else {
    return true;
  }
}

// check email address format if email is not empty
const emailRegex = /^([a-z0-9\_]+)@([a-z0-9]+)\.[a-z]{2,3}$/;
const checkEmailValid = () => {
  if (
    ($('#email').val().length > 8) && 
    (($('#email').val().length < 30) && 
    (emailRegex.test(String($('#email')
               .val())
               .toLowerCase()
    )))
    ) {
    return true ;
  } else {
    $('.indication').addClass('d-none');
    $('#invalid_email').removeClass('d-none');
    return false ;
  }
}

// check if any number is present and in good range
const checkSingleNumberPresenceAndRange = (number) => {
  return (number != null) && (number >= 1) && (number <= 99)
}

// check if all 6 numbers are present and in good range
const checkAllNumbersPresenceAndRange = (choices) => {
  if (choices.every(checkSingleNumberPresenceAndRange)){
    $('#empty_numbers').addClass('d-none');
    return true;
  } else {
    $('.indication').addClass('d-none');
    $('#empty_numbers').removeClass('d-none');
    return false;
  }
}

// check whether any single input is registered as valid
let inputValid = (input) => {
  return input
}

// sort an array by elements numerical value
const sortByNumericValue = (a, b) => {return a - b}

// compare sorted array content
const arraysEqual = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i < arr1.length -1; ++ i) {
    result.push(arr1[i] === arr2[i]);
  }
  return !result.includes(false);
}

// check whether the numbers are winning numbers
let checkIfWinning = (winningNumbers, choices) => { 
  if (arraysEqual(winningNumbers, choices)) {
    $('#winning_message').removeClass('d-none');
    $('#losing_message').addClass('d-none');
  } else {
    $('#winning_message').addClass('d-none');
    $('#losing_message').html( `
    Désolé vous avez perdu<br> les nombres gagnants sont : 
    ${winningNumbers[0]}, 
    ${winningNumbers[1]}, 
    ${winningNumbers[2]}, 
    ${winningNumbers[3]}, 
    ${winningNumbers[4]}, 
    ${winningNumbers[5]}.`)
    $('#losing_message').removeClass('d-none');
  }
}

// overall function
let checkLoto = (firstname, lastname, email, choices) => {
  let inputConditions = [
    checkNoEmpty(firstname, $('#empty_firstname')),
    checkNoEmpty(lastname, $('#empty_lastname')),
    checkEmailValid(),
    checkNoEmpty(email, $('#empty_email')),
    checkAllNumbersPresenceAndRange(choices)
  ]
  if (inputConditions.every(inputValid)) {
    checkIfWinning(winningNumbers, choices)
  }
}

// game starts
// page loaded, generate winning numbers
const winningNumbers = getWinningNumbers();

// prevent submit from refreshing page 
$("#main_form").submit((e) => {
    e.preventDefault();
});

// submit clicked
$('#btn-submit').click(() => {
  // clear all messages
  $('.indication').addClass('d-none');
  //get all inputs
  const lotoNumbers = [
    +$('#number_1').val(),
    +$('#number_2').val(),
    +$('#number_3').val(),
    +$('#number_4').val(),
    +$('#number_5').val(),
    +$('#number_6').val()
  ];
  const firstname = $('#firstname');
  const lastname = $('#lastname');
  const email = $('#email');

  // check input and whether winning
  checkLoto(firstname, lastname, email, lotoNumbers);
});

// takeaways
// 1. array.every DOESN'T have the usual syntax
// between brackets the function is call without brackets
// and === true is not allowed
// 2. comparing two arrays or sets aren't fun
// the most straight forward is to sort then compare json.to_string
// 3. spec wants only one errors message
// in this case it is more efficient to put all verifs in one func
// 4. may as well just put getUserInputs into a func

// TODO: (after correction)
// 1. getUserInputs func
// 2. refacto string comparison
// 3. refacto random integer generation