$(function(){
  var array =  [
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1 ,1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
  ]
  // チェックボックス
  $('.checkbox').click(function(){
    var $checked = $('#part-form [name=checkbox]:checked');
    var valList = $checked.map(function(index, el){
      return $(this).val(); 
    });

    if(valList.length == 2){
      if(array[valList[0]][valList[1]] == 0){
        $('.result-box').text('×');
      }
    }else if(valList.length == 1 || valList.length == 0){
      $('.result-box').text('◯');
    }else{
      $('.result-box').text('×');
    }
  })
});