import React from 'react'
import * as  yup from "yup"

export const schemaCate = yup.object().shape({
    name : yup.string().required()
})
