import { useState } from "react";
import axios from "axios";

const JsonPlaceHolder = (_props: any) => {

    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState('');
    const [state, setState] = useState({
        id: 0,
      });

    const handleChange = (e: { target: { value: any; name: any; }; }) => {
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value
        });
      };
    
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        axios.get("https://jsonplaceholder.typicode.com/todos/"+ state.id).then((response) => {
          console.log(response.status, response.data);
          setTitle(response.data.title);
          if(response.data.completed === false)
          {
            setCompleted('Not Completed');
          }else{
            setCompleted('Completed');
          }
          
        
        }.catch(error => {
      return error;
    });
                                                                               );
      };

    return( <>
        <h3>Topic Details</h3>

        <div style={{margin : 40}}>
        <label htmlFor="Details">
              
              <input
                type="numeric"
                name="id"
                value={state.id}
                onChange={handleChange}
                required
              />
            </label>

        <button type="submit" onClick={handleSubmit}>Fetch Details</button>   
        </div>
       

        <h2>Title - {title}</h2>
        <h2>Completed - {completed}</h2>


      </>
      );

}
export default JsonPlaceHolder;
