import React, {Component} from 'react'
import './style.css'



class Welcome extends Component{


  state = {
    email : '',
    password : '',
    emailVla:'',
    passVla:''
  }
 
    validation(){

      if(!this.state.email>0 &&  !this.state.password>0){

        this.setState({emailVla : 'email and password invalid'})
       

      }else if(!this.state.email>0){
        

        this.setState({emailVla:'email  invalid'})

      }else if(!this.state.password>0){
        

        this.setState({passVla:'password  invalid'})

      }else{

        return true
      }
    }


  formSubmit = (e) =>{

    e.preventDefault()
    
    if(this.validation()){

      alert('Form submit done')
    }

  }

  render(){

    return(

      <div>   

         <strong >Login Panel  </strong><br></br>
         
          <form onSubmit={this.formSubmit} >
            <div className='form-control'>

               <label>Email:</label><br/>
               <input type='email' name='email' onChange={(e) =>(this.setState({email:e.target.value}))} /><br/>
               <p style={{color:'red'}}>{this.state.emailVla}</p>

               <label>Password:</label><br/>
               <input type='password' name='password' onChange={(e)=>(this.setState({password:e.target.value}))} /><br/>
               <p style={{color:'red'}}>{this.state.passVla}</p>

               <button type='submit'>Submit</button>
            </div>
          </form>      
      </div>
    )
  }

}

export default Welcome;

