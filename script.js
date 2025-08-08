document.addEventListener('mousemove', function (e) {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  document.body.appendChild(cursor);

  setTimeout(() => {
    cursor.remove();
  }, 500);
});

document.querySelectorAll('.event-popup').forEach(item => {
    const popupId = item.getAttribute('data-popup');
    const popup = document.getElementById(popupId);

    item.addEventListener('mousemove', (event) => {
        if (popup) {
            popup.style.display = 'block';
            popup.style.position = 'absolute';
            popup.style.top = `${event.pageY + 15}px`;
            popup.style.left = `${event.pageX + 15}px`;
        }
    });

    item.addEventListener('mouseleave', () => {
        if (popup) {
            popup.style.display = 'none';
        }
    });
});

function openModal(e, content) {
  const modal = document.getElementById('eventModal');
  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = content;
  modal.style.display = 'block';
  moveModal(e);
}

function moveModal(e) {
  const modal = document.getElementById('eventModal');
  modal.style.left = e.pageX + 15 + 'px';
  modal.style.top = e.pageY + 15 + 'px';
}

function closeModal() {
  document.getElementById('eventModal').style.display = 'none';
}
