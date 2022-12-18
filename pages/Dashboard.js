import React, { useState } from 'react'
import Preferences from './preference';

function Movies() {
    const data = localStorage.getItem('testObject');
    const [movie, setMovie] = useState(JSON.parse(data));
    const [val, setName] = useState();
    const checkedArr = [];
    let value;
    var vals = '';
    function handleChange(id) {
        vals = id.target.value;
        const checkeds = document.getElementsByTagName('input');
        for (let i = 0; i < checkeds.length; i++) {
            if (checkeds[i].checked) {
                checkedArr.push(checkeds[i].value);
            }
        }
        value = checkedArr;
        setName(value);
    }

    const css = `
            .my-element {
                max-width: 390px;
            }
        `
    return (
        <>
            <style>{css}</style>
            <div className='col-md-6'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Qid</th>
                            <th>Questions</th>
                            <th>Options</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movie.map(movie => (
                                <tr>
                                    <td>{movie.id}</td>
                                    <td className=''>{movie.title} <br></br></td>
                                    <br></br><span>A &nbsp;</span>
                                    <input type="radio" name={movie.id} value={movie.id} onClick={handleChange} />
                                    <br></br><span>B &nbsp;</span>
                                    <input type="radio" name={movie.id} value={movie.id} onClick={handleChange} />
                                    <br></br><span>C &nbsp;</span>
                                    <input type="radio" name={movie.id} value={movie.id} onClick={handleChange} />
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='col-md-6'>
                <Preferences id={val} />
            </div>
        </>
    );
}

export default Movies;