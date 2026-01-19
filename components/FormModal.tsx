'use client';

import { useState } from 'react';

interface FormModalProps {
  isOpen: boolean;
  title: string;
  description?: string;
  fields: {
    name: string;
    label: string;
    type: 'text' | 'email' | 'tel' | 'textarea' | 'date';
    placeholder?: string;
    required?: boolean;
  }[];
  submitText?: string;
  accentColor?: string;
  onSubmit: (formData: Record<string, string>) => void;
  onClose: () => void;
}

export default function FormModal({
  isOpen,
  title,
  description,
  fields,
  submitText = 'Submit',
  accentColor = '#667eea',
  onSubmit,
  onClose
}: FormModalProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    onSubmit(formData);
    setSuccess(true);
    
    setTimeout(() => {
      setFormData({});
      setSuccess(false);
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: 16,
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        maxWidth: 500,
        width: '100%',
        maxHeight: '90vh',
        overflow: 'auto',
        animation: 'slideIn 0.3s ease'
      }}>
        {success ? (
          <div style={{
            padding: 60,
            textAlign: 'center'
          }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>
              Success!
            </h2>
            <p style={{ color: '#64748b', margin: 0 }}>
              Thank you for your submission. We'll be in touch soon.
            </p>
          </div>
        ) : (
          <>
            <div style={{ padding: 32, borderBottom: '1px solid #e2e8f0' }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0f172a', margin: '0 0 8px 0' }}>
                {title}
              </h2>
              {description && (
                <p style={{ color: '#64748b', margin: 0, fontSize: 14 }}>
                  {description}
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} style={{ padding: 32 }}>
              {fields.map(field => (
                <div key={field.name} style={{ marginBottom: 20 }}>
                  <label style={{
                    display: 'block',
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#0f172a',
                    marginBottom: 8
                  }}>
                    {field.label}
                    {field.required && <span style={{ color: '#ef4444' }}>*</span>}
                  </label>
                  
                  {field.type === 'textarea' ? (
                    <textarea
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formData[field.name] || ''}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: 14,
                        border: '1px solid #e2e8f0',
                        borderRadius: 8,
                        boxSizing: 'border-box',
                        fontFamily: 'inherit',
                        minHeight: 120,
                        resize: 'vertical'
                      }}
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formData[field.name] || ''}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: 14,
                        border: '1px solid #e2e8f0',
                        borderRadius: 8,
                        boxSizing: 'border-box'
                      }}
                    />
                  )}
                </div>
              ))}

              <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
                <button
                  type="button"
                  onClick={onClose}
                  disabled={loading}
                  style={{
                    flex: 1,
                    padding: '12px 24px',
                    background: '#f1f5f9',
                    color: '#0f172a',
                    border: 'none',
                    borderRadius: 8,
                    fontWeight: 600,
                    cursor: 'pointer',
                    opacity: loading ? 0.6 : 1
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    flex: 1,
                    padding: '12px 24px',
                    background: accentColor,
                    color: 'white',
                    border: 'none',
                    borderRadius: 8,
                    fontWeight: 600,
                    cursor: 'pointer',
                    opacity: loading ? 0.7 : 1
                  }}
                >
                  {loading ? 'Sending...' : submitText}
                </button>
              </div>
            </form>
          </>
        )}

        <style>{`
          @keyframes slideIn {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}</style>
      </div>
    </div>
  );
}
