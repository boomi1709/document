import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import { Breadcrumb, Layout, Menu } from 'antd';
  import React, { useState } from 'react';
  import { Card } from 'antd';
  import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

import Image1 from './image/Women-buying.jpg';
import Image2 from './image/Selection men.jpg';
import Image3 from './image/All in 1 mens.webp';
import Image4 from './image/All in 1 mens.webp';
import Image5 from './image/Men casual-look.jpeg';
import Image6 from './image/collection.jpg';

import { Image } from 'antd';
import { Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
// import { Button } from 'antd';
// import React, { useState } from 'react';

  
  const { Header, Content, Footer, Sider } = Layout;
  const { Meta } = Card;
  
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  
  const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];
  
  const Task4 = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [visible, setVisible] = useState(false);
    
    return (
      <Layout
        style={{
          
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          />
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
         <Row>
         <Col>
    <h2 className='text-center pt-2 mt-2'>E-TAIL SX</h2>
    <p className='pt-4 p-4 fs-5'>
    In the fashion world, “style” is usually shorthand for “personal style,”
     or the way an individual expresses themselves through aesthetic choices
      such as their clothing, accessories hairstyle, and the way they put an outfit together.       
    </p>
    
    <Button variant="dark" className='px-5 ms-4 fs-5 text-white'>CLICK</Button>{' '}
    </Col>


    <Col className='pt-4'>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1} width={330} height={330}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2} width={330} height={330}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3} width={330} height={330}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>  

    <p className='pt-4 p-4 fs-5'>
    In the fashion world, “style” is usually shorthand for “personal style,”
     or the way an individual expresses themselves through aesthetic choices
      such as their clothing, accessories hairstyle, and the way they put an outfit together. 
      In the fashion world, “style” is usually shorthand for “personal style,”
     or the way an individual expresses themselves through aesthetic choices
      such as their clothing, accessories hairstyle, and the way they put an outfit together.       
    </p>


  
  
  <Card className='m-4 h-50'
    hoverable
    style={{ width: 280 }}
    cover={<img src={Image6} />}
  >
    <Meta title="E-TAil SX" description="LANCH ON 05-08-2022" />
  </Card>
  
  <Image className='h-50'
        preview={{
          visible: false,
        }}
        width={200}
        src={Image5}
        onClick={() => setVisible(true)}
      />
      <div
        style={{
          display: 'none',
        }}
      >
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis) => setVisible(vis),
          }}
        >
          <Image src={Image5} />
          <Image src={Image2} />
          <Image src={Image4} />
        </Image.PreviewGroup>
      </div>
    

  
     
    <>
      <Button className='m-4 h-50 w-10 '
       type="primary" onClick={() => setVisible(true)}>
        show image preview
      </Button>
      <Image
        width={200} height={50}
        style={{
          display: 'none',
        }}
        src={Image5}
        preview={{
          visible,
          // src: {Image2},
          onVisibleChange: (value) => {
            setVisible(value);
          },
        }}
      />
    </>
    
    <Result
    icon={<SmileOutlined />}
    title="Great, we have done all the operations!"
    extra={<Button type="primary">CLICK</Button>}
  />

              {/* <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                // minHeight: 360,
              }}
            >
              {/* Bill is a cat. */}
            </div>
          </Content>


          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  };
  
  export default Task4;