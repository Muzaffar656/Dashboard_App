import React,{useState,useEffect} from 'react'

const Card = ({name,email,body}) => {
    
    const [isEditing,setIsEditing] = useState(false)
    const [bodye, setBodye] = useState(body)
    
    const handleEdit = (e)=>{
        setBodye(e.target.value)
    }
const handelSave = ()=>{
    setIsEditing(false)
}
const change = ()=>{
    setIsEditing(true)
}

  return (
    <div className='card'>
        <p><span>Name : </span>{name}</p>
        <p><span>Email : </span>{email}</p>
        <p><span>Comment : </span>{isEditing ? (
            <div>

            <textarea    rows="4" // Set the number of visible rows
      style={{
        width: '100%',
        padding: '10px',
        boxSizing: 'border-box', // Include padding in width calculation
      }}
      placeholder="Type your text here..." type="text" value={bodye} onChange={handleEdit}/>
            </div>
        ):bodye}</p>
        <div className='buttons'>

        <button style={{background:'red'}} onClick={handelSave}>Save</button>
        <button onClick={change}>Edit</button>
        </div>

    </div>
  )
}

export default Card