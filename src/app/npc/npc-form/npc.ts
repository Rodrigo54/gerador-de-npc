export interface Npc {
  nome: string,
  tipo: string,
  alinhamento: string,
  ca: number,
  pv: string,
  deslocamento: string,
  habilidades: habilidades,
  sentidos: string,
  idiomas: string,
  nd: string,
  habilidadesEspeciais: acoes[],
  acoes: acoes[]
}

export interface habilidades {
  for: number,
  des: number,
  con: number,
  int: number,
  sab: number,
  car: number
}

export interface acoes {
  nome: string,
  descricao: string
}
