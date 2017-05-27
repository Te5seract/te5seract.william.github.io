$(document).ready(function()
{
  $('.thumblink').click(function()
  {
     var image = $(this).attr('src');
     $('body').css({'overflow-y':'hidden'});

     if($('#lightboxcontain').length > 0)
     {
      $('#lightboxcontain').fadeIn(300);
      $('.imgbox').html('<img class="picture" src="' + image + '"/>');
     }    
  });
  $('.thumblinkmob').click(function()
  {
     var image = $(this).attr('src');
     $('body').css({'overflow-y':'hidden'});

     if($('#lightboxcontain').length > 0)
     {
      $('#lightboxcontain').fadeIn(300);
      $('.imgbox').html('<img class="picture" src="' + image + '"/>');
     }    
  });  
  $('.closetoggle').click(function()
  {
    $('#lightboxcontain').fadeOut(300);
    $('body').css({'overflow-y':'auto'});
  });


$(function(){
    
    var dataArray = new Array();
    dataArray[0] = "http://68.media.tumblr.com/c85d8cdf06970bb4908e86b57d93cd2a/tumblr_ojzv2vBOgX1v0h6mno1_1280.jpg";
    dataArray[1] = "http://68.media.tumblr.com/c18b7c5f19344f20704d5e85a1af5392/tumblr_ojzv2gvIAp1v0h6mno1_1280.jpg";
    dataArray[2] = "http://68.media.tumblr.com/50bc8b55ff15d1654221bcb705f48806/tumblr_ojc0dpilw81v0h6mno1_1280.jpg";
    dataArray[3] = "http://68.media.tumblr.com/af33d900052e9a2e7600d7124b507e05/tumblr_omioejBam61v0h6mno1_1280.jpg";
    
    var imgId=0;

    window.setInterval(function()
    {
        $('#imgSlide').attr('src',dataArray[imgId]);
        imgId++; 
        if (imgId == 4) imgId = 0; 
    },3000);        
});


$('.mobmenu').toggle(function()
{
  $('.mobbox').animate(
  	{
  	  'width':'100%',
  	  'height':'100%'
  	},100);
  $('.mobmenu').css(
  	{
  	  'right':'5px',
  	  'margin-right':'12px',
  	  'position':'absolute',
  	  'font-size':'17px'
  	});
  $('body').css('overflow','hidden');
  $('.stack').removeClass('inom-stack-normal-line-1');
  $('.stack').addClass('inom-close');
},
function()
{
  $('.mobbox').animate(
  	{
  	  'width':'45px',
  	  'height':'45px'
  	},100);
  $('.mobmenu').css(
  	{
  	  'text-align':'center',
  	  'position':'static',
  	  'margin-left':'10px',
  	  'font-size':'22px'
  	});
  $('body').css('overflow','auto');
  $('.stack').removeClass('inom-close');
  $('.stack').addClass('inom-stack-normal-line-1');	
});

$('.mobmenu2').toggle(function()
{
  $('.mobbox2').css(
  	{
  	  'box-shadow':'1px 2px 1px rgba(0, 0, 0, 0.1)',
  	  'overflow':'auto'
  	});
  $('.mobbox2').animate(
  {
  	  'width':'200px',
  	  'height':'270px'
  },120)
  $('.mobmenu2').css(
  	{
  	  'font-size':'17px',
  	  'text-align':'left',
  	  'margin-left':'11px'
  	});
  $('.stack').removeClass('inom-stack-normal-line-1');
  $('.stack').addClass('inom-close');
},
function()
{
  $('.mobbox2').css(
  	{
  	  'box-shadow':'none',
  	  'overflow':'hidden'
  	});
  $('.mobbox2').animate(
  {
  	  'width':'45px',
  	  'height':'45px'
  },120)
  $('.mobmenu2').css(
  	{
  	  'font-size':'22px',
  	  'margin-left':'10px'
  	});
  $('.stack').removeClass('inom-close');
  $('.stack').addClass('inom-stack-normal-line-1');	
});

$('.catmob').toggle(function()
{
  $('.subcat').slideDown(200);
  $('.subcat').css({'border-bottom':'1px solid #e0e0e0'});
  $('.tri2').removeClass('inom-triangle-down');
  $('.tri2').addClass('inom-triangle-up');
},
function()
{
  $('.subcat').slideUp(200);	
  $('.subcat').css({'border-bottom':'none'});
  $('.tri2').addClass('inom-triangle-down');
  $('.tri2').removeClass('inom-triangle-up');
});




  $('.foliotoggle').css('cursor','pointer');
  var navShow = ({'height':'180px'});
  var navsHide = ({'height':'50px'});

  $('.foliotoggle').toggle(function()
  {
    $('#navigation').css(navShow);
    $('.cattitle').fadeIn(400);
    $('.tri').removeClass('inom-triangle-down');
    $('.tri').addClass('inom-triangle-up');
  },
  function()
  {
  	$('#navigation').css(navsHide);
  	$('.cattitle').fadeOut(200);
    $('.tri').addClass('inom-triangle-down');
    $('.tri').removeClass('inom-triangle-up');
  });
});