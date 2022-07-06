<!-- ヘッダー -->
function header(){
    $.ajax({
        url: '/blob/main/header.html',
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            document.write(html);
        }
    });
}

<!-- フッター -->
function footer(){
    $.ajax({
        url: '/blob/main/footer.html',
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            document.write(html);
        }
    });
}
