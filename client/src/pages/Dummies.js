import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Dummies = () => {
  //declares variable dummies, setDummies modifies dummies and useState specifies the default value.
  const [dummies, setDummies] = useState([])

  //mounts component
  useEffect(()=>{
    //calls function
    getDummies()
  },[])

  //function to get data and then set equal to setDummies.
  const getDummies = async () => {
    // try will go through code if it can and if not it will go to the catch.
    try{
      let res = await axios.get(`/api/dummies`)
      setDummies(res.data)
      //catch happens if try fails we put alerts in here so that we can find the issue and fix it.
    }catch (err){
      alert('err check console')
      console.log(err)
    }
  }
  
  //render array so that i don't have to check console to see if its working.
  //data we got from getDummies rendered as jsx.
  const renderDummies = () => {
    return dummies.map(dummy=> {
      return (
        //each child in a list needs to have a unique key.
        <div key={dummy.id}>
          <h4>{dummy.name}</h4>
        </div>
      )
    })
  }

  //this is what shows up on the page.
  return(
    <div style={{textAlign: 'center'}}>
      <h1>Dummies</h1>
      {renderDummies()}
    </div>
  )
}

export default Dummies