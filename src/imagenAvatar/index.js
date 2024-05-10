import { useState } from 'react';
import { Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import CircularProgressBar from '../components/CircularProgressBar';

const AppAvatar = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const handleAvatarChange = (info) => {
    if (info.file.status === 'done') {
      // Obtener la URL de la imagen subida
      const imageUrl = URL.createObjectURL(info.file.originFileObj);
      setImageUrl(imageUrl);
    }
  };

  return (
    <>
    <CircularProgressBar progress={60}>
      <Upload name="avatar" showUploadList={false} onChange={handleAvatarChange} className="avatar-upload">
        <div className="avatar-container">
          {imageUrl ? (
            <img className="avatar-image" src={imageUrl} alt="Avatar" />
          ) : (
            <div style={{aspectRatio: '1 / 1', borderRadius: '50%'}} className="avatar-placeholder">
              <span className="avatar-text">Upload image</span>
            </div>
          )}
        </div>
      </Upload>
    </CircularProgressBar>
    </>
  );
};

export default AppAvatar;