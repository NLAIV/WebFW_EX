var listItem = [
    { id: 1, arvo: 'Maitoa', määrä: 1, yksikkö: 'l' },
    { id: 2, arvo: 'Perunoita', määrä: 3, yksikkö: 'kg' },
    { id: 3, arvo: 'Porkkanoita', määrä: 2, yksikkö: 'kg' },
    { id: 4, arvo: 'Kananmunia', määrä: 12, yksikkö: 'kpl' }
]

const item = [
    { id: 1, arvo: 'Maitoa', määrä: 0, yksikkö: 'l' },
    { id: 2, arvo: 'Perunoita', määrä: 0, yksikkö: 'kg' },
    { id: 3, arvo: 'Porkkanoita', määrä: 0, yksikkö: 'kg' },
    { id: 4, arvo: 'Kananmunia', määrä: 0, yksikkö: 'kpl' },
    { id: 5, arvo: 'Leipää', määrä: 0, yksikkö: 'kpl' },
    { id: 6, arvo: 'Voita', määrä: 0, yksikkö: 'pkt' },
    { id: 7, arvo: 'Juustoa', määrä: 0, yksikkö: 'kpl' },
    { id: 8, arvo: 'Kinkkua', määrä: 0, yksikkö: 'pkt' }
]
const text = [
    { id: 1, arvo: 'Ostoslista' },
    { id: 2, arvo: 'Pvm:' },
    { id: 3, arvo: 'Lisää Leipää' },
    { id: 4, arvo: 'Lisää Voita' },
    { id: 5, arvo: 'Lisää Juustoa' },
    { id: 6, arvo: 'Lisää Kinkkua' }
]

function getTextById(x)
{
    for(let i = 0; i < text.length; i++)
    {
        if(x == text[i].id)
        {
            let found = text[i]
            return found;
        }
    }
    return null;
    
}
function getItemById(x)
{
    for(let i = 0; i < item.length; i++)
    {    
        if(x == item[i].id)
        {
            let found = item[i];
            return found;
        }
    }
    return null;
}

export {
    getTextById,
    getItemById
}