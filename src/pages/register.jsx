import { Formik } from 'formik'
import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import * as Yup from "yup";
import { apis } from '../services';


const Register = () => {
    const onSubmit = async (_data) => {
        try {
            const { data } = await apis.register(_data);
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Container className="pt-5">
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    linkedInUrl: "",
                    coverLetter: undefined
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required(),
                    email: Yup.string().email().required(),
                    password: Yup.string().required().min(8),
                    linkedInUrl: Yup.string().required(),
                })}
                onSubmit={onSubmit}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                    <>
                        {JSON.stringify(errors)}
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                isInvalid={touched.name && errors.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="name"
                                placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                isInvalid={touched.email && errors.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="email"
                                name="email"
                                placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                isInvalid={touched.password && errors.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="password"
                                type="password"
                                placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Linkedin profile url</Form.Label>
                            <Form.Control
                                isInvalid={touched.linkedInUrl && errors.linkedInUrl}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="linkedInUrl"
                                placeholder="Linked in profile url" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </>
                )}
            </Formik>
        </Container>
    )
}

export default Register