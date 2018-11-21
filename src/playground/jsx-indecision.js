const app = {
  title: 'indecision App',
  subtitle: 'Put your life in the hands of computers!',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderDOM();
  }
};

const onClearOptions = () => {
  app.options = [];
  renderDOM();
};

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNumber];
  console.log(option);
};

const appRoot = document.getElementById('app');

const numbers = [55, 33, 77];

const renderDOM = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onClearOptions}>Remove All</button>
      <ol>
        {
          app.options.map((option, i) => <li key={i}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderDOM();
