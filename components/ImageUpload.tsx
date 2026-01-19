'use client';

import { useState, useRef } from 'react';

interface ImageUploadProps {
  onUploadComplete: (url: string) => void;
  bucket?: string;
}

export default function ImageUpload({ onUploadComplete, bucket = 'listings' }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    // Upload file
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('bucket', bucket);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      onUploadComplete(data.url);
    } catch (err) {
      console.error('Upload error:', err);
      alert('Failed to upload image. Please try again.');
      setPreview(null);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{
      border: '2px dashed #ccc',
      borderRadius: '8px',
      padding: '20px',
      textAlign: 'center',
      cursor: 'pointer',
      backgroundColor: '#f9f9f9'
    }}
      onClick={() => fileInputRef.current?.click()}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        disabled={uploading}
        style={{ display: 'none' }}
      />

      {preview ? (
        <div>
          <img
            src={preview}
            alt="Preview"
            style={{
              maxWidth: '200px',
              maxHeight: '200px',
              marginBottom: '10px',
              borderRadius: '4px'
            }}
          />
          <p style={{ color: '#666' }}>
            {uploading ? 'Uploading...' : 'Image selected. Click to change.'}
          </p>
        </div>
      ) : (
        <div>
          <p style={{ fontSize: '1.1em', marginBottom: '10px' }}>📸</p>
          <p style={{ marginBottom: '5px' }}>Click to upload an image</p>
          <p style={{ color: '#999', fontSize: '0.9em' }}>or drag and drop</p>
        </div>
      )}
    </div>
  );
}
