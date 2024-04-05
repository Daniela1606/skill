
import React, { useEffect } from 'react';
import {
    Form,
    Input,
} from 'antd';
import { useForm } from 'antd/es/form/Form';
import TextArea from 'antd/es/input/TextArea';

const ReportInvalidDataForm = ({ initialValues, onFormInstanceReady }) => {
    const [form] = useForm()

    useEffect(() => {
        onFormInstanceReady(form)
    }, [])

    useEffect(() => {
        form.setFieldsValue(initialValues)
    }, [initialValues])

    return (

    <Form
        id='form'
        layout='vertical'
        form={form}
        variant="filled"
        className='form'
    >
        <Form.Item
            label='Let us know what is incorrect'
            name='message'
        >
            <TextArea
                rows={14}
            />
        </Form.Item>

    </Form>
    );
};

export default ReportInvalidDataForm;