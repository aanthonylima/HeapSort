//Código com heapSort

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
  
//Para ordenar de forma crescente:
function heapifyCrescente(arr, n, i, indice) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n && String(arr[left][indice]) > String(arr[largest][indice])) {
        largest = left; //Adaptado para funcionar com números e strings
    }
    if (right < n && String(arr[right][indice]) > String(arr[largest][indice])) {
        largest = right; //Adaptado para funcionar com números e strings
    }
    if (largest !== i) {
        swap(arr, i, largest);
        heapifyCrescente(arr, n, largest, indice);
    }
  }
function heapSortcrescente(arr, indice = 0) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) { //Reorganiza o array
        heapifyCrescente(arr, n, i, indice);
    }
    for (let i = n - 1; i > 0; i--) { //Remove o maior elemento da heap e ajusta os restantes
        swap(arr, 0, i);
        heapifyCrescente(arr, i, 0, indice);
    }
    return arr;
}
  
//Para ordenar de forma decrescente:
function heapifyDecrescente(arr, n, i, indice) {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
  
    if (left < n && String(arr[left][indice]) < String(arr[smallest][indice])) {
        smallest = left; //Ao invés de ser ">", fica "<" para decrescer
    }
    if (right < n && String(arr[right][indice]) < String(arr[smallest][indice])) {
        smallest = right; //Ao invés de ser ">", fica "<" para decrescer
    }
    if (smallest !== i) {
        swap(arr, i, smallest);
        heapifyDecrescente(arr, n, smallest, indice);
    }
}
function heapSortdecrescente(arr, indice = 0) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapifyDecrescente(arr, n, i, indice);
    }
    for (let i = n - 1; i > 0; i--) {
        swap(arr, 0, i);
        heapifyDecrescente(arr, i, 0, indice);
    }
    return arr;
}
  
//Elementos que serão trabalhados:
const tabela = [
    [1, "Ana Clara Souza", 27],
    [2, "João Pedro Lima", 31],
    [3, "Maria Eduarda Silva", 24],
    [4, "Lucas Henrique Oliveira", 36],
    [5, "Beatriz Alves", 29],
    [6, "Gustavo Henrique Santos", 33],
    [7, "Fernanda Costa", 22],
    [8, "Rafael Augusto Pereira", 28],
    [9, "Camila Rodrigues", 35],
    [10, "Bruno César Moreira", 26],
    [11, "Juliana Ferreira", 39],
    [12, "Pedro Lucas Gomes", 23],
    [13, "Mariana Souza Lima", 30],
    [14, "Thiago Augusto Carvalho", 25],
    [15, "Luana Martins Silva", 32]
]
  
  console.log("Tabela original:", tabela, "\n")
  
//While para lá no final o código perguntar de deseja repetir o processo ou não
while (true) {
    escolha = parseInt(prompt("Olá! Escolha uma das seguintes opções:\n1 - Ordenar por ID\n2 - Ordenar por NOME\n3 - Ordenar por IDADE\n4 - Sair\nSua escolha: "))
  
    if (escolha === 4) {
        console.log("\nAté mais!")
        break
    }
  
    if (escolha === 1 || escolha === 2 || escolha === 3) {
        ordem = prompt("Digite 1 para ordem crescente ou 2 para ordem decrescente: \n")
        indice = escolha - 1
  
        if (ordem == 1) {
            heapSortcrescente(tabela, indice);
            console.log("\nTabela atualizada:", tabela, "\n")
        }
        else if (ordem == 2) {
            heapSortdecrescente(tabela, indice);
            console.log("\nTabela atualizada:", tabela, "\n")
        }
        else {
            console.log("Inválido. Por favor, repita o processo.")
            continue
        }
    
    }
    else {
        console.log("Opção inválida. Tente novamente.")
        continue
    }
  
    repetir = prompt("Deseja repetir o processo?\nDigite 'S' para sim, ou qualquer outra tecla para não: ")
    if (repetir !== "S" && repetir !== "s") {
      console.log("\nAté mais!")
      break
    }
}

