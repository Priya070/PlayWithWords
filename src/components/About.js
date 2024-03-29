import React, {useState} from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState(
    {
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white'
        })
    const [btntext,setBtnText] = useState("Enable dark mode")
    
    const toggleStyle = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable dark mode")
        }
        else {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setBtnText('Enable light mode')
        }
    }
    return (
        <div className="container my-3" >
          <h1>About Us</h1>
          <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          about this
                      </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        In this app you can convert lowercase letter into uppercase and vice versa and you can replace word as well.
                      </div>
                  </div>
              </div>
          </div>
          <div className="container my-2">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{ btntext}</button>
            </div>
        
    </div>
  )
}
