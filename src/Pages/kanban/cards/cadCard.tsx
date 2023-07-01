import { useState, ChangeEvent, MouseEvent } from "react";
import { NewCard } from "./styledCards"
import { criar } from "./cardImg"
import cardService from "../../../services/apiPostCard"
import { ValuesCadCard } from "../../../services/types";


export default function CadCard() {


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
          setValues({ title: "", content: "" })
          
        } catch (error) {}
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

