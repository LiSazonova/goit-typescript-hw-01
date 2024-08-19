function showMessage(message: string): void {
  console.log(message);
}
showMessage('Hello, GoIT!');

function calc(num1: number, num2: number):number {
  return num1 + num2;
}

console.log(calc(2, 10));

function customError(): never {
  throw new Error('Error');
}

export {};