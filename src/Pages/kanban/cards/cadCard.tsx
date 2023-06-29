import { useState, ChangeEvent, MouseEvent } from "react";
import { NewCard } from "./styledCards"
import { criar } from "./cardImg"
import cardService from "../../../services/apiCadcard"
import { ValuesCadCard } from "../../../services/types";


export function CadCard() {


    const [values, setValues] = useState<ValuesCadCard>({
        title: "",
        content: "",

    });

    
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      };

    const handleRegisterCard = async () => {
        try {
          const result = await cardService(values.title, values.content);
          console.log("Dados gravados na API:", result);
          
        } catch (error) {
          console.error("Erro ao gravar dados na API:", error);
          
        }
      };
      




        return (

            <NewCard>
                <input
                    type='text'
                    placeholder='Título'
                    name='title'
                    className='title'
                    value={values.title}
                    onChange={handleChange} />

                <textarea
                    placeholder='Conteúdo'
                    name='content'
                    className='content'
                    rows={7}
                    cols={35}
                    value={values.content}
                    onChange={handleChange}
                />  
                          
                
        <img onClick={handleRegisterCard} src={criar} alt="Criar" />
    

            </NewCard>


        )
    }

