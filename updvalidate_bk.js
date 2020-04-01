$(document).ready(function() {
    $("#email").click(function() {
        var $email = $("#email"),
        emailVal = $.trim($email.val());
        if (emailVal.length == 0) {
            $("#emailinfo .notice").text("Please enter a valid email address that can be used as your login name");
        } else {
            $("#emailinfo .notice").empty();
        }
    }),
    $("#username").click(function() {
        var $username = $("#username"),
        usernameVal = $.trim($username.val());
        if (usernameVal.length == 0) {
            $("#usernameinfo .notice").text("Please enter a 3-20 character user name as your unique identifier");
        } else {
            $("#usernameinfo .notice").empty();
        }
    }),
    $("#password").click(function() {
        var $password = $("#password"),
        passwordVal = $.trim($password.val());
        if (passwordVal.length == 0) {
            $("#passwordinfo .notice").text("Please enter 6-16 digit Numbers, letters or common symbols. Letters are case sensitive");
        } else {
            $("#passwordinfo .notice").empty();
        }
    }),
    $("#password2").click(function() {
        var $password2 = $("#password2"),
        password2Val = $.trim($password2.val());
        if (password2Val.length == 0) {
            $("#password2info .notice").text("Please enter 6-16 digit Numbers, letters or common symbols. Letters are case sensitive");
        } else {
            $("#password2info .notice").empty();
        }
    }),
    $("#captcha").click(function() {
        var $captcha = $("#captcha"),
            captchaVal = $.trim($captcha.val());
        if (captchaVal.length == 0) {
            $("#captchainfo .notice").text("Please enter the verification code in the picture");
        } else {
            $("#captchainfo .notice").empty();
        }
    }),

    $("#email,#username,#password,#password2").change(function() {
        $("#emailinfo .notice").empty();
        $("#usernameinfo .notice").empty();
        $("#passwordinfo .notice").empty();
        $("#password2info .notice").empty();
    }),

    $('#updform').validate({        
        valid: function(form){
            alert('test');
            $.ajax({                
                url: "/updateAccount",
                data: $(form).serialize(),
                type: "POST",
                success: function (data) {
                    if (data == 1){
                       alert("Account updated successfully!");
                       window.location.href = "personal";
                    }else{
                       alert("Failed to update account!");                    
                    }
                }
            });
           },
           
        rules: {
            email: {
                required: true,
                email: true,
                remote: {
                    url:"checkEmailOtherThanId.do",
                    type:"get",
                    contentType: "application/json;charset=utf-8",
                    data:{
                        email:function(){return $("#email").val();},
                        userId:function(){return $("#userIdHidden").val();}
                    },
                    dataFilter: function(data, type) {
                        if (data == 1)
                            return false;
                        else
                            return true;
                    }
                }
            },
            username: {
                required: true,
                minlength: 3,
                maxlength: 20,
                remote: {
                    url:"checkUserOtherThanId.do",
                    type:"get",
                    contentType: "application/json;charset=utf-8",
                    data:{
                        username:function(){return $("#username").val();},
                        userId:function(){return $("#userIdHidden").val();}
                    },
                    dataFilter: function(data, type) {
                        if (data == 1)
                            return false;
                        else
                            return true;
                    }
                }
            },
            password: {
                required: true,
                minlength: 6,
                maxlength: 16
            },
            password2: {
                required: true,
                minlength: 6,
                maxlength: 16,
                equalTo: "#password"
            },
            captcha: {
                required: true,
                remote: {
                    url:"checkCaptcha.do",
                    type:"get",
                    contentType: "application/json;charset=utf-8",
                    data:{
                        captcha:function(){return $("#captcha").val();}
                    },
                    dataFilter: function(data, type) {
                        if (data == 0)
                            return false;
                        else
                            return true;
                    }
                }
            }
        },
        messages: {
            email: {
                required: "Please enter a valid email address",
                email: "Please enter a valid email address",
                remote: "The email address has been registered"
            },
            username: {
                required: "Please enter a 3-20 digit user name",
                minlength: "A username must contain at least three characters",
                maxlength: "User names must not exceed 20 characters",
                remote: "The user is occupied"
            },
            password: {
                required: "Please entePlease enter a valid passwordr",
                minlength: "Passwords should contain at least six characters",
                maxlength: "Passwords must not exceed 16 characters"
            },
            password2: {
                required: "Please entePlease enter a valid passwordr",
                minlength: "Passwords should contain at least six characters",
                maxlength: "Passwords must not exceed 16 characters",
                equalTo: "The two passwords are not the same"
            },
            captcha: {
                required: "Please enter the verification code",
                remote: "Verification code error"
            }
        },
        errorElement: "span",
        errorPlacement: function(error, element) {
            // Add the `help-block` class to the error element
            error.addClass("help-block");

            // Add `has-feedback` class to the parent div.form-group
            // in order to add icons to inputs
            element.parents(".input-group").addClass("has-feedback");

            if (element.prop("type") === "checkbox") {
                error.appendTo(element.parent("label").parent("div").parent("div").next("div"));
            } else {
                //error.insertAfter( element );
                error.appendTo(element.parent("div").parent("div").next("div"));
            }

            // Add the span element, if doesn't exists, and apply the icon classes to it.
            if (!element.next("span")[0]) {
                $("<span class='glyphicon glyphicon-remove form-control-feedback'></span>").insertAfter(element);
            }
        },
        success: function(label, element) {
            // Add the span element, if doesn't exists, and apply the icon classes to it.
            if (!$(element).next("span")[0]) {
                $("<span class='glyphicon glyphicon-ok form-control-feedback'></span>").insertAfter($(element));
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).parents(".input-group").addClass("has-error").removeClass("has-success");
            $(element).next("span").addClass("glyphicon-remove").removeClass("glyphicon-ok");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parents(".input-group").addClass("has-success").removeClass("has-error");
            $(element).next("span").addClass("glyphicon-ok").removeClass("glyphicon-remove");
        }
    });
});


/**
 * 
 */