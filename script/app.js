const innerID = document.getElementById('id-advice')
const innerConselho = document.getElementById('advice')


document.getElementById('btn-gerator').addEventListener('click', (e)=>{
    e.defaultPrevented
    gerarConselho()
}
)

async function gerarConselho(){
    const url = 'https://api.adviceslip.com/advice'
    const resposta = await fetch(url)
    const json = await resposta.json()
    const idDoConselho = json.slip.id
    const conselho = json.slip.advice
    innerID.innerHTML = `Advice ${idDoConselho}`
    innerConselho.innerHTML = conselho
}

gerarConselho()