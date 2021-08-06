import React, { useState, useEffect } from 'react'
import * as  yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form"
import { getUser } from '../../localStorage/user';
import comentApi from '../../../api/commentapi';
import { useHistory } from 'react-router-dom'
const CommentPage = ({ id }) => {
    const history = useHistory()
    const coment = yup.object().shape({
        contenComment: yup.string().required().max(200)
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(coment)
    })
    const [user, setUser] = useState(false)
    useEffect(() => {
        getUser() && setUser(true)
    }, [])
    const action = getUser();
    const addComment = async (data) => {
        const newComent = {
            contenComment: data.contenComment,
            productId: id,
            adminId: action.user._id
        }
        try {
            const { data: comment } = await comentApi.add(newComent)
            if(comment){
                history.push(`/product/${id}`)
            }
        } catch (error) {
            console.error(data.response.error)
        }
    }
    return (

        <form action className="tw-relative tw-mt-10" onSubmit={handleSubmit(addComment)}  >
            <input type="text" {...register('contenComment', { required: true })} placeholder="bình luận"
                className={`${errors.contenComment ? "tw-border-red-600" : ""} tw-border-2 tw-border-gray-600 tw-p-1 tw-text-xl tw-w-full tw-rounded-xl tw-outline-none`} />
          {user && (
                <button type="submit" className="tw-absolute tw-right-0.5 tw--top-0 tw-bottom-0.5 tw-text-3xl tw-px-3 tw-rounded-xl"> <b className={`fa fa-commenting`}> </b> </button>

            )}
        </form >



    )
}

export default CommentPage
