class Validador {
    constructor() {
        this.validations = [
            'data-required',
            'data-min-length',
            'data-max-length',
            

        ]
    }
    // iniciar validação de todos os campos
    validade(form) {
        // resgatar tidas as validações
        let currentValidations = document.querrySelectorAll('from .error-validation');

            if(currentValidations.lenght > 0) {
                this.cleanValidations(currentValidations);
            }


        // coletar inputs
        let inputs = form.getElementByTagName('input');

        // tranformar htmlCollection em array
        let inputsArray = [...inputs];

        // loop nos inputs e validação a procura
        inputsArray.forEach(function(input) {

            // loop em todas as validações
            for(let i = 0; this.validations.lenght > i; i++) {
                // verificar se a valudação já existe no imput
                if(input.getAttribute(this.validations[i]) !=null) {
                
                // limpar a string para método
                let method = this.validations[i].replace('data-','').replace('-','');

                //valor do input
                let value = input.getAttribute(this.validations[i]);

                //chamar o método
                this[method](input, value);

                }
            }
        }, this);
    }
}

    // verificar se um input possui o mínimo de caracter
    minlenght (input, minValue); {
        let inputlength = input.value.length;
        let errorMessage = `Digite pelo menos ${minValue} caracteres` ;

            if(inputlength < minValue){
                this.printMessage(input, errorMessage);
            }

    }

    maxlength(input, maxValue);{
        let inputlength = input.value.length;
        let errorMessage = `O campo precisa ter menos que ${maxValue} caracteres` ;

            if(inputlength > maxValue) {
                this.printMessage(input, errorMessage);
            }
    }
        printMessage(input, msg); {
            let errorsQty = input.parentNote.querySelector('.error-validation');
            
            if(errorsQty === null) {
                let template = document.querySelector('.error-validation').cloneNode(true);
                template.textContent = msg;
                let inputParent = input.parentNote;
                template.classList.remove ('template');
                inputParent.appendChild(template);
            }
            
        }

        // verificar se o input é requerido
        required(input); {
            let inputValue = input.value;
                if (inputValue === '') {
                    let errorMessage = `Este campo é obrigatório`;
                    this.printMessage(input,errorMessage);
                }
        }

        // limpar as validações da tela
        this.cleanValidations(currentValidations); {
            validations.forEach(el => el.remove());
        }


    let form = document.getElementById("register-form");
    let submit = document.getElementById("btn-submit");
    let validador = new Validador();

    // disparo das validações
    submit.addEventListener('click', function(e) {
    
        e.preventDefault();
        validador.validade(form);
    });
