// function getPersonInfo(){
//     var name = document.getElementById('newUsername').value;
//
//     var ajaxRequest = new XMLHttpRequest();
//     ajaxRequest.onreadystatechange = function(){
//         if(ajaxRequest.readyState == 4){
//             if(ajaxRequest.status == 200){
//                 var person = JSON.parse(ajaxRequest.responseText);
//                 document.getElementById('newFirstname').value = person.firstname;
//                 document.getElementById('newInitials').value = person.initials;
//                 document.getElementById('newCPR').value = person.CPR;
//                 document.getElementById('newPassword').value = person.password;
//             }
//         }
//     }
//     ajaxRequest.open('GET', 'http://localhost:8080/rest/user/VCDIO3_war_exploded/index.html' + name);
//     ajaxRequest.send();
// }
// // CmdHttpRequest -u http://www.google.com
// function setPersonInfo(){
//     var username = document.getElementById('newUsername').value;
//     var firstname = document.getElementById('newFirstname').value;
//     var ini = document.getElementById('newInitials').value;
//     var cpr = document.getElementById('newCPR').value;
//     var password = document.getElementById('newPassword').value;
//
//     var postData = 'username=' + username;
//     postData += '&firstname='+firstname;
//     postData += '&ini=' + encodeURIComponent(ini);
//     postData += '&CPR=' + cpr;
//     postData += '&password' + password;
//
//     var ajaxRequest = new XMLHttpRequest();
//     ajaxRequest.open('POST', 'http://localhost:8080/rest/user/' + name);
//     ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     ajaxRequest.send(postData);
// }
