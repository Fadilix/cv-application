import React from 'react'
import html2canvas from 'html2canvas';

const PersonalInfo = ({
  userInfo,
  handleInputChange,
  handleDataClearing,
  imageHandler
}) => {
  const showExample = () => {
    window.location.reload();
  }
  const handleDownload = (canvas) => {
    const dataURL = canvas.toDataURL();
    const a = document.createElement('a');
    a.href = dataURL;
    a.download = 'cv-screenshot.png';
    a.click();
  };

  const generateScreenshot = () => {
    const input = document.getElementById('result');
    html2canvas(input).then((canvas) => {
      handleDownload(canvas);
    });
  };


  return (
    <div>
      <div className='cv-actions'>
        <h1>Personal info</h1>
        <button
          className='show'
          onClick={showExample}
        >CV Example</button>

        <button
          className='clear'
          onClick={handleDataClearing}
        >Clear data</button>

        <button
          onClick={generateScreenshot}
          className='download'
        >Download CV</button>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name='name'
          value={userInfo.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name='email'
          value={userInfo.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          name='contact'
          value={userInfo.contact}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="address">address</label>
        <input
          type="text"
          name='address'
          value={userInfo.address}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="">Profile picture</label>
        <input
        className='default-image-input'
          type="file"
          id='selectedImg'
          name='image'
          accept='image/*'
          onChange={imageHandler}
        />
        <input
          className='profile-pic-input'
          type="button"
          value="Upload picture"
          onClick={() => {
            document.getElementById("selectedImg").click();
          }}
        />
      </div>

    </div>
  )
}

export default PersonalInfo;