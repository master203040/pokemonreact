
import React from 'react'
import {useForm} from 'react-hook-form'

const Formulario = () => {

    const {register, formState:{errors} , watch,handleSubmit}=useForm()

    const onSubmit=(data)=>{
        console.log(data)
    }

  return (
    <div>
        <h1>Formulario</h1>
        {/* <p>
             Nombre:{watch('nombre')} //con watch puedes mostrar en tiempo real un dato deb estar en el State tambien 
        </p> */}
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre</label>
                <input type="text" {...register('nombre',{
                    required:true, //validar un campo 
                    maxLength:15 //minimo de caracteres 
                    
                })}/>
                {errors.nombre?.type==='required' && <p>el campo nombre es requerido</p>}
                {errors.nombre?.type==='maxLength' && <p>el campo nombre debe tener menos de 15 caracteres </p>}
            </div>
            <div>
                <label>Direccion</label>
                <input type="text" {...register('direccion')} />
            </div>
            <div>
                <label>Email</label>
                <input type="text" {...register('email',{
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p>el formato de email es incorrecto </p>}
            </div>
            <div>
                <label>Edad</label>
                <input type="text" {...register('edad')} />
            </div>
            <div>
                <label>Telefono</label>
                <input type="text" {...register('telefono')}  />
            </div>
            <div>
                <label>Pais</label>
                <select {...register('pais')}>
                    <option value="es">españa</option>
                    <option value="col">colombia</option>
                    <option value="mex">mexico</option>
                    <option value="peru">peru</option>
                </select>
            </div>
            <input type='submit' value='Enviar'/>
        </form>
    </div>
  )
}

export default Formulario