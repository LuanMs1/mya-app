import { FormField, MyForm } from './components/formComponent';
import './styles/global.css'
function App() {
  return (
    <>
      <MyForm>  
        <FormField label = 'Email: ' desc = 'email'></FormField>
        <FormField label = 'Nome: ' desc = 'name'></FormField>
        <FormField label = 'Senha: 'desc = 'pass' type = 'password'></FormField>
      </MyForm>
    </>
  );
}

export default App;
