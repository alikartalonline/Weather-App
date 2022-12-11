import React, { useState } from 'react'

function Header({ item, setItem }) {

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


    let searchLogo = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15" fill="none"><path d="M5.5 0C8.53757 0 11 2.46243 11 5.5C11 6.74832 10.5841 7.89951 9.88336 8.82257L14.0303 12.9697C14.3232 13.2626 14.3232 13.7374 14.0303 14.0303C13.7641 14.2966 13.3474 14.3208 13.0538 14.1029L12.9697 14.0303L8.82257 9.88336C7.89951 10.5841 6.74832 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0ZM5.5 1.5C3.29086 1.5 1.5 3.29086 1.5 5.5C1.5 7.70914 3.29086 9.5 5.5 9.5C7.70914 9.5 9.5 7.70914 9.5 5.5C9.5 3.29086 7.70914 1.5 5.5 1.5Z" fill="#357ad4"></path></svg>

    return (
        <header >
            <div className='container'>
                <div className='row'>
                    {/* <div className='col-12'></div> */}

                    {/* FORM START */}
                    <div className='col-12 d-flex justify-content-center '>
                        <form onSubmit={handleSubmit} className="d-flex formdiv mt-3">
                            <div className='form-floating input-group' >

                                <input
                                    className="form-control form-input"
                                    placeholder="Search Location"
                                    id="floatingInput"
                                    name='content'
                                    value={form.content}
                                    onChange={onChangeInput}
                                    autoFocus
                                />

                                <label htmlFor="floatingInput" className='text-primary'>Search </label>

                                <button
                                    className="btn btn-outline-dark searchLogoButton"
                                    type='submit' value="submit"
                                >
                                    {searchLogo}
                                </button>

                            </div>
                        </form>
                    </div>
                    {/* FORM FINISH */}

                </div>
            </div>
        </header>
    )
};

export default Header;