
import * as yup from 'yup'
export const schemaPro  = yup.object().shape({
    name : yup.string().required(),
    price : yup.number().positive().integer(),
    quantity : yup.number().positive().integer(),
    description : yup.string().required(),
    categoryId : yup.string().required(),
    image: yup.mixed().required(),
    trademarkId : yup.string().required()

})
export const updatepro = yup.object().shape({
    name : yup.string().required(),
    price : yup.number().positive().integer(),
    quantity : yup.number().positive().integer(),
    description : yup.string().required(),
    categoryId : yup.string(),
    image: yup.mixed(),
    trademarkId : yup.string()
})
