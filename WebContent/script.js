/**
 * Metoder til at vise og gemme elementer på siden.
 */

$("#loginButton").click(function(){
    $("#loginPage").hide();
    $("#adminPage").show();
});

$("#logOut").click(function(){
    $("#adminPage").hide();
    $("#loginPage").show();
});

$("#createUser").click(function(){
    $("#adminPage").hide();
    $("#editPage").show();
});

/**
 * Metode til at hente data fra serveren.
 */

$("#loginButton").click(function () {
   $("#userTable").load("URL");
});

/**
 * Metode til at sende data til serveren når der skal oprettes bruger.
 */
function createUser() {
    event.preventDefault();

    var userInfo = $('#userform').serializeJSON();
    console.log(userInfo);
    var userSamlet = userInfo;

    $.ajax(
        {
            url: 'rest/user',
            method: 'POST',
            contentType: "application/json",
            data: userSamlet,
            success: function (userSamlet) {
                alert(JSON.stringify(userSamlet));
                console.log(userSamlet);
            }
        }
    ) //ajax end
} //createUser end

/**
 * Metode til at sende brugeren tilbage til menuen efter man har
 * oprettet en bruger
 */





/**
 *  Show/hide metoder til menuerne
 */

$(".logoutPageShow").click(function () {
    $("#adminPage").hide();
    $("#editPage").hide();
    $("#loginPage").show();
});

$(".adminPageShow").click(function () {
    $("#loginPage").hide();
    $("#editPage").hide();
    $("#adminPage").show();
});

$(".editPageShow").click(function () {
    $("#loginPage").hide();
    $("#adminPage").hide();
    $("#editPage").show();
});