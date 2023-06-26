import { NewCard } from "./styleNC"
import { criar } from "./cardImg"

export function CadCard(){
    return(
        
            <NewCard>
                        <input type='text' placeholder='Título' name='title' className='title'/>
                        <textarea placeholder='Conteúdo' name='content' className='content' rows={7} cols={35}/>
                        <img  src={criar} />
            </NewCard>
               
        
    )
}

export function CardColumn(){
    return(
        <>
        </>
    )
}