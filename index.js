
function printName(){
    var name = document.getElementById('p1').innerText;
    var lastname = document.getElementById('p2').innerText;
    var age = document.getElementById('p3').innerText;
    var message = 'My name is: ' + name + ' ' + lastname + age;
    alert(message);
}

function printFormValues(event){
    event.preventDefault();
    var name = document.getElementById('firstName').value;
    var lastname = document.getElementById('lastname').value;
    var age = document.getElementById('age').value;
    var year = 2025;
    var birthyear = year - age;
    var message = 'My name is: ' +  name  + '  ' + lastname  +  ' My age is: '  +  age  + '  My birthyear is:  '  + birthyear ;
    alert(message);

}
function resetFormvalues(event){
  document.getElementById('form').reset();
}

