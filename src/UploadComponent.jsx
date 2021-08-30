import React, {useState, useEffect} from 'react';
import "./UploadComponent.scss";
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const UploadComponent = () => {

  
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout; 

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

useEffect (() => {
  fetch("https://api.imagga.com/v2/tags" ,
    {
      "method" : "GET",
      "query" : {
        "image_url": "http://playground.imagga.com/static/img/example_photo.jpg",
        "version": "2"
      },
      "headers" : {
        "accept": "application/json",
        "authorization": "Basic YWNjXzJkYzdkNzNjMmYwODliMToxYzQ3Yzg2ZDg0YjdmYjdjYjZjNzQ1NTQ1MmYwNTgzMQ==",
        // "apiKey": "acc_ea83bcc185cb5e2",
        // "apiSecret" : "10462eeb1036e35cf0bd3a5322aebbba",
      }
    }
  )
  .then(res => res.json())
  .then(response => console.log("Response :" , response));
}, [])

  return (
  <div>
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Editor</Menu.Item>
        <Menu.Item key="3">Sketch</Menu.Item>
        <Menu.Item key="4">Media Manip</Menu.Item>
        <Menu.Item key="5">Generator</Menu.Item>
      </Menu>
    </Header>
    <div className = "parent-upload">
  <div className = "header-text">
    <h1>Hastag Generator</h1>
  </div>  
  <div className = "button-all">
    <Button type="primary">Input</Button>
  </div>  
  <div className = "drag-drop">
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </Dragger>
 </div>
 <div className = "button-all">
  <Button type="primary" danger>
      Convert
    </Button>
  </div>  
  </div>
  </Layout>
  </div>
  )
};

export default UploadComponent;