// src/EntriesPage.js
import React, { useState, useEffect } from 'react';
import { List, Anchor, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { getEntries } from './utils';

const { Link: AnchorLink } = Anchor;

const EntriesPage = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const data = await getEntries();
      setEntries(data);
    };
    fetchEntries();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Anchor>
        {entries.map((entry) => (
          <AnchorLink
            key={entry.id}
            href={`#entry-${entry.id}`}
            title={entry.date}
          />
        ))}
      </Anchor>
      <List
        itemLayout="horizontal"
        dataSource={entries}
        renderItem={(item) => (
          <List.Item id={`entry-${item.id}`}>
            <List.Item.Meta
              title={item.date}
              description={item.content}
            />
          </List.Item>
        )}
      />
      <Link to="/add-entry">
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          size="large"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
          }}
        />
      </Link>
    </div>
  );
};

export default EntriesPage;
