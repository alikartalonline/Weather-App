import React, { useState } from 'react'

function Header({item, setItem}) {

    const [form, setForm] = useState({ content: "" })



    // FORM
    const handleSubmit = (e) => {
        e.preventDefault()

        if (form.content === "" || form.content.length <= 2) {
            alert("Please do not leave the list blank!")
            return false;
        }
        setItem(form.content)
        setForm({ content: "" }) // input boş kalması için
    }

    // INPUT
    const onChangeInput = (e) => {
        setForm({ [e.target.name]: e.target.value })
    }

    return (
        <header >
            <div className='container'>
                <div className='row'>

                    <div className='col-4'></div>

                    {/* FORM START */}
                    <form onSubmit={handleSubmit} className="col-5 d-flex mt-3">

                        <div className='form-floating' >
                            <input
                                className="form-control form-input"
                                placeholder="Search Location"
                                id="floatingInput"
                                name='content'
                                value={form.content}
                                onChange={onChangeInput}
                                autoFocus

                            />
                            <label htmlFor="floatingInput" className='text-primary'>Search Location</label>
                        </div>

                        <div>
                            <button
                                type='submit'
                                value="submit"
                                className='btn btn-primary Search'>
                                Search
                            </button>
                        </div>
                    </form>
                    {/* FORM FINISH */}


                </div>
            </div>
        </header>
    )
};

export default Header;