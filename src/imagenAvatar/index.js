import { useState } from 'react';
import { Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';

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
      <Upload name="avatar" showUploadList={false} onChange={handleAvatarChange}>
        <div className="avatar-container">
          {imageUrl ? (
            <img className="avatar-image" src={imageUrl} alt="Avatar" />
          ) : (
            <div className="avatar-placeholder">
              <UserOutlined className="avatar-icon" />
              <span className="avatar-text">upload image</span>
            </div>
          )}
        </div>
      </Upload>
    </>
  );
};

export default AppAvatar;