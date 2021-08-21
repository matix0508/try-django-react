import React from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import csrftoken from "./getCookie";
import {useForm} from "react-hook-form";

export default function LoginForm(props) {
    const {handleSubmit, register, errors} = useForm();
    const onSubmit = values => {
        console.log(values);
        const qs = require('qs');
        axios({
            method: 'post',
            url: '/api/validate_user',
            data: qs.stringify(values),
            headers: {'X-CSRFToken': csrftoken}
        })
            .then(function (response) {
                console.log(response);
                window.location.reload()
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control {...register("username", {required: "Required"})} type="text"
                              placeholder="Enter username"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control {...register("password", {validate: value => value !== "admin" || "Nice Try xd"})}
                              type="password" placeholder="Password"/>
            </Form.Group>
            <Button type={"submit"}>
                Submit
            </Button>
        </Form>
    )
}

