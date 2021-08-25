// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart','bar']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(chartJawabSingkat);
google.charts.setOnLoadCallback(chartPilihanGanda);
google.charts.setOnLoadCallback(chartKotakCentang);
google.charts.setOnLoadCallback(chartDropdown);
google.charts.setOnLoadCallback(chartSkalaLinier);
google.charts.setOnLoadCallback(chartKisiPilihanGanda);
google.charts.setOnLoadCallback(chartPetakKotakCentang);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

// Jawaban Singkat
function chartJawabSingkat() {

    // Create the data table.
    var data = google.visualization.arrayToDataTable([
        ["Answer", "Sum" ],
        ["Jawaban 1", 2],
        ["Jawaban 2", 5],
        ["Jawaban 3", 1],
        ["Jawaban 4", 8],
        ["Jawaban 5", 5],
        ["Jawaban 6", 1],
        ["Jawaban 7", 8]
      ]);

    // Set Chart View
    var view = new google.visualization.DataView(data);
    view.setColumns([0,1,{
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation"
    }]);

    // Set chart options
    var options = {
        'height':400,
        legend: { position: "none" }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_jawabSingkat'));
    chart.draw(view, options);
}

// Pilihan Ganda
function chartPilihanGanda() {

    // Create the data table.
    var data = google.visualization.arrayToDataTable([
        ["Answer", "Sum" ],
        ["Opsi 1", 2],
        ["Opsi 2", 5],
        ["Opsi 3", 1],
        ["Opsi 4", 8],
        ["Opsi 5", 5],
        ["Opsi 6", 1],
        ["Opsi 7", 8]
      ]);

    // Set chart options
    var options = {
        'height':400
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_pilihanGanda'));
    chart.draw(data, options);
}

// Petak Kotak Centang
function chartKotakCentang() {

    // Create the data table.
    var data = google.visualization.arrayToDataTable([
        ["Answer", "Sum" ],
        ["Opsi 1", 2],
        ["Opsi 2", 5],
        ["Opsi 3", 1],
        ["Opsi 4", 8],
        ["Opsi 5", 5],
        ["Opsi 6", 1],
        ["Opsi 7", 8]
      ]);

    // Set Chart View
    var view = new google.visualization.DataView(data);
    view.setColumns([0,1,{
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation"
    }]);

    // Set chart options
    var options = {
        'height':400,
        legend: { position: "none" }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_kotakCentang'));
    chart.draw(view, options);
}

// DropDown
function chartDropdown() {

    // Create the data table.
    var data = google.visualization.arrayToDataTable([
        ["Answer", "Sum" ],
        ["Opsi 1", 2],
        ["Opsi 2", 5],
        ["Opsi 3", 1],
      ]);

    // Set chart options
    var options = {
        'height':400
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_dropDown'));
    chart.draw(data, options);
}

// Jawaban Singkat
function chartSkalaLinier() {

    // Create the data table.
    var data = google.visualization.arrayToDataTable([
        ["Answer", "Sum" ],
        ["1", 2],
        ["2", 0],
        ["3", 1],
        ["4", 8],
        ["5", 5],
      ]);

    // Set Chart View
    var view = new google.visualization.DataView(data);
    view.setColumns([0,1,{
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation"
    }]);

    // Set chart options
    var options = {
        'height':400,
        legend: { position: "none" }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_skalaLinier'));
    chart.draw(view, options);
}

// Kisi Pilihan Ganda
function chartKisiPilihanGanda() {

    // Create the data table.
    var data = google.visualization.arrayToDataTable([
        ["Answer", "Kolom1", "Kolom2", "Kolom3" ],
        ["Baris 1", 2,2,5],
        ["Baris 2", 5,6,2],
        ["Baris 3", 1,7,3],
        ["Baris 4", 8,3,5],
        ["Baris 5", 5,9,5],
      ]);

    // Set chart options
    var options = {
        'height':400,
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.charts.Bar(document.getElementById('chart_kisiPilihanGanda'));
    chart.draw(data, options);
}

// Kisi Pilihan Ganda
function chartPetakKotakCentang() {

    // Create the data table.
    var data = google.visualization.arrayToDataTable([
        ["Answer", "Kolom1", "Kolom2", "Kolom3" ],
        ["Baris 1", 2,2,5],
        ["Baris 2", 5,6,2],
        ["Baris 3", 1,7,3],
        ["Baris 4", 8,3,5],
        ["Baris 5", 5,9,5],
      ]);

    // Set chart options
    var options = {
        'height':400,
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.charts.Bar(document.getElementById('chart_petakKotakCentang'));
    chart.draw(data, options);
}