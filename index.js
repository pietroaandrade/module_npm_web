import cows from 'cows';
import chalk from 'chalk';

function imprimirVaca(cor = 'blue') {
    const vaca = cows();
    
    console.log(chalk[cor](vaca));
}

export default imprimirVaca;