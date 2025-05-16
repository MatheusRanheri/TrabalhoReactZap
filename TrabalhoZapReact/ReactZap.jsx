import './Zap.css'

function App (){
    <>

    </>
    const mensagens = [
        {
            id: 1,
            descricao: "Oi",
            enviado: false,
            visualizado: true
        },
        {
           id: 2,
            descricao: "Tu não me ama mais?",
            enviado: false,
            visualizado: true
        },
         {
           id: 3,
            descricao: "Oi, boa tarde",
            enviado: true,
            visualizado: false
        },
         {
           id: 4,
            descricao: "Quem é você mesmo?",
            enviado: true,
            visualizado: false
        }
    ]

    return(
        <div class = "chat">
            <div class = "header">
                <h3>Meu zap</h3>
            </div>
        </div>
       
    )
    
}

export default App;