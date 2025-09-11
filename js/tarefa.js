// Quero criar um sistema que dirá o preço final do produto e se eu consigo comprá-lo

const produto = 'Arroz';
let precoProduto = 27.69;
let porcenDesconto = 30;
let meuDinheiro = 15.00;

function precoFinal (){
    var decDesconto = porcenDesconto / 100;
    var finalPrice = precoProduto * decDesconto;
    console.log('O produto ', produto, 'está custando ', finalPrice.toFixed(2));

    if(meuDinheiro >= finalPrice){
        console.log('Você tem dinheiro o suficiente para comprar este produto!');
    }
    else{
        console.log('Você não tem dinheiro o suficiente para comprar este produto!');
    };
};

precoFinal();



