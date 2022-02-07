import React from 'react';
import { Form, Input, Button,  Select } from 'antd';
import './create.css';
import Avatarr from '../minis/Avatarr';
import Heading from '../minis/Heading';
function Create() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return <>
  <Heading title="Admin/Create Manager"/>
<div   className='create' >
    <Avatarr/>
<Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    className='fcreate'
    >
      <Form.Item
        label="Firstname"
        name="first name"
        rules={[
          {
            required: true,
            message: 'Please input your first name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Lastname"
        name="last name"
        rules={[
          {
            required: true,
            message: 'Please input your last name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm-Password"
        name="confirm-password"
        rules={[
          {
            required: true,
            message: 'Please confirm password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item label="Role"   >
        <Select >
          <Select.Option value="manager">manager</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Location" rules={[
          {
            required: true,
            message: 'Please input your location!',
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  </>;
}

export default Create;

