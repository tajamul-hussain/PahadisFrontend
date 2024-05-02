// import React from 'react';
// import { Card, Typography } from 'antd';
// import { ClockCircleOutlined } from '@ant-design/icons';


// const { Title, Text } = Typography;

// const ComingSoonCard = () => {
//   return (
//     <Card
//       style={{ width: 300, marginTop: '18%',marginLeft:"38%", }}
//       cover={
//         <img
//           alt="Coming Soon"
//           src="https://images.unsplash.com/photo-1598149885212-c92671611588?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbWluZyUyMHNvb258ZW58MHx8MHx8fDA%3D" // Replace with your image URL
//           style={{ height: 200, objectFit: 'cover' }}
//         />
//       }
//     >
//       <Title level={3} style={{ textAlign: 'center' }}>
//         We Are Working On This Shop
//       </Title>
//       <Text type="secondary" style={{ textAlign: 'center', marginBottom: 20 }}>
//         Shop will be available soon. Thank you for your understanding.
//       </Text>
//       <div style={{ textAlign: 'center' }}>
//         <ClockCircleOutlined style={{ fontSize: 24, marginRight: 8 }} />
//         <Text type="secondary">Opening Date: Coming Soon</Text>
//       </div>
//     </Card>
//   );
// };

// export default ComingSoonCard;
import React from 'react';
import { Card, Typography } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import './ComingSoonContainer.css'; // Import custom CSS for the container

const { Title, Text } = Typography;

const ComingSoonCard = () => {
  return (
    <div className="coming-soon-container">
      <div className="background-image" />
      <Card
        className="coming-soon-card"
        cover={
          <img
            alt="Coming Soon"
            src="https://images.unsplash.com/photo-1598149885212-c92671611588?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbWluZyUyMHNvb258ZW58MHx8MHx8fDA%3D"
            style={{ height: 200, objectFit: 'cover' }}
          />
        }
      >
        <Title level={3} style={{ textAlign: 'center', color: 'white' }}>
          We Are Working On This Shop
        </Title>
        <Text type="secondary" style={{ textAlign: 'center', marginBottom: 20, color: 'white' }}>
          Shop will be available soon. Thank you for your understanding.
        </Text>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <ClockCircleOutlined style={{ fontSize: 24, marginRight: 8 }} />
          <Text type="secondary">Opening Date: Coming Soon</Text>
        </div>
      </Card>
    </div>
  );
};

export default ComingSoonCard;

