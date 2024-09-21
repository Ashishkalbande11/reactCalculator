import React,{useState} from 'react'


const CompA = () => {

    const[num1, setNum1] = useState("");
    const[num2, setNum2] = useState("");
    const [result, setResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');


    const validateInputs = () => {
        if (!num1 || !num2) {
            setErrorMessage('Both fields are required.');
            setSuccessMessage('');
            return false;
        }
        if (isNaN(num1) || isNaN(num2)) {
            setErrorMessage('Please enter valid numbers.');
            setSuccessMessage('');
            return false;
        }
        return true;
    };
    const handleAddition = () => {
        if (!validateInputs()) return;
        const sum = parseFloat(num1) + parseFloat(num2);
        setResult(sum);
        setSuccessMessage('Success');
        setErrorMessage('');
    };

    const handleSubtraction = () => {
        if (!validateInputs()) return;
        const difference = parseFloat(num1) - parseFloat(num2);
        setResult(difference);
        setSuccessMessage('Success');
        setErrorMessage('');
    };

    const handleMultiplication = () => {
        if (!validateInputs()) return;
        const product = parseFloat(num1) * parseFloat(num2);
        setResult(product);
        setSuccessMessage('Success');
        setErrorMessage('');
    };

    const handleDivision = () => {
        if (!validateInputs()) return;
        if (parseFloat(num2) === 0) {
            setErrorMessage('Cannot divide by zero.');
            setSuccessMessage('');
            return;
        }
        const quotient = parseFloat(num1) / parseFloat(num2);
        setResult(quotient);
        setSuccessMessage('Success');
        setErrorMessage('');
    };

  return (
    <div style={
        {
            padding:'20px',
            display:'flex',
            flexDirection: 'column',
            width: "250px",
            alignItems:'center',
            margin:"auto",
            marginTop:'100px',
            border:'2px solid black',
            borderRadius:'10px'
            
        }
    }>
        <h1>React Calculator</h1>

        <input 
            style={{
                height:'30px',
                fontSize:'20px'
            }}
            type="text" 
            value={num1} 
            onChange={(e) =>{
                setNum1(e.target.value)
            }} 
            placeholder='Num 1' /> <br/><br/>
        <input 
        style={{
            height:'30px',
            fontSize:'20px'
        }}
            type="text" 
            value={num2}
            onChange={(e)=>{
                setNum2(e.target.value)
            }} 
            placeholder='Num 2' />

            <div>
                <button style={{padding:'5px 8px', fontSize:'20px', margin:'10px'}} onClick={handleAddition}>+</button>
                <button style={{padding:'5px 8px', fontSize:'20px',margin:'10px'}} onClick={handleSubtraction}>-</button>
                <button style={{padding:'5px 8px', fontSize:'20px',margin:'10px'}} onClick={handleMultiplication}>*</button>
                <button style={{padding:'5px 8px', fontSize:'20px',margin:'10px'}} onClick={handleDivision}>/</button>
            </div>
            {errorMessage && <p style={{ color: 'red' ,fontSize:'26px'}}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green',fontSize:'26px'}}>{successMessage}</p>}
            {result !== null && <h3>Result: {result}</h3>}
       
    </div>
  )
}

export default CompA