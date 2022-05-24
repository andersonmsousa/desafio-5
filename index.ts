// 1

const primeiroNome: string = "Anderson";
const diaDoMes: number = 24;
const hojeFezSol: boolean = false;

// 2

type Cachorrro = {
    nome: string
    idade: number
    raça: string
    grandePorte: boolean
    donos: string
  }
  
  interface Animais {
    tipo: string
    bipede: boolean
    asas: boolean 
    região: string
  }

// 3

// Omit

type dadosCachorro = Omit<Cachorrro, "idade">

function cadastrarCachorro(): dadosCachorro {
    return {
        nome: 'Bruce',
        raça: 'Chow-Chow',
        grandePorte: false,
        donos: 'Anderson'
    }
}

// Partial 

type tartaruga = Partial<Animais> 

function descricaoTartaruga(): tartaruga {
    return {
        bipede: false,
        asas: false
    }
}

// Optional 

type morcego = {
    tipo?: string,
    bipede?: boolean,
    asas?: boolean ,
    região?: string
}

function descricaoMorcego(): morcego {
    return {
        asas: true
    }
}