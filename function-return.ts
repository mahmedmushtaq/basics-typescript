// function return types

const arrowReturn: (n1:number, n2:number)=>number = (n1:number,n2:number)=>{
    return n1+n2;
}

function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(n: number): void {
  console.log('addition is = ', n);
}



printResult(arrowReturn(2, 3));