class FibonacciApp {
    constructor() {
        this.outputElement = document.getElementById('output');
    }

    isValidNumber(n) {
        return !isNaN(n) && n > 0;
    }

    generateFibonacciSeries(n) {
        let fibonacciSeries = [];
        for (let i = 0; i < n; i++) {
            if (i === 0) {
                fibonacciSeries.push(0);
            } else if (i === 1) {
                fibonacciSeries.push(1);
            } else {
                fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
            }
        }
        return fibonacciSeries;
    }

    generateFibonacci() {
        const inputNumber = document.getElementById('inputNumber').value;
        const n = parseInt(inputNumber);

        if (!this.isValidNumber(n)) {
            alert('Por favor, ingrese un número entero positivo.');
            return;
        }

        const fibonacciSeries = this.generateFibonacciSeries(n);
        this.outputElement.innerHTML = fibonacciSeries.join(', ');
        console.log(fibonacciSeries.join(', '));
    }
}

const fibonacciApp = new FibonacciApp();
