import { useState } from 'react';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { useActions } from '../hooks/useActions';

export const RepositoriesList:React.FC = () => {
  const [term,setTerm] = useState('');
  const {searchRepositories}=useActions();
  const {data,error,loading} = useTypeSelector((state) => state.repositories);


  const onSubmit=(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
    setTerm('');
  }
    return (
        <div>
          <form onSubmit={onSubmit}>
            <input type="text" value={term} onChange={(e) =>setTerm(e.target.value)}/>
            <button >Search</button>
          </form>  
          {error&& <h3>{error}</h3>}
          {loading&&<h3>Loading......</h3>}
          {!error&&!loading&& 
          data.map((name)=><div key={name}>{name}</div>)
          }
        </div>
    )
}
