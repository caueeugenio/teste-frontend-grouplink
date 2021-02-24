$("#exportXLS").click(function (e) {
    window.open('data:application/vnd.ms-excel,' + $('#dvData').html());
    e.preventDefault();
});

$("exportPDF").click(function (e) {
    e.preventDefault();
    html2canvas($('#tabela')[0], {
        onrendered: function (canvas) {
            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 500
                }]
            };
            pdfMake.createPdf(docDefinition).download("arquivo.pdf");
        }
    });
});
