import React, { useEffect, useState } from 'react';
import LoadingButton from '../../components/Loading/LoadingButton/LoadingButton';
import { useSelector, useDispatch } from 'react-redux';
import ErrorFetch from '../../components/Errors/ErrorFetch/ErrorFetch';
import { Redirect } from 'react-router';
import { fetchAddItemServices, fetchItemServices } from '../../actions/actions';


function EditItemPage(props) {
    const { match } = props;
    // const { item, loading, error } = useSelector( state => state.serviceAdd);
    // const dispatch = useDispatch();
    // const [ value, setValue ] = useState({...item});
    // const [ isRedirect, setRedirect ] = useState(false);
    console.log(match.params.id)

    // useEffect(() => {
    //     dispatch(fetchItemServices(match.params.id));
    // }, [])

    // const handleChange = (e) => {
    //     const name = e.target.name;
    //     const val = e.target.value;
    //     setValue( prev => ({...prev, [name]: val}));
    // }

    // const handlerSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(fetchAddItemServices(value, () => setRedirect(!isRedirect)));
    // }


    return (
        <div className='editing-page'>
            {/* {error && <ErrorFetch error={error}/>}
            <form className='form-editing' onSubmit={handlerSubmit}>
                <div className="editing-block edit-name">
                    <label className='input-label' htmlFor="name"></label>
                    <input type="text" name='name' id='name' onChange={handleChange} value={value.name}/>
                </div>
                <div className="editing-block edit-price">
                    <label className='input-label' htmlFor="price"></label>
                    <input type="number" name='price' id='price' onChange={handleChange} value={value.price}/>
                </div>
                <div className="editing-block edit-content">
                    <label className='input-label' htmlFor="content"></label>
                    <input type="text" name='content' id='content' onChange={handleChange} value={value.content}/>
                </div>
                <div className="editing-block">
                    <button type='button' className="button">Отмена</button>
                    {!loading && <button className="button-submit">Сохранить</button>}
                    {loading && <div className="button-loading"><LoadingButton /></div>}
                </div>
            </form>
            {isRedirect && <Redirect to='/' />} */}
        </div>
    )
}

export default EditItemPage

