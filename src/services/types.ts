export type ValuesR = {
    name: string
    email: string
    password: string
    confirmPassword: string
  }

  export type ValuesL = {
    email: string
    password: string
  }

  export type ValuesCadCard = {
    title: string
    content: string
  }

  export type CadCardService = {
    token: string
    name: string
  }

  export type RegisterParams = {
    name: string;
    email: string;
    password: string;
  };
  
  export type RegisterResponse = {
    token: string;
  };



  export type Card = {
    _id: string
    title: string
    content: string
    column: string
  }
  
  export type Cards = Card[]