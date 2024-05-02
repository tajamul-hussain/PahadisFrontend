import React from 'react';
import { Typography, Divider, Card } from 'antd';
import { WhatsAppOutlined, MailOutlined, InstagramOutlined, FacebookOutlined } from '@ant-design/icons';
import '../components/ContactPage.css';
import { Footer } from 'antd/es/layout/layout';

const { Title } = Typography;

const ContactPage = () => {
  return (
    <div className='contact-container' style={{ padding: '20px', color: 'white' }}>
      <Title level={2}>Contact Us</Title>
      <Divider />
      <Card title="WhatsApp" className="contact-card" style={{ marginBottom: '20px' }}>
        <WhatsAppOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </Card>
      <Card title="Email" className="contact-card" style={{ marginBottom: '20px' }}>
        <MailOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
        <a href="mailto:example@example.com">Email</a>
      </Card>
      <Card title="Instagram" className="contact-card" style={{ marginBottom: '20px' }}>
        <InstagramOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
        <a href="https://www.instagram.com/thepahadisexplorer" target="_blank" rel="noopener noreferrer">Instagram</a>
      </Card>
      <Card title="Facebook" className="contact-card" style={{ marginBottom: '20px' }}>
        <FacebookOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
        <a  href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">Facebook</a>
      </Card>
      
    </div>
  );
}

export default ContactPage;
