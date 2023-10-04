/*sticky navigation */
let navbar=$(".navbar");

$(window).scroll(function(){
let o Top=$(".section-2").offset().top - window.innerHeight;
if($(window).scrollTop()>o top){
    navbar.addClass("sticky");
}
else{
    navbar.removeClass("sticky")
}
});


/*counter animation*/
let nCount=function(selector){
    $(selector).each(function(){

        $(this).animte(
            {
            Counter:$(this).text()
        },
        {

        duration:4000,
        easing:"swing"
        step:function(value){
            $(this).text(Math.cell(value));
        }
    }
        );
    });
};
$(window).scrool