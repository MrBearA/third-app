import React from 'react';
import './App.css';
import Card from './Card';

function App() {
  const cardData = [
    {
      title: 'Onise Krizha Cortez',
      imageUrl: 'https://scontent.fmnl17-5.fna.fbcdn.net/v/t1.15752-9/458343769_418330830837858_8356701718823598301_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeESdPKxjkGvLqydcNESNQ9hutMG9uDaWi260wb24NpaLXff65En-2J3Y42Qq9pbsh1YpPvwpsndwwNKwqVhZD1Y&_nc_ohc=kZmGpmzLu1kQ7kNvgHA95Il&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=AGeTVPEUwcmk4-HrK1ixqWq&oh=03_Q7cD1QGlIKVbLe8Cr9Y-h5t-t1-nlumyhQh-aTUoYzfSrBtmAA&oe=67090EB3',
      body: " Her personality might be a blend of various traits. She could be friendly, outgoing, and enjoy spending time with friends and family. Alternatively, she might be more reserved and introspective, valuing quiet time and personal hobbies. Common qualities might include a sense of humor, curiosity, and a desire to learn and grow."
    },
    {
      title: 'Prince Lharrie Castillo',
      imageUrl: 'https://scontent.fmnl17-4.fna.fbcdn.net/v/t1.15752-9/458608274_1224773308663672_7777669234573243655_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeF77NjD6i5BPK8F6bwDVUXYB8JcfJJhiskHwlx8kmGKybNe9SyVKx5SzMB4c8sA4Iem561PcLcgd9Vg0uEPHOSB&_nc_ohc=6mb3YqxYYMgQ7kNvgGdMVPm&_nc_ht=scontent.fmnl17-4.fna&_nc_gid=AFSTqnJxgknU383bOS21o-x&oh=03_Q7cD1QES9U4RST6BNmqohWF5Xq8uRECJ--qnkc4qlEopKuME_g&oe=67093BD2',
      body: ' Pinoys are often known for their hospitality, friendliness, and strong sense of community. They value family relationships highly and are generally warm, welcoming, and respectful. A sense of humor is prevalent, and they often use humor to navigate challenges and build connections.',
    },
    {
      title: 'Shyanne Kimberly Cay',
      imageUrl: 'https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.15752-9/453967228_1041332313611495_4240663131725930197_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHAdZ29HTruOfSoJF9lz97QCRej6LplL9oJF6PoumUv2jgZRfeChOtcNBf4WKnl4EhrzvYxVQweq655xmJTDHVH&_nc_ohc=97maOeTz7LYQ7kNvgEawuvs&_nc_ht=scontent.fmnl17-1.fna&_nc_gid=AGeTVPEUwcmk4-HrK1ixqWq&oh=03_Q7cD1QHdqqnv3vzc3RqMrMeLSiPyYudl4w_P6GipdUZyIWw99w&oe=6709184C',
      body: 'This Snow White would retain her classic traits of kindness, innocence, and a pure heart. Her character might also embody qualities such as resilience and a strong sense of self, reflecting the strength and grace often celebrated within Black communities. She would be nurturing and compassionate, yet assertive and confident, standing up for herself and those she loves.',
    }
  ]; 

  return (
    <div className='app-container'>
      <hi className= "main-title"> Friend Card</hi>
      <div className='card-wrapper'>
      {cardData.map((data, index) => (
        <Card 
          key={index} 
          title={data.title} 
          imageUrl={data.imageUrl} 
          body={data.body} 
        />
      ))}
      </div>
    </div>
  );
}

export default App;
