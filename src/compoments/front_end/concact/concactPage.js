import React from "react"
import * as yup from "yup"
import {yupResolver}  from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import concatApi from "../../../api/concactapi"
import swal from "sweetalert"
import {useHistory}  from "react-router-dom"
const ConcactPage = () => {
    const history = useHistory()
    const newConcact = yup.object().shape({
        name:yup.string().required().min(10).max(100),
        email: yup.string().email().required(),
        contentfeeback:yup.string().required().max(500)
    })
    const {register, handleSubmit, formState : {error}  }= useForm({
        resolver :  yupResolver(newConcact)
    })
    const addConcact = async  (data)=>{
        try {
            const {data:phanhoi} = await concatApi.add(data)
            console.log(phanhoi); 
            const willDelete = await swal({
                title: "Cảm ơn bạn đã góp ý kiến",
                text: "Chúng tôi  luôn luôn lắng nghe ý kiến ",
                icon: "success",
              });
              if (willDelete) {
                history.push('/')
              }
        } catch (error) {
            console.log(data.responsve.error);
        }
    }
    return (
        <div className="container tw-flex  tw-w-full tw-mt-2" >
            <div className="map tw-w-[60%]" >  
                 <iframe className="tw-w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.043149513888!2d105.79434681447535!3d20.99090738601882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acb85e3154ed%3A0xcc79cccff4440e76!2zMTgyIEzGsMahbmcgVGjhur8gVmluaCwgVGhhbmggWHXDom4gQuG6r2MsIFRoYW5oIFh1w6JuLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1624073933056!5m2!1svi!2s"
             width="600" height="450"  allowfullscreen="" loading="lazy"></iframe></div>
             <div  className="from-concact tw-ml-5 tw-w-[40%]">   
                 <form onSubmit={handleSubmit(addConcact)} role="form">
                     <legend className="tw-text-center tw-capitalize tw-font-base">Phản hồi </legend>
                 
                     <div className="form-group tw-my-2">
                         <label for="" className="tw-text-base  tw-font-base  tw-">Họ và Tên </label>
                         <input type="text" {...register('name')} className="form-control tw-ouline-none" id="" placeholder="Full Name"/>
                     </div>                 
                     <div className="form-group tw-my-2">
                         <label for="">Email</label>
                         <input type="text" {...register('email')}  className="form-control tw-ouline-none" id="" placeholder="Email "/>
                     </div>                 
                     <div className="form-group tw-my-2">
                         <label for="">Nội Dung </label>
                         <textarea className="tw-h-[40em] tw-text-lg tw-border-none" {...register('contentfeeback',{required: true})}  type="text" className="form-control tw-ouline-none" id="" placeholder=""> </textarea>
                     </div>  
                     
                    <div className='tw-w-full tw-text-center  tw-mt-5'>
                        <button type="submit" className="btn btn-primary tw-text-center tw-capitalize">Phản hồi</button> 
                     </div>               
                 </form>
                   </div>
        </div>
    )
}
export default ConcactPage