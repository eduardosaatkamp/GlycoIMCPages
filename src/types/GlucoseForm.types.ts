// Definição da interface para as props do componente de formulário de glicose
export interface GlucoseFormProps {
  fetchGlucoseData: () => void;
  showGlucoseModal?: (nome: string, glicemiaCliente: number, obsGlicemia: string) => void;
}

// Definição da interface para o tipo 'Paciente'
export interface Paciente {
  id?: number;            // Campo opcional para o ID do paciente
  nome: string;           // Corrigido de 'name' para 'nome' para manter a consistência com outros componentes
  glicemiaCliente: number; // Corrigido de 'glucoseLevel' para 'glicemiaCliente' para manter a consistência
}
