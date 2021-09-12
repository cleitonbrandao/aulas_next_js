export default function repeticao1 () {
    const lisaprovados = [
        'Fulano',
        'Beltrano',
        'Ciclano',
        'Fulandro',
        'Cicrando'

    ];
    function renderizarLista() {
        return lisaprovados.map(function (nome, i) {
            return <li key={i}>{nome}</li>
        })
    }
    
    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}
// function renderizarLista() {
//     const itens = []

//     for (let i = 0; i < lisaprovados.length; i++) {
//         itens.push(<li key={i}>{lisaprovados[i]}</li>)

//     }
//     return itens
// }
// return (
//     <ul>
//         {renderizarLista()}
//     </ul>
// )