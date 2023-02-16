import React,{useState} from 'react'

function AddActivity() {
  const [data, setdata] = useState([]);

  const handle=(e)=>{
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    e.target.reset();
    AddData()
   }
  const AddData=  async() => {
    try {
        await  fetch("http://127.0.0.1:4000/set", {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            }).then(response => response.json())
            .then(data=>(
              console.log(data)
            ));
    }
    catch (error) {
      console.log("Post submission failed");
      console.log(error.message);
    }
  }
  return (
    <div className='bg-dark text-white slider-area position-relative'>
            <div className='container '>
              <div className='container p-5'>
                <center><h1 className='frh mt-5 pt-5 wow fadeInUp'>Add Activity</h1></center>
                <form className='bg-dark fr1 wow fadeInUp' action="" onSubmit={handleSubmit}>
                    <label htmlFor="" >Enter Name</label>
                    <input type="text" onChange={handle} name='name' className='form-control' />

                    <label htmlFor="" >Description</label>
                    <textarea type="" name='desc' onChange={handle} className='form-control' />

                    <label htmlFor="" >Activity Type</label>
                    <select defaultValue="----Select----" name="activity" onChange={handle} id="" className='form-control'>
                      <option disabled >----Select----</option>
                      <option value="Run">Runing</option>
                      <option value="Walk">Walking</option>
                      <option value="Swim">Swimming</option>
                      <option value="Cycling">Cycling</option>
                      <option value="Hiking">Hiking</option>
                      <option value="Yoga">Yoga</option>
                    </select>

                    <label htmlFor="" >Time in Hours</label>
                    <input type="number" onChange={handle} name='time' className='form-control'/>

                    <label htmlFor="" >Date</label>
                    <input type="date" onChange={handle} name='date' className='form-control'/>
                    <br />
                    <center>
                        <button className='btn border-btn' > Add</button>
                    </center>
                </form>
                </div>
            </div>
    </div>
  )
}

export default AddActivity