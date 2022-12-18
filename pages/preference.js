import React, { useState } from 'react'

function Preferences({ id }) {
  const data = localStorage.getItem('testObject');
  const [moviej, setMovie] = useState(JSON.parse(data));
  const set = new Set(id);
  const arr = Array.from(set);
  const res = moviej.map((el1) => ({
    id: el1.id,
    match: arr.some((el2) => el2 == el1.id),
  }))
  console.log(res);
  return (
    <>
      <div className='row'>
        <h6><b>Selected Question</b><br></br><hr></hr></h6><br></br>
        {res.map(ress => (

          <div className='col-md-1'>
            <span>{ress.id} &nbsp;</span>
            <span>{ress.match} &nbsp;</span>
            <input type='checkbox' value={ress.id} checked={ress.match == true ? 'checked' : ''} className="btn btn-danger btn-sm" />
          </div>
        ))
        }
      </div>
    </>
  );
}

export default Preferences;