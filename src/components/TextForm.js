import React ,{useState} from 'react'
//import PropTypes from 'prop-types'




export default function TextForm(props) {
    const  handleUpClick=()=>{
        // console.log("uppercase was clicked"+text); 
       let newText=text.toUpperCase();
       setText(newText); 
       props.showAlert("Converted to UpperCase","success");
    }
    const  handlelowClick=()=>{
        // console.log("uppercase was clicked"+text); 
       let newText=text.toLowerCase();
       setText(newText); 
       props.showAlert("Converted to LowerCase","success");
    }
   
    const handleClearClick=()=>{
      
        setText('');  // text updated
        props.showAlert("Text cleared","success");
    }
    const handleExtractEmail=()=>{
      
            const regex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;
            const matches = text.match(regex);
          setText( matches ? matches.join(", ") : "");
        //  console.log(toString(text.match(regex)));
        props.showAlert("Emails extracted","success");
          
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces have been removed","success");
    }

    const handleOnChange=(event)=>{
       
        setText(event.target.value);  // text updated
    }
    const [text,setText]=useState('');
   // text="new text" // wrong way to change the state
   // setText("new Text");//correct way
  return (
    <>
         <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
             <h1 >{props.heading} </h1>
             <div className="mb-3">

                {/*  onchange event ko listen karna is very necessary because it will give error as we are using valur=state , so we have to change state at some point which will not be possible without listening to event 
                so handleonchange mein event pass hoga that will update text using setText(event.target.value)   */}

             <textarea className="form-control"  value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(114 114 117)':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
             </div>
             <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
             <button className="btn btn-primary mx-2  " onClick={handlelowClick}>Convert to LowerCase</button>
             <button className="btn btn-primary mx-2  " onClick={handleClearClick}>Clear Text</button>
             <button className="btn btn-primary mx-2  " onClick={handleExtractEmail}>Extract Emails</button>
             <button className="btn btn-primary mx-2  " onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3 " style={{color:props.mode==='light'?'#1f1f20':'white'}}>
        <h1>
            Your text summary
        </h1>
        <p>  {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes to read</p>
   
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the box to Preview"}</p>
    </div>
    </>
  )
}



 
