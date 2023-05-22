const validateCedula = (numeroCedula = '') => {
    
    numeroCedula = numeroCedula.replaceAll('-', '')

    console.log('Numero de cedula ', numeroCedula);

    console.log('Posición: ');
    let positionArr = []
    for (let i = 0; i < numeroCedula.length; i++) {

        if((i + 1) === numeroCedula.length){
            break
        }

        if((i+1) % 2 !== 0){
            console.log(numeroCedula[i], ' - ', 1);
            positionArr.push(1)
        }else{
            console.log(numeroCedula[i], ' - ', 2);
            positionArr.push(2)
        }
        
    }


    console.log('');console.log('');console.log('')

    console.log('T=C(i) x P')
    let multiplicacionArr = []
    for (let i = 0; i < positionArr.length; i++) {
        const c = numeroCedula[i];
        const p = positionArr[i];
        const m  = c * p;

        console.log(`${c} X ${p} = ${m}`);
        multiplicacionArr.push(m)
        
    }


    console.log('');console.log('');console.log('')

    console.log('Sumar (T)')
    let sumaArr = []
    for (let i = 0; i < multiplicacionArr.length; i++) {
        const element = multiplicacionArr[i];
        let nuevoNumero = 0

        element < 10 
        ? nuevoNumero = element
        : nuevoNumero = parseInt( element.toString()[0] ) + parseInt( element.toString()[1] )

        sumaArr.push(nuevoNumero)
        console.log(element, ' = ', nuevoNumero);
    }


    console.log('');console.log('');console.log('')
    const sumaTotal = sumaArr.reduce( (acumulador, current) => acumulador + current)
    console.log('Total: ', sumaTotal);


    console.log('');console.log('');console.log('')
    console.log('Módulo: ', (sumaTotal % 10));

    const lastDigit = 10 - (sumaTotal % 10)
    console.log('Ultimo digito: ',  lastDigit);

    console.log('');console.log('');console.log('')

    if(lastDigit == numeroCedula[numeroCedula.length - 1]){
        alert(`Cédula ${numeroCedula} válida!`)
    }else{
        alert(`Cédula ${numeroCedula} inválida!`)
    }
    
}


const validateButton = document.getElementById('validateButton')

validateButton.addEventListener('click', (e) => {
    const cedulaInput = document.getElementById('cedulaInput')
    validateCedula(cedulaInput.value)
})



validateCedula('01200800454')