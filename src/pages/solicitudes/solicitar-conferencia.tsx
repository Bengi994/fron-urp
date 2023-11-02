import { ResponsivePage } from "../../components/ResponsivePage";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Catalog } from "../../types/Catalog";
import { useState } from "react";
import { useCatalog } from "../../hooks/catalog/useCatalog";
import { useRouter } from 'next/router';

const NewCatalog = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Catalog>();
    const [isAvailable, setIsAvailable] = useState(false); // Cambiamos el valor por defecto a "no disponible"
    const [showModal, setShowModal] = useState(false);
    const { createCatalog } = useCatalog();
    const router = useRouter();

    const handleSwitch = () => setIsAvailable(!isAvailable);

    const handleOnSubmit = async (data: any) => {
        const catalog = {
            ...data,
        };
{/*@ts-ignore*/}
        const response = await createCatalog(catalog);

        if (response) {
            await router.push('/solicitudes');
        }
    };

    const handleOpenModal = () => setShowModal(true);

    const handleCloseModal = () => setShowModal(false);

    return (
        <ResponsivePage>
            <div className='container mt-3'>
                <div className='d-flex justify-content-between'>
                    <h1 className='mb-2'>Nueva solicitud</h1>
                </div>
                <hr />
                <div className=''>
                    <Form className="envio-solicitud-form" onSubmit={handleSubmit(handleOnSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Tema de la conferencia</Form.Label>
                            <Form.Control type="text" {...register("tema_conferencia")} />
                            {errors.tema_conferencia && (
                                <Form.Text className='text-danger'>
                                    {errors.tema_conferencia.message}
                                </Form.Text>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control type="text" {...register("descripcion")} />
                            {errors.descripcion && (
                                <Form.Text className='text-danger'>
                                    {errors.descripcion.message}
                                </Form.Text>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Expositor</Form.Label>
                            <Form.Control type="text" {...register("expositor")} />
                            {errors.expositor && (
                                <Form.Text className='text-danger'>
                                    {errors.expositor.message}
                                </Form.Text>
                            )}
                        </Form.Group>

                        
                        <Button type='submit' variant='success'>ENVIAR</Button>
                    </Form>
                </div>
            </div>
        </ResponsivePage>
    );
};

export default NewCatalog;
