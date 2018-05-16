$(document).ready(function ($) {

    //check if table is in localstorage
    if (localStorage.getItem('localTable') != undefined) {
        document.getElementById('table-body').insertAdjacentHTML('beforeEnd', localStorage.getItem('localTable'));;
    }

    //save table in localstorage
    function store() {
        window.localStorage.localTable = document.getElementById('table-body').innerHTML;
    }

    
    //create table body rows    
    function addData(ajax_data) {       
        $.each(ajax_data, function (index, val) {
            var tbl = '';
            //add data
            tbl += '<tr>';
            tbl += '<td ><div contentEditable=true data-text="Click to edit" class="row_data placeholder" edit_type="click" col_name="name">' + val['name'] + '</div></td>';
            tbl += '<td ><div contentEditable=true data-text="Click to edit" class="row_data placeholder" edit_type="click" col_name="value">' + val['value'] + '</div></td>';
            //add delete button
            tbl += '<td>';
            tbl += '<button class="btn btn-danger delete-row">Delete</button>';
            tbl += '</td>';

            tbl += '</tr>';
            $("#table-body").append(tbl);
        });
        store();
        
    }

    //make table-cell editable
    $(document).on('click', '.row_data', function (event) {
        event.preventDefault();

        if ($(this).attr('edit_type') == 'button') {
            return false;
        }

        //make div editable
        $(this).closest('div').attr('contenteditable', 'true');
        //add bg css
        $(this).addClass('bg-light');

        $(this).focus();
    })
    //save table cell data
    $(document).on('focusout', '.row_data', function (event) {
        event.preventDefault();

        if ($(this).attr('edit_type') == 'button') {
            return false;
        }

        var row_id = $(this).closest('tr').attr('row_id');

        var row_div = $(this)
            .removeAttr('contenteditable') //make div editable		
            .removeClass('bg-light') //add bg css
        store();
    })

    //Add a new row
    $('.add-row').click(function () {
        $('#myTable tbody').append('<tr><td><div contentEditable=true data-text="Click to edit" class="row_data placeholder" edit_type="click" col_name="name"></div></td><td><div contentEditable=true data-text="Click to edit" class="row_data placeholder" edit_type="click" col_name="value"></div></td><td><button class="btn btn-danger delete-row">Delete</button></td></tr>');
        store();
    });

    //delete the row
    $(document).on('click', '.delete-row', function () {
        $(this).parent().parent().remove();
        store();
    });

    //select multiple files
    function handleFileSelect(evt) {
        var files = evt.target.files; // FileList object

        // files is a FileList of File objects
        for (var i = 0, f; f = files[i]; i++) {
            if (f) {
                var r = new FileReader();
                r.onload = function (e) {
                    //read data from file and add to table                  
                    addData(JSON.parse(e.target.result));
                }
                r.readAsText(f);
            } else {
                alert("Failed to load file");
            }
        }
    }
    document.getElementById('files').addEventListener('change', handleFileSelect, false);


    //create json file
    function makeTextFile(text) {
        var textFile = null;
        var data = new Blob([JSON.stringify(text)], { type: 'text/json' });

        // If we are replacing a previously generated file we need to
        // manually revoke the object URL to avoid memory leaks.
        if (textFile !== null) {
            window.URL.revokeObjectURL(textFile);
        }

        textFile = window.URL.createObjectURL(data);

        return textFile;
    };

    var link = document.getElementById('downloadlink');    

    link.addEventListener('click', function () {
        //converts table to JSON ignoring 3rd column | --> https://www.github.developerdan.com/table-to-json/ <--
        var textbox = $('#myTable').tableToJSON();

        link.href = makeTextFile(textbox);
        link.setAttribute('href', link.href);
        link.setAttribute('download', 'data.json');
    }, false);
}); 
