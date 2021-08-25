// Pop Up Modal Add di halaman Setup.
$(document).ready(function(){
    $("#pilihpertanyaan").click(function(){
        $("#modalPilihPertanyaan").show();
        $("#modalPilihPertanyaan .modal-content").slideDown();
    });
});

// Hide Modal saat klik close
$(document).ready(function(){
    $(".close").click(function(){
        $("#modalPilihPertanyaan").fadeOut();
        $("#modalPilihPertanyaan .modal-content").slideUp();
    });
});

// Hide Modal saat klik diluar
window.onclick = function(event) {
    modalAdd = document.getElementById("modalAddQuestion");

    modalMenu = document.getElementById("modalMenuAkun");

    modalPertanyaan = document.getElementById("modalPilihPertanyaan");

    if (event.target == modalAdd) {
        modalAdd.style.display = "none";
        $("#modalAddQuestion .modal-content").slideUp();
    }else if(event.target == modalMenu) {
        modalMenu.style.display = "none";
        $("#modalMenuAkun .modal-content").slideUp();
    }else if(event.target == modalPertanyaan) {
        modalPertanyaan.style.display = "none";
        $("#modalPilihPertanyaan .modal-content").slideUp();
    }
}

$(document).ready(function(){
    // Tambahkan class inactive ke list kedua dan seterusnya
    $("#tab li a:not(first)").addClass("inactive");
    $(".tab-content").hide();
    $(".tab-content:first").show();

    $("#tab li a").click(function(){
        let tablink = $(this).attr("id");

        if ($(this).hasClass("inactive")) {
            $("#tab li a").addClass("inactive");
            $(this).removeClass("inactive");
            
            $(".tab-content").hide();
            $("#"+ tablink +"Content").fadeIn("slow");
        }
    });
});

$(document).ready(function(){
    let num = 1;
    let count = $(document).find(".p").length;
    console.log(count);
});