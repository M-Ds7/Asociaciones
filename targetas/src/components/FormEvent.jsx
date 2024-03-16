import React from 'react'

const FormEvent = () => {
    return (
        <>
            <form className='container'>
                <div className="mb-3">
                    <label htmlFor="Inputtitle" className="form-label">Titulo</label>
                    <input type="text" className="form-control" id="Inputtitle" placeholder='Ingrese el nombre del evento' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Inputnamecompany" className="form-label">Nombre de la asociación</label>
                    <input type="text" className="form-control" id="Inputnamecompany" placeholder='Ingrese el nombre de la veterinaria' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Inputtext" className="form-label">Descripción</label>
                    <input type="text" className="form-control" id="Inputtext" placeholder='Descripción del evento' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Inputaddress" className="form-label">Dirección</label>
                    <input type="text" className="form-control" id="Inputaddress" placeholder='Lugar en la cual llegara a acabo' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Inputtenomber" className="form-label">Numero de telefono</label>
                    <input type="number" className="form-control" id="Inputtenomber" placeholder='Ingrese el numero de telefono'required/>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    )
}

export default FormEvent
