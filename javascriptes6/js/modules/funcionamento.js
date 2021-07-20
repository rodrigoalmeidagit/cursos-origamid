export default function initFuncionamento() {
  const $funcionamento = document.querySelector('[data-semana]');
  const weeksDay = $funcionamento.dataset.semana.split(',').map(Number);
  const hoursDay = $funcionamento.dataset.horario.split(',').map(Number);
  const nowDate = new Date();
  const weekDay = nowDate.getDay();
  const hourDay = nowDate.getHours();
  const isOpen = (hourDay >= hoursDay[0] && hourDay < hoursDay[1]);
  const isWeekDay = weeksDay.includes(weekDay);

  if (isOpen && isWeekDay) {
    $funcionamento.classList.remove('closed');
    $funcionamento.classList.add('open');
  }
  else {
    $funcionamento.classList.remove('open');
    $funcionamento.classList.add('closed');
  }
};



