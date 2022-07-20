const element = document.querySelector('.form__select');
const choices = new Choices(element, {
  searchEnabled:false,
  itemSelectText:"",
  placeholder: true
});