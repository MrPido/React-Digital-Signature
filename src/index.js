import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SignaturePad from 'react-signature-canvas'
import styles from './style.module.css'

class App extends Component {
 
  state = {trimmedDataURL: null}
  sigPad = {}
  
  clear = () => {
    this.sigPad.clear()
  }
  trim = () => {
  var signature =this.setState({trimmedDataURL: this.sigPad.getTrimmedCanvas()
      .toDataURL('image/png')});

      

  }
  render () {
    let {trimmedDataURL} = this.state
    return (
<div className="container-fluid card d-flex align-content-center col-xl-10 col-sm-8 mb-xl-8 mb-4" style={{marginTop:"50px"}}>
<div className="card-header card-style p-0 position-relative mt-n4 mx-3 z-index-2 row d-flex justify-content-center">
  <div className="shadow-primary border-radius-lg pt-4 pb-3" style={{background:"#354052"}}>
    <h6 className="text-white text-capitalize ps-3 text-center ">REGISTER YOUR SIGNATURE (FILL IN THE BLANK ABOVE)</h6>
  </div></div>
  <div className="text-center">
  <div class="container" style={{height:"350px"}}>

    <SignaturePad canvasProps={{className: styles.sigPad}}
          ref={(ref) => { this.sigPad = ref }} />
    </div>
  </div>


    <div className="text-center mb-3 ">
        <button className="btn btn-danger mx-2 font-weight-bold fw-bold" onClick={this.clear}>
         CLEAR
        </button>
        <button className="btn btn-primary fw-bold" onClick={this.trim}>
         TRIM
        </button>
      </div>
      <div className='text-center mx-2'>
      
       {trimmedDataURL
        ? <img className={styles.sigImage}
          src={trimmedDataURL} 
          />
        : 
        null}
      </div>
      <div className='text-center mb-2'>
      <button className='btn btn-success fw-bold '>SAVE</button>
      </div>
</div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
