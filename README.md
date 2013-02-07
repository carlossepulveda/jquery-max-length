jquery-max-length
=================

Plugin jquery para gestionar el numero maximo de caracteres que recibe un campo de texto


<b>Uso :</b>

    $('.selector').maxlength({
        maxLength : 5,
        enableEvent : function () {},
        disableEvent : function () {}
    });

<b>En donde : </b>

    maxLength : cantidad maxima de caracteres que permite el textfield
    disableEvent : callback llamado al momento de completar el tope maximo de caracteres
    enableEvent : callback llamado al momento en el cual el textfield vuelve a tener una cantidad de caracteres inferior al tope maximo.

