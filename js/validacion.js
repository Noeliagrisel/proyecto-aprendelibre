function validar()
{
    var elem;
    var flag_vac = false;

    elem = document.getElementsByTagName('input');

    for (var i = 0; i < elem.length; ++i)
    {
        if (elem[i].type != 'submit' && elem[i].type != 'checkbox')
        {
            if (elem[i].value == '')
            {
                flag_vac = true;
                break;
            }

        } 
    }

    if(flag_vac)
    {
        document.getElementsByClassName('valid')[0].innerHTML = 'Faltan campo/s a completar'
    }
    else
    {
        document.getElementsByClassName('valid')[0].innerHTML = ''
    }
}