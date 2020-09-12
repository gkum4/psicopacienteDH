function iniciaModal(modalID){
  const modal = document.getElementById(modalID);
  modal.classList.add('mostrar');
  modal.addEventListener('click', (e) =>{
      if(e.target.id == modalID || e.target.className == 'closer'){
        modal.classList.remove('mostrar');
      }
  });
}
const login = document.querySelector('.btn-Login');

login.addEventListener('click', () => {
  iniciaModal('modal-login');
});
