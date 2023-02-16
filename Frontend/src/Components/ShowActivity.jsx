import React, { useState, useEffect } from "react";

function ShowActivity() {
  const [data, setdata] = useState([]);
  const [edit, setedit] = useState({})

  const handle=(e)=>{
    const { name, value } = e.target;
    setedit({ ...edit, [name]: value });
  }
  const getData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:4000/show");
      const json = await response.json();
      setdata(json);
      //console.log(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  const Update=  async() => {
    try {
        await  fetch("http://127.0.0.1:4000/update", {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(edit)
            }).then(response => response.json())
            .then(()=>{
              getData()
              setedit({})
            }
            );
    }
    catch (error) {
      console.log("Post submission failed");
      console.log(error.message);
    }
  }
  const Del=  async(id) => {
    try {
      const resp=window.confirm("Are you sure? You want to delete?")
      if(resp){
        const response = await fetch("http://127.0.0.1:4000/del/"+id ,{method: 'DELETE'});
        const json = await response.json();
        getData()
      }
    }
    catch (error) {
      console.log(error.message);
    }
  }
  const handleedit=(data)=>{
    setedit(data);
    console.log(data)
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-dark text-white  slider-area position-relative">
      <div className="container">
        <div className="pt-5">
          <center>
            <h1 className="frh mt-5 pt-5 wow fadeInUp">Show Activity</h1>
          </center>
          {data.length==0?(
            <div className="no d-flex justify-content-center">
                You Have No Activities 
            </div>
          ):(
            <div className="row">
            {data.map((item, i) => {
              return (
                <div className="col-lg-3 col-md-6 mb-3 wow fadeInUp" key={i}>
                  <div
                    className="card text-dark col-lg-12 flex-1"
                    style={{ width: "28rem" }}
                  >
                    <div className="card-body pl-1">
                      <h4 className="card-title">{item.name}</h4>
                      <h5 className="card-title">Decsription : {item.desc}</h5>
                      <h5 className="card-title">Activity : {item.activity}</h5>
                      <h5 className="card-title">Time : {item.time} Hours</h5>
                      <h5 className="card-title">Date : {item.date}</h5>
                      {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                      <div className="row d-flex justify-content-center">
                        <button
                          className="btn btn-default btn-rounded bw p-4"
                          data-toggle="modal"
                          data-target="#edit"
                          onClick={()=>handleedit(item)}
                        >
                          Edit
                        </button>
                        <button className="btn bw p-4" onClick={()=>Del(item._id)}>
                          Delete
                        </button>
                      </div>
                      {/* ------------------------------Modal Code------------------------------ */}
                      <div
                        className="modal fade"
                        id="edit"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="editlabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header text-center">
                              <h5 className="modal-title " id="editlabel">
                                Edit Your Data
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">×</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <form className="fr1">
                                <div className="form-group">
                                  <label className="col-form-label">Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="recipient-name"
                                    name="name"
                                    value={edit.name}
                                    onChange={handle}
                                  />
                                  <label className="col-form-label">
                                    Description
                                  </label>
                                  <textarea
                                    className="form-control"
                                    id="message-text"
                                    name="desc"
                                    value={edit.desc}
                                    onChange={handle}
                                  />
                                  
                                  <label className="col-form-label">Activity</label>
                                  <select name="activity" id="" className='form-control' defaultValue={edit.activity} onChange={handle}> 
                                    <option disabled selected>----Select----</option>
                                    <option value="Run">Runing</option>
                                    <option value="Walk">Walking</option>
                                    <option value="Swim">Swimming</option>
                                    <option value="Cycling">Cycling</option>
                                    <option value="Hiking">Hiking</option>
                                    <option value="Yoga">Yoga</option>
                                  </select>
                                  <label className="col-form-label">Time in Hours</label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="recipient-name"
                                    name="time"
                                    value={edit.time}
                                    onChange={handle}
                                  />
                                  <label className="col-form-label">Date</label>
                                  <input
                                    type="date"
                                    className="form-control"
                                    id="recipient-name"
                                    name="date"
                                    value={edit.date}
                                    onChange={handle}
                                  />
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-secondary" onClick={()=>Update()} data-dismiss="modal">
                                Update
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default ShowActivity;
