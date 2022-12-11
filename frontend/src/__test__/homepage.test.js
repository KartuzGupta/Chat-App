import {render,screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent  from '@testing-library/user-event'
import Homepage from '../Pages/Homepage';
import Login from '../components/Authentication/Login';




test('Testing Rendering of Homepage correctly without crash', ()=>{

    render(<Homepage/>)

    const componentInput = screen.getByText('Sky Net',{exact: false});
    expect(componentInput).toBeInTheDocument()
});


describe('Testing Login Page', () =>{

// Testing Rendring of Login Page Working Correctly
test('Testing Login Page Working Correctly',() =>{

    render(<Login/>)

    const  componentCheck = screen.getByTestId('login-component')
    expect(componentCheck).toBeInTheDocument();
    
})

// Testing Rendring of Email Field
   test('Testing Email Field',async()=>{
      
    render(<Login/>)
    const renderInputField = screen.getByPlaceholderText('Enter email')
    expect(renderInputField).toBeInTheDocument();

   })

// Testing Email FIeld Working Correctly or not 
test('pass valid email to test email input field', () => {
    render(<Login />);
 
    const inputEl = screen.getByPlaceholderText('Enter email')
    userEvent.type(inputEl, "test@mail.com");
 
    expect(screen.getByPlaceholderText('Enter email')).toHaveValue("test@mail.com");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });

  // Testing Rendring of Password Field
  test('Testing Email Field',async()=>{
      
    render(<Login/>)
    const renderInputField = screen.getByPlaceholderText('Enter password')
    expect(renderInputField).toBeInTheDocument();

   })


  // Testing Password Field Working Correctly or not  
test('pass valid password to test password input field', () => {
    render(<Login />);
 
    const inputEl = screen.getByPlaceholderText('Enter password')
    userEvent.type(inputEl, "Test@123$");
 
    expect(screen.getByPlaceholderText('Enter password')).toHaveValue("Test@123$");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });
})