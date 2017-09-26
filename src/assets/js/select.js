$(document).ready(function() {
//            $('.select-multiple').select2();
    $('#select-location').select2({
        placeholder:"Location Filter(Multiselect)"
    })
    $('#select-indicator').select2({
        placeholder:"Indicator Filter(Multiselect)"
    })
    $('#btn-location').click(function(){
        $('#select-location').select2('open');
    });
    $('#btn-indicator').click(function(){
        $('#select-indicator').select2('open');
    });
});