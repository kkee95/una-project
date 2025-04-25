import React from 'react'

export default function ImpactPanel({ impacto }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4 text-sm">
      <h2 className="text-2xl font-bold text-[#3D6B35]">Painel de Impacto</h2>
      <p><strong>Nome:</strong> {impacto.nome}</p>
      <p><strong>Nível:</strong> {impacto.nivel}</p>
      <p><strong>Resíduos reciclados:</strong> {impacto.residuosReciclados} kg</p>
      <p><strong>CO₂ evitado:</strong> {impacto.co2Evitado} kg</p>
      <p><strong>Quizzes completados:</strong> {impacto.quizzesCompletados}</p>
      <p><strong>Dias de participação:</strong> {impacto.diasParticipando}</p>
      <p><strong>Pessoas inspiradas:</strong> {impacto.pessoasInspiradas}</p>
      <p><strong>Última conquista:</strong> {impacto.ultimaConquista}</p>
      <p className="text-green-700 font-semibold">{impacto.proximoObjetivo}</p>
    </div>
  )
}
