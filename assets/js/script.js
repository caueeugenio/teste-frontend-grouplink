let dadosjSon = '';
let dadosjSonTabela = '';
let numDepositados = 0;
let numRetirados = 0;
let numAtrasados = 0;
let statusPedido = 0;


$(document).ready(function () {
    $.get("dados/pedidos.json", function (data) {


        for (linha = 0; linha < data.length; linha++) {

            if (data[linha].status == "Depositado") {
                numDepositados += 1;
                statusPedido = 1;
            } else if (data[linha].status == "Retirado") {
                numRetirados += 1;
                statusPedido = 2;
            } else if (data[linha].status == "Atrasado") {
                numAtrasados += 1;
                statusPedido = 3;
            }

            if (statusPedido == 1) {
                dadosjSon += '<div id="depositado" class="card-pedido mb-4">'
            } else if (statusPedido == 2) {
                dadosjSon += '<div id="retirado" class="card-pedido mb-4">'
            } else {
                dadosjSon += '<div id="atrasado" class="card-pedido mb-4">'
            }

            dadosjSon += '<p>Locker: ' + data[linha].locker;
            dadosjSon += '<p>Nome: ' + data[linha].destinatario;
            dadosjSon += '<p>Pedido: ' + data[linha].numero;
            dadosjSon += '<p>Status: ' + data[linha].status;
            dadosjSon += '<p>E-mail: ' + data[linha].email;
            dadosjSon += '<p>Telefone: ' + data[linha].telefone;
            dadosjSon += '<p>Avaliação: ' + data[linha].avaliacao;
            dadosjSon += '<p>Pin: ' + data[linha].pin + '</div>';



            dadosjSonTabela += '<tr>';
            dadosjSonTabela += '<td>' + data[linha].locker + '</td>';
            dadosjSonTabela += '<td>' + data[linha].destinatario + '</td>';
            dadosjSonTabela += '<td>' + data[linha].numero + '</td>';
            dadosjSonTabela += '<td>' + data[linha].telefone + '</td>';
            dadosjSonTabela += '<td>' + data[linha].dtacriacao + '</td>';
            dadosjSonTabela += '<td>' + data[linha].status + '</td>';
            dadosjSonTabela += '<td>' + data[linha].avaliacao + '</td>';
            dadosjSonTabela += '<td>' + data[linha].pin + '</td>';
            dadosjSonTabela += '</tr>';


        }


        $('#total_depositados').html(numDepositados);
        $('#total_atrasados').html(numAtrasados);
        $('#total_retirados').html(numRetirados);
        $('#total_pedidos').html(data.length);
        $('#total_filtro').html(data.length);
        $('#resultado').html(dadosjSon);
        $('#resultadoTabela').html(dadosjSonTabela);

        // search();
        dataTable();


    });

});

function dataTable() {
    $(document).ready(function () {
        $('#tabela').DataTable(
            {
                "language": {
                    "lengthMenu": "Mostrando _MENU_ registros por página.",
                    "zeroRecords": "Nada encontrado... desculpe",
                    "info": "Mostrando página _PAGE_ de _PAGES_",
                    "infoEmpty": "Nenhum registro encontrado.",
                    "infoFiltered": "(filtrado de _MAX_ no total.)"
                },
                "paginate": {
                    "previous": '‹',
                    "next": '›'
                },
                "aria": {
                    "paginate": {
                        "previous": 'Página anterior',
                        "next": 'Próxima página'
                    }
                }
            });
    });
}

function total(){
    let search = document.querySelector('input');
    search.value = "";
}
function depositado() {
    let search = document.querySelector('input');
    search.value = "depositado";
}

function atrasado(){
    let search = document.querySelector('input');
    search.value = "atrasado";
}

function retirado(){
    let search = document.querySelector('input');
    search.value = "retirado";
}



// function search() {
//     var filter = document.getElementById('filter');

//     var table = document.getElementById('tabela');

//     filter.onkeyup = function () {

//         var nameFilter = filter.value;
//         for (var i = 1; i < table.rows.length; i++) {
//             var content = table.rows[i].cells[0].innerText;
//             var match = content.toLowerCase().indexOf(nameFilter) >= 0;
//             table.rows[i].style.display = match ? '' : 'none';
//         }
//     };
// }

