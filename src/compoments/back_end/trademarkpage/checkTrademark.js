import React from 'react'
import * as  yup from "yup"
const schemaTrademark = yup.object().shape({
    name : yup.string().required(),
    photo: yup.mixed().required()
})
export default schemaTrademark
