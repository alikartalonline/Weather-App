import React, { useState } from 'react'

function Header() {

    const [form, setForm] = useState({ content: "" })
    const [item, setItem] = useState("")


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


    // console.log("item verileri :", item)
    // console.log("form verileri :", form)
    // console.log("form.content verileri :", form.content)

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
                                placeholder="Search"
                                id="floatingInput"
                                name='content'
                                value={form.content}
                                onChange={onChangeInput}
                                autoFocus

                            />
                            <label htmlFor="floatingInput" className='text-primary'>Bir şeyler yaz</label>
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