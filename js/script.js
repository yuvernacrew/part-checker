$(function(){
  var array =  [
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0 ,0, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
  ]
  // チェックボックス
  $('.checkbox').click(function(){
    var $checked = $('#part-form [name=checkbox]:checked');
    var valList = $checked.map(function(index, el){
      return $(this).val(); 
    });
    console.log(valList);

    //判定の処理
    if(valList.length == 2){
      if(array[valList[0]][valList[1]] == 0){
        $('.result-box').text('×');
        $('label').addClass('btn-gray');
      }
    }else{
      $('.result-box').text('◯');
    }

    //チェックボックスの制御
    var $count = $("input[type=checkbox]:checked").length;
    var $not = $('input[type=checkbox]').not(':checked');

    if($count >= 2) {
      $('label').addClass('btn-gray');
      $not.attr("disabled",true);
    }else{
      $('label').removeClass('btn-gray');
      $not.attr("disabled",false);
    }
  })

  $('.reset-btn').click(function(){
    $('.checkbox').prop('checked', false);
    $('label').removeClass('btn-gray');
    $('.result-box').text('○');

    var $count = $("input[type=checkbox]:checked").length;
    var $not = $('input[type=checkbox]').not(':checked')
    $not.attr("disabled",false);
  })
});