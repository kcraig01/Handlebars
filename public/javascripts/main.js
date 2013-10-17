$(function(){
        var source   = $("#search-results-template").html();
        var searchTemplate = Handlebars.compile(source);
        $results = $('#results')

        $('#searchterm').on('keyup', function(e){
                if(e.keyCode === 13){
                        
                        // do something
                        // e.preventDefault();
                        var val = $(this).val();
                        console.log($(this).val());
                        // $.get('/search', {search : val}, function(data){
                        //         $results.html(searchTemplate(data))
                        // });
                        $.post('/search', val,function(data){
                                console.log('thing')
                                $results.text("hi")
                                
                        })


                        // $.post('/search', {search : val}, function(data){
                        //         console.log('date:', data)
                        //         $results.html(searchTemplate(data))
                        // });
                }
        });
});