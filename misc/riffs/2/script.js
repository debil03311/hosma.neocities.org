
$(document).ready(function() {
    $('.db').DataTable({
      "ajax": './data.txt',
    	"ordering": true,
    	"paging": 	false,
    	"order": [[ 1, "asc" ]]
    }); 
});