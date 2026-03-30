import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import bannerTopImg from '../assets/Img/poster/Banner-2026.jpeg';
import bannerTemplateImg from '../assets/Img/poster/Banner Main-2026.jpeg';
import defaultPersonImg from '../assets/Img/poster/person.png';

const POSTER_CONFIG = {
  imageX: 589,
  imageY: 832,
  imageW: 272,
  imageH: 290,
  textY: 1186,
  textCenterX: 725,
  font: '600 40px "Noto Sans Gujarati", Arial, sans-serif',
  textColor: '#FF3434',
};

const PosterMaker = () => {
  const { t } = useTranslation();
  const [image, setImage] = useState(defaultPersonImg);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  const cropperRef = useRef(null);
  const fileInputRef = useRef(null);

  // Smooth scroll to preview when generated
  const previewSectionRef = useRef(null);

  const handleImageChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    if (files && files[0]) {
      reader.readAsDataURL(files[0]);
    }
  };

  const getRoundedCanvas = (sourceCanvas) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const width = 720;
    const height = 720;

    canvas.width = width;
    canvas.height = height;
    context.imageSmoothingEnabled = true;
    context.drawImage(sourceCanvas, 0, 0, width, height);
    context.globalCompositeOperation = 'destination-in';
    context.beginPath();
    context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
    context.fill();
    return canvas;
  };

  const insertExpense = async (finalName, mobileNumber) => {
    const URL_Main = 'https://script.google.com/macros/s/AKfycbyjW1jQYIqwJMJ6jNTybuaEhEoeT9a734n0y36yHlq6aiQJAMjYUVQgBay5tdUTORFpwA/exec';
    try {
      const formData = new URLSearchParams();
      formData.append('name', finalName);
      formData.append('mobile', mobileNumber);

      await fetch(URL_Main, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });
    } catch (error) {
      console.error('Error logging data:', error);
    }
  };

  const generatePoster = () => {
    if (image === defaultPersonImg) {
      alert(t('please_select_photo'));
      return;
    }

    setIsGenerating(true);

    setTimeout(() => {
      try {
        const cropper = cropperRef.current?.cropper;
        if (!cropper) return;

        if (!cropper.ready) {
          alert(t('please_wait_for_image_to_load') || 'Please wait for the photo to fully load.');
          setIsGenerating(false);
          return;
        }

        const croppedCanvas = cropper.getCroppedCanvas();
        if (!croppedCanvas) {
          alert('Could not crop image');
          setIsGenerating(false);
          return;
        }

        const roundedCanvas = getRoundedCanvas(croppedCanvas);

        const canvas = document.createElement('canvas');
        canvas.width = 960;
        canvas.height = 1280;
        const ctx = canvas.getContext('2d');

        const mainImage = new Image();
        mainImage.crossOrigin = "anonymous";
        mainImage.onload = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(mainImage, 0, 0, canvas.width, canvas.height);

          const secondImage = new Image();
          secondImage.onload = () => {
            ctx.drawImage(
              secondImage,
              POSTER_CONFIG.imageX,
              POSTER_CONFIG.imageY,
              POSTER_CONFIG.imageW,
              POSTER_CONFIG.imageH
            );

            let finalName = name.trim();
            if (finalName === '') {
              finalName = 'જય શ્રી રામ';
            }

            ctx.font = POSTER_CONFIG.font;
            ctx.fillStyle = POSTER_CONFIG.textColor;
            ctx.textAlign = 'center';
            ctx.fillText(finalName, POSTER_CONFIG.textCenterX, POSTER_CONFIG.textY);

            const dataUrl = canvas.toDataURL('image/png');
            setPreviewUrl(dataUrl);
            setIsGenerating(false);

            // Auto Download
            const link = document.createElement('a');
            link.download = 'hanuman_janmostav_invitation_2026.png';
            link.href = dataUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Log Data
            insertExpense(finalName, mobile);

            // Scroll to preview
            setTimeout(() => {
              previewSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
          };
          secondImage.src = roundedCanvas.toDataURL();
        };
        mainImage.onerror = () => {
          alert(t('error_loading_template'));
          setIsGenerating(false);
        };
        mainImage.src = bannerTemplateImg;
      } catch (err) {
        console.error(err);
        alert(t('error_loading_template'));
        setIsGenerating(false);
      }
    }, 50);
  };

  const handleManualDownload = () => {
    if (previewUrl) {
      const link = document.createElement('a');
      link.download = 'hanuman_janmostav_invitation_2026.png';
      link.href = previewUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="min-h-screen bg-[#3e070c] bg-[radial-gradient(circle_at_top,_#4d0910,_#2c0306)] pt-24 pb-12 font-['Noto_Sans_Gujarati',_sans-serif] text-[#f2c75c]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Card */}
        <div className="bg-[#4f0a12] border-2 border-[#f2c75c] rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.7)] p-6 md:p-10 mb-8">

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Form Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <img
                src={bannerTopImg}
                alt="banner"
                className="w-full max-w-[300px] border-2 border-[#f2c75c] rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.5)] mb-6"
              />

              <h2 className="text-2xl font-bold mb-6 text-center">{t('create_your_poster')}</h2>

              <div className="w-full max-w-[200px] mb-4 overflow-hidden rounded-xl bg-black/20 poster-cropper-container">
                <style>{`
                  .poster-cropper-container .cropper-view-box,
                  .poster-cropper-container .cropper-face {
                    border-radius: 50%;
                  }
                `}</style>
                <Cropper
                  ref={cropperRef}
                  style={{ height: 200, width: '100%' }}
                  initialAspectRatio={1}
                  aspectRatio={1}
                  src={image}
                  viewMode={0}
                  minCropBoxHeight={10}
                  minCropBoxWidth={10}
                  background={false}
                  responsive={true}
                  autoCropArea={0.85}
                  checkOrientation={false}
                  guides={false}
                  center={false}
                  highlight={false}
                  cropBoxMovable={false}
                  cropBoxResizable={false}
                  toggleDragModeOnDblclick={false}
                  dragMode="move"
                />
              </div>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/png, image/gif, image/jpeg"
                className="hidden"
              />

              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full bg-[#f2c75c] hover:bg-[#ffda78] text-[#3e070c] hover:text-[#290407] font-bold py-3 px-4 rounded-lg transition-all duration-200 shadow-[0_4px_10px_rgba(242,199,92,0.3)] hover:shadow-[0_6px_15px_rgba(242,199,92,0.4)] hover:-translate-y-[2px] mb-4"
              >
                {t('select_your_photo')}
              </button>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength="15"
                placeholder={t('your_name')}
                className="w-full border-2 border-[#f2c75c] bg-[#fff9ed] text-[#3e070c] font-semibold p-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#f2c75c]/50 mb-4 placeholder-[#3e070c]/60"
              />

              <input
                type="number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                maxLength="10"
                placeholder={t('your_mobile')}
                className="w-full border-2 border-[#f2c75c] bg-[#fff9ed] text-[#3e070c] font-semibold p-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#f2c75c]/50 mb-6 placeholder-[#3e070c]/60"
              />

              <button
                onClick={generatePoster}
                disabled={isGenerating}
                className="w-full bg-[#f2c75c] hover:bg-[#ffda78] text-[#3e070c] hover:text-[#290407] font-bold py-3 px-4 rounded-lg transition-all duration-200 shadow-[0_4px_10px_rgba(242,199,92,0.3)] hover:shadow-[0_6px_15px_rgba(242,199,92,0.4)] hover:-translate-y-[2px] disabled:opacity-70 disabled:hover:-translate-y-0 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isGenerating && (
                  <svg className="animate-spin h-5 w-5 text-[#3e070c]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {isGenerating ? t('loading') : t('generate_poster')}
              </button>

            </div>

            {/* Preview Section */}
            {previewUrl && (
              <div
                ref={previewSectionRef}
                className="w-full lg:w-1/2 flex flex-col items-center justify-start animate-fade-in"
              >
                <h3 className="text-xl font-bold mb-4">{t('preview')}</h3>
                <img
                  src={previewUrl}
                  alt="Poster Preview"
                  className="w-full max-w-[350px] border-4 border-[#f2c75c] rounded-xl shadow-lg mb-6"
                />

                <button
                  onClick={handleManualDownload}
                  className="w-full max-w-[350px] bg-[#f2c75c] hover:bg-[#ffda78] text-[#3e070c] hover:text-[#290407] font-bold py-3 px-4 rounded-lg transition-all duration-200 shadow-[0_4px_10px_rgba(242,199,92,0.3)] hover:shadow-[0_6px_15px_rgba(242,199,92,0.4)] hover:-translate-y-[2px]"
                >
                  {t('download_poster')}
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterMaker;
