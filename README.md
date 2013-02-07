jquery-max-length
=================

Plugin jquery to manage max number of characters into a textfield.


<b>How to use ? :</b>

    $('.selector').maxlength({
        maxLength : 5,
        enableEvent : function () {},
        disableEvent : function () {}
    });

<b>Where : </b>

    maxLength : max number of characters.
    disableEvent : Callback event triggered by completed max number of character.
    enableEvent : Callback event triggered when the textfield have again a number of character less than maxLength.

