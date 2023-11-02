import {ResponsivePage} from "../components/ResponsivePage";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import React, { Component, useEffect, useState } from 'react';
import Link from "next/link";
import {useCatalogs} from "../hooks/catalog/useCatalogs";
import { useConvalida } from "../hooks/convalida/useConvalida";
import { useRouter } from "next/router";
import { Convalida } from "../types/Convalida";

const VerConvalida = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Convalida>();
    const { createConvalida } = useConvalida();

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
        
    //     if (file) {
    //       // Crear una URL válida para la imagen seleccionada
    //       const imageUrl = URL.createObjectURL(file);
    //       setFoto_certificado_url(imageUrl);
    //     } else {
    //       // Limpiar la URL si no se selecciona un archivo
    //       setFoto_certificado_url('');
    //     }
    //   };

    const handleOnSubmit = async (data: any) => {
        const convalida = {
            ...data,
        };

        const response = await createConvalida(convalida);

        if(response){
            await alert("¡Inscripción a la conferencia exitosa!");
        }
    };

    return (
        <ResponsivePage>
            <div className="container mt-3 mb-4 header-mis-conferencias">
                <h2>Convalida conferencia</h2>
                <Link href="/mis-conferencias"><img src="\icon-forward.svg" alt="search" /></Link>
            </div>
            <div className='container contenido-convalida-conferencias'>
            <Form className="envio-solicitud-form" onSubmit={handleSubmit(handleOnSubmit)}>
                <Form.Group className="inputs">
                    <Form.Label>Conferencia</Form.Label>
                    <Form.Control type="text" {...register("tema_conferencia")}/>
                    {errors.tema_conferencia && (
                                <Form.Text className='text-danger'>
                                    {errors.tema_conferencia.message}
                                </Form.Text>
                            )}
                </Form.Group>
                <Form.Group className="inputs">
                    <Form.Label>Nombre de la institución o entidad organizadora</Form.Label>
                    <Form.Control type="text" {...register("nombre_institucion")}/>
                    {errors.nombre_institucion && (
                                <Form.Text className='text-danger'>
                                    {errors.nombre_institucion.message}
                                </Form.Text>
                            )}
                </Form.Group>
                <Form.Group className="inputs">
                    <Form.Label>Ubicación</Form.Label>
                    <Form.Control type="text" {...register("ubicacion")}/>
                    {errors.ubicacion && (
                                <Form.Text className='text-danger'>
                                    {errors.ubicacion.message}
                                </Form.Text>
                            )}
                </Form.Group>
                {/* <div className="inputs">
                    <p>Subir tu certificado</p>
                    <div className="file" >
                        <label htmlFor="archivo"><img src="/icon-download.png" alt="download" />Subir</label>
                        <h3 id="nombre"></h3>
                        <input type="file" id="archivo"/>
                    </div>
                </div> */}
                <Button type="submit" className="btnEnviar" onClick={handleOnSubmit}>ENVIAR</Button>
            </Form>
            </div>
        </ResponsivePage>
    );
}

export default VerConvalida;

