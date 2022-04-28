    let email = document.getElementById("email")
    let NomeCompleto = document.getElementById("NomeCompleto")
    let cpf = document.getElementById("cpf")
    let rg = document.getElementById("rg")
    let genero = document.getElementById("genero")
    let data = document.getElementById("data")
    let uf = document.getElementById("uf")
    let cidade = document.getElementById("cidade")
    let cep = document.getElementById("cep")
    let bairro = document.getElementById("bairro")
    let rua = document.getElementById("rua")
    let numero = document.getElementById("numero")
    let complemento = document.getElementById("complemento")


    function completarCadastro() {
        let listaCompleta = JSON.parse(localStorage.getItem('listaCompleta') || '[]')
        listaCompleta.push(
        {
                emailCadastrado: email.value,
                NomeCompleto: NomeCompleto.value,
                CPF: cpf.value,
                RG: rg.value,
                genero: genero.value,
                data: data.value,
                UF: uf.value,
                cidade: cidade.value,
                CEP: cep.value,
                Bairro: bairro.value,
                Rua: rua.value,
                numero: numero.value,
                complemento: complemento.value
        })

        // Vizualizar no localStorage
        localStorage.setItem('listaCompleta', JSON.stringify(listaCompleta))

        // Concatenar

        const ob1 = localStorage.setItem('listaCompleta', JSON.stringify(listaCompleta))
        const ob2 = localStorage.setItem('listaDeUsuarios', JSON.stringify(listaDeUsuarios))

        const ob3 = {...ob1, ...ob2}

        localStorage.setItem('ob3', JSON.stringify(ob3))

}

