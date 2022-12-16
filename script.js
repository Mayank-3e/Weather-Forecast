let forecast=null

$("#findmyweather").click(function(event)
{
    event.preventDefault()
    $(".alert").hide()
    $("#copy").hide()
    if($("#city").val())
    {
        let city=$("#city").val()
        $("#loading").fadeIn();
        $.get("scrapper.php?city="+city,function(data)
        {
            $("#loading").hide()
            if(data)
            {
                city=city.toLowerCase()
                let arr=city.split(" ")
                city=""
                arr.forEach(e => {
                    city+=e[0].toUpperCase()+e.slice(1)+' '
                })
                let str="Weather forecast of <strong>"+city+"</strong> :<br>"
                $("#success").html(str+data).fadeIn()
                forecast=data
                $("#copy").fadeIn()
            }
            else $("#fail").fadeIn()
        })
    }
    else $("#noCity").fadeIn();
})

$("#inpclear").click(function(event)
{
    event.preventDefault()
    $("#city").val('')
})

$("#copy").click(function(){
    navigator.clipboard.writeText(forecast)
    $("#copySuccess").fadeIn()
    $("#copySuccess").fadeOut()
})