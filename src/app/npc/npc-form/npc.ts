export interface Npc {
  nome: string;
  tipo: string;
  alinhamento: string;
  ca: number;
  pv: string;
  deslocamento: string;
  habilidades: Habilidades;
  sentidos: string;
  idiomas: string;
  nd: string;
  habilidadesEspeciais: Acoes[];
  acoes: Acoes[];
}

export interface Habilidades {
  for: number,
  des: number,
  con: number,
  int: number,
  sab: number,
  car: number
}

export interface Acoes {
  nome: string,
  descricao: string
}
