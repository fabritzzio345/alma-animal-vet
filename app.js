const slotLabels = document.querySelectorAll('.slot');
const bookingButton = document.querySelector('[data-open-booking]');
const bookingNote = document.querySelector('.booking-note');
const appointmentForm = document.querySelector('#cita-form');
const clinicWhatsApp = '51934181908';

slotLabels.forEach((label) => {
  label.addEventListener('change', () => {
    slotLabels.forEach((item) => item.classList.toggle('slot--selected', item === label));
    bookingNote.textContent = `${label.textContent.trim()} seleccionado. La clínica confirmará la disponibilidad.`;
  });
});

bookingButton?.addEventListener('click', () => {
  const selected = document.querySelector('input[name="slot"]:checked');
  bookingButton.disabled = true;
  bookingButton.querySelector('span').textContent = 'Preparando…';

  window.setTimeout(() => {
    bookingButton.disabled = false;
    bookingButton.querySelector('span').textContent = 'Continuar reserva';
    bookingNote.textContent = `${selected?.value ?? 'Horario'} guardado. Completa tus datos en la siguiente sección.`;
    document.querySelector('#cita')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.querySelector('#cita-form input')?.focus({ preventScroll: true });
  }, 500);
});

const dateInput = document.querySelector('input[type="date"]');
if (dateInput) {
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  dateInput.min = localToday;
}

appointmentForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const requiredFields = [...appointmentForm.querySelectorAll('[required]')];
  const errorMessage = appointmentForm.querySelector('.form-error');
  let firstInvalid = null;

  requiredFields.forEach((field) => {
    const invalid = !field.checkValidity();
    field.setAttribute('aria-invalid', String(invalid));
    if (invalid && !firstInvalid) firstInvalid = field;
  });

  if (firstInvalid) {
    errorMessage.hidden = false;
    firstInvalid.focus();
    return;
  }

  errorMessage.hidden = true;
  const data = new FormData(appointmentForm);
  const selectedSlot = document.querySelector('input[name="slot"]:checked')?.value;
  const lines = [
    'Hola, Alma Animal. Quisiera solicitar una cita:',
    '',
    `Persona: ${data.get('nombre')}`,
    `Mascota: ${data.get('mascota')}`,
    `Especie: ${data.get('especie')}`,
    `Servicio: ${data.get('servicio')}`,
    `Fecha preferida: ${data.get('fecha')}`,
    selectedSlot ? `Horario visto en la web: ${selectedSlot}` : '',
    `Teléfono de contacto: ${data.get('telefono')}`,
    data.get('detalle') ? `Detalle: ${data.get('detalle')}` : '',
    '',
    'Entiendo que la clínica confirmará la disponibilidad.'
  ].filter(Boolean);

  const submitButton = appointmentForm.querySelector('.form-submit');
  submitButton.disabled = true;
  submitButton.querySelector('span').textContent = 'Abriendo WhatsApp…';
  const whatsappUrl = `https://wa.me/${clinicWhatsApp}?text=${encodeURIComponent(lines.join('\n'))}`;

  const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  submitButton.disabled = false;
  submitButton.querySelector('span').textContent = 'Continuar por WhatsApp';
  if (!whatsappWindow) {
    errorMessage.hidden = false;
    errorMessage.textContent = 'No pudimos abrir WhatsApp. Habilita las ventanas emergentes o usa el enlace 934 181 908 de esta página.';
  }
});

appointmentForm?.addEventListener('input', (event) => {
  if (event.target.matches('[required]') && event.target.value.trim()) {
    event.target.removeAttribute('aria-invalid');
  }
});

