// src/AddEntryPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import { getEntries } from './utils';

const AddEntryPage = () => {
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleAddEntry = async () => {
    const entries = await getEntries();
    const newEntry = { id: entries.length + 1, date, content };
    // Here you would normally update your backend
    console.log('New Entry:', newEntry);
    message.success('Entry added');
    navigate('/entries');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add New Entry</h2>
      <Form layout="vertical" onFinish={handleAddEntry}>
        <Form.Item label="Date">
          <Input value={date} onChange={(e) => setDate(e.target.value)} />
        </Form.Item>
        <Form.Item label="Content">
          <Input.TextArea value={content} onChange={(e) => setContent(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Add Entry</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddEntryPage;
