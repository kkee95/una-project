// Funções para cálculo de impacto do usuário

export function definirNivel(pontos) {
  if (pontos >= 2000) return "Eco-Guerreiro";
  if (pontos >= 1000) return "Guardião Verde";
  return "Aprendiz da Terra";
}

export function calcularCO2(residuosKg) {
  return (residuosKg * 0.3).toFixed(2);
}

export function definirUltimaConquista(missoes) {
  if (!missoes || missoes.length === 0) return "Nenhuma conquista ainda.";
  return missoes[missoes.length - 1];
}

export function definirProximoObjetivo(usuario) {
  const faltam = 10 - usuario.quizzesCompletados;
  if (faltam > 0) return `Finalize mais ${faltam} quizzes para subir de nível!`;
  return "Continue impactando o mundo!";
}

export function gerarPainelDeImpacto(usuario) {
  return {
    nome: usuario.nome,
    nivel: definirNivel(usuario.pontos),
    residuosReciclados: usuario.residuosReciclados,
    quizzesCompletados: usuario.quizzesCompletados,
    diasParticipando: usuario.diasParticipando,
    co2Evitado: calcularCO2(usuario.residuosReciclados),
    pessoasInspiradas: usuario.referidos,
    ultimaConquista: definirUltimaConquista(usuario.missoesConcluidas),
    proximoObjetivo: definirProximoObjetivo(usuario),
  }
}
