//.slideDown();はアニメーションで上から表示
//.slideUp();下から表示
//.show();cssで非表示の要素をjQueryで表示
//.hide();表示されている要素をjQueryで非表示
$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});