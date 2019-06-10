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
    var userSamlet = $('#userform').serializeJSON();

    // var userInfo = $('#userform').not(type=checkbox).serialize();
    // var userInfo = $('#userform:not([type=checkbox])').serialize();

    // var userInfo = $('#userform [type=number], [type=text]').serializeJSON();
    // var array_values = [];
    // $('#userform [type=checkbox]').each( function() { // For hver tjekket checkbox, put værdien i array.
    //     if( $(this).is(':checked') ) {
    //         array_values.push( $(this).val() );
    //     }
    // });
    // var roles = array_values.join(",");
    // console.log(userInfo+"\n");
    // console.log(roles+"\n");

    // var data2 = $('#userform [type="checkbox"]').map(function () { return "roles"+"="+this.checked;}).get().join();
    // var userSamlet = userInfo+"&roles="+roles;
    console.log(userSamlet);

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


// $("#createUserButton").click(function () {
//     $.ajax({
//         url : "/rest/user",
//         data : $('div#createUserForm').serializeJSON(),
//         contentType : "application/json",
//         method : 'POST',
//         success : function(data){
//             alert(data);
//         },
//         error : function(jqXHR, text, error){
//             alert(jqXHR.status + text + error);
//         }
//     })
//
//     $("#adminPage").show();
//     $("#editPage").hide();
//
// });

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