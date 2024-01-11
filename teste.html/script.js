const handleSubmit = (event) => {
    event.preventDefault();
    
    const name = document.querySelector('input[name=nome]').value;
    const email = document.querySelector('input[name=email]').value;
    const sobrenome = document.querySelector('input[name=sobrenome]').value;

    fetch('https://api.sheetmonkey.io/form/4YmoR5EYr2xLxj3ec6VjHs', {

    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name, email, sobrenome }),
    }).then(()=> alert('dados salvos'));
    }
    
    document.querySelector('form').addEventListener('submit', handleSubmit);
    