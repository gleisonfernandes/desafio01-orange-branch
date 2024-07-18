import React from 'react';

const FormatDate = (dateString: string): string => {
  const date = new Date(dateString); // Cria um objeto Date a partir da string

  // Array com nomes abreviados dos meses
  const months = [
    'Jan', 'Fev', 'Mar', 'Abr',
    'Mai', 'Jun', 'Jul', 'Ago',
    'Set', 'Out', 'Nov', 'Dez'
  ];

  // Extrai o mês e o dia
  const month = months[date.getUTCMonth()];
  const day = date.getUTCDate();

  // Retorna a data formatada
  return `${month} ${day}`;
};

export default FormatDate;