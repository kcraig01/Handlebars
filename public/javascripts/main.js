$(function(){
        var source   = $("#search-results-template").html();
        var searchTemplate = Handlebars.compile(source);
        $results = $('#results')

        $('#searchterm').on('keyup', function(e){
                if(e.keyCode === 13){
                        var data = {
                                searchedTerm: $(this).val()
                        };

                        // $.get('/search', {search : val}, function(data){
                        //         $results.html(searchTemplate(data))
                        // });
                        $.get('/searchresult', data, function(data) {
                                 console.log(data)
                                 // $('#testdiv').html(str);
                                $results.html(searchTemplate(data))
                        });


                        // $.post('/search', {search : val}, function(data){
                        //         console.log('date:', data)
                        //         $results.html(searchTemplate(data))
                        // });s
        
        }
});
});